from typing import List
from pathlib import Path
import os

from selenium.webdriver.firefox.webdriver import WebDriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec
from selenium.common.exceptions import TimeoutException as SeleniumTimeoutException

import build_assets.test_util as test_util

class SeleniumRunner:
    """
    The long wait time for the driver in seconds.
    """
    LONG_WAIT_IN_SEC = 25

    """
    The medium wait time for the driver in seconds.
    """
    MED_WAIT_IN_SEC = 6

    """
    The short wait time for the driver in seconds.
    """
    SHORT_WAIT_IN_SEC = 0.6

    """
    The website URL.
    """
    LOCALHOST_URL = "http://localhost:8080/"

    def __init__(self, geckodriver_path: str, screenshot_path: str):
        """
        Create a SeleniumRunner object.
        :param geckodriver_path: the path to the firefox executable.
        """
        self.driver = WebDriver(executable_path=geckodriver_path)
        self.driver.get(self.LOCALHOST_URL)

        self.screenshot_path = screenshot_path
        try:
            os.mkdir(screenshot_path)
        except FileExistsError:
            pass

        assert "Hyper Typing Monster Language" in self.driver.title
        print("Page loaded successfully")

    def run(self):
        try:
            self.test_home()
            self.go_to_stats_page()
            self.test_stats_before_playing()
            self.go_to_home()
            # self.test_tutorial()
            # self.go_to_home()
            # self.test_stats_after_playing()
        except AssertionError:
            print("Above test failed")
        finally:
            self.shutdown()

    def take_screenshot(self, imgName):
        img_path = str(Path(self.screenshot_path, imgName).resolve())
        self.driver.save_screenshot(img_path)

    def test_home(self):
        self.take_screenshot("homepage.png")
        print("Took screenshot of homepage")

    def go_to_home(self):
        menu_btn = self.driver.find_element(By.XPATH, "//a[contains(text(),'Menu')]")
        menu_btn.click()

    def shutdown(self):
        self.driver.quit()

    def go_to_stats_page(self):
        print("Go to stats view \n")
        stats_btn = self.driver.find_element(By.XPATH, "/html/body/div/div/main/section[1]/button[5]/a")
        stats_btn.click()
        assert "stats" in self.driver.current_url

    def test_stats_before_playing(self):
        print("Testing stats page before playing\n")
        self.take_screenshot("stats.png")
        print("Take stats screenshot before playing\n")
        highscores = self.get_stats_from_highscores_div()
        recent_scores = self.get_stats_from_recent_scores_div()
        test_util.test_highscores_ordered_high_to_low(highscores)
        test_util.test_scores_are_five_each(highscores, recent_scores)

    def get_stats_from_highscores_div(self):
        highscores_div = self.driver.find_element(By.XPATH, "/html/body/div/div/div[1]")
        score_ps = highscores_div.find_elements(By.TAG_NAME, "p")
        return [p.text[3:] for p in score_ps]

    def get_stats_from_recent_scores_div(self):
        recent_scores_div = self.driver.find_element(By.XPATH, "/html/body/div/div/div[2]")
        score_ps = recent_scores_div.find_elements(By.TAG_NAME, "p")
        return [p.text[3:] for p in score_ps]

    def test_tutorial(self):
        print("Testing tutorial view is working")
        tutorial_btn = self.driver.find_element(By.XPATH, "/html/body/div/div/main/section[1]/button[1]")
        tutorial_btn.click()
        WebDriverWait(self.driver, SeleniumRunner.MED_WAIT_IN_SEC).until(
            ec.presence_of_element_located((By.XPATH, "/html/body/div/div/div/textarea"))
        )

        cur_char_span  = self.driver.find_element(By.XPATH, "/html/body/div/div/div/span[2]")
        remaining_txt_span  = self.driver.find_element(By.XPATH, "/html/body/div/div/div/span[3]")
        text_area  = self.driver.find_element(By.XPATH, "/html/body/div/div/div/textarea")
        text_area.send_keys(f"{cur_char_span.text}{remaining_txt_span.text}")

        WebDriverWait(self.driver, SeleniumRunner.MED_WAIT_IN_SEC).until(
            ec.presence_of_element_located((By.XPATH, "//h1[contains(text(), 'You lost')]"))
        )

    def test_stats_after_playing(self):
        self.test_stats_before_playing()