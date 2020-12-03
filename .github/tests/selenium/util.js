const path = require("path")
const selenium = require("selenium-webdriver")
const firefox = require("selenium-webdriver/firefox")

const GECKO_PATH = path.join(__dirname, "geckodriver-v0.27.0-win64", "geckodriver.exe")

function createSeleniumInstance() {
  let firefoxOption = new firefox.Options().setBinary(GECKO_PATH)

  return new selenium.Builder()
    .forBrowser("firefox")
    .setFirefoxOptions(firefoxOption)
    .build()
}

module.exports = {
  createSeleniumInstance
}