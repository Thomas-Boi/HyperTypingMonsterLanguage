const path = require("path")
const selenium = require("selenium-webdriver")
const firefox = require("selenium-webdriver/firefox")

const GECKO_PATH = path.join(__dirname, "geckodriver-v0.27.0-win64", "geckodriver")


async function createSeleniumInstance() {
  console.log(GECKO_PATH)
  let firefoxOption = new firefox.Options().setBinary(firefox.)

  return new selenium.Builder()
    .setFirefoxOptions(firefoxOption)
    .forBrowser("firefox")
    .build()
}

module.exports = {
  createSeleniumInstance
}