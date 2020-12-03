const selenium = require("selenium-webdriver")
const firefox = require("selenium-webdriver/firefox")
const util = require("./util")
const fsPromise = require("fs").promises
const path = require("path")

// must turn on the server before running script
async function main() {
  // get the homeDir passed in as arg
  let screenshotFolderPath = process.argv[2]
  
  let driver = util.createSeleniumInstance()
  try {
    await driver.get("https://localhost:8080/")
    let pngFile = await driver.takeScreenshot()
    let pngFilePath = path.join(screenshotFolderPath, "home.png")
    await fsPromise.writeFile(pngFilePath, pngFile)
  } finally {
    await driver.quit()
  }
}

main()