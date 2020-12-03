const selenium = require("selenium-webdriver")
const firefox = require("selenium-webdriver/firefox")
const util = require("./util")
const fsPromise = require("fs/promises")
const path = require("path")
const child_process = require("child_process")

// must turn on the server before running script
async function main() {
  // get the homeDir passed in as arg
  let screenshotFolderPath = process.argv[2]

  // don't wait cause it's a server
  child_process.exec("npm run serve")
  let driver = util.createSeleniumInstance()
  try {
    await driver.get("http://localhost:8080/")
    let pngFile = await driver.takeScreenshot()
    let pngFilePath = path.join(screenshotFolderPath, "home.png")
    await fsPromise.writeFile(pngFilePath, pngFile)
  } finally {
    await driver.quit()
  }
}

async function startServer() {
  return new Promise((resolve, reject) => {
    child_process.exec("npm run serve", (err, stdout) => {
      if (err) {
        reject(err)
        return
      }
    })
  })
}

async function test_tutorial(driver) {

}

main()