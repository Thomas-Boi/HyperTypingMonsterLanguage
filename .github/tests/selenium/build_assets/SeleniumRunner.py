from typing import List
from pathlib import Path
import time

from selenium.webdriver.firefox.webdriver import WebDriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec
from selenium.common.exceptions import TimeoutException as SeleniumTimeoutException


class SeleniumRunner:
    """
    A runner that upload and download Icomoon resources using Selenium.
    The WebDriver will use Firefox.
    """

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
        assert "Hyper Typing Monster Language" in self.driver.title


    def take_screenshot(self, imgName):
        img_path = Path(self.screenshot_path, imgName).resolve()
        self.driver.save_screenshot(str(img_path))

    def run(self):
        self.take_screenshot("test.png")
        self.driver.quit()

        