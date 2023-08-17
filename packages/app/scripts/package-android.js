const fs = require('fs-extra')
const path = require('path')

const projectFolder = path.resolve(process.cwd())
const packagePath = path.join(projectFolder, 'package.json')
const packageJson = require(packagePath)

const targetEnvironment = process.env.BUILD_TARGET || 'production'
const srcCordovaFolder = path.join(projectFolder, 'src-cordova')

function packageApk () {
  const releaseFolder = path.join(projectFolder, 'release')
  fs.ensureDirSync(releaseFolder)
  const generatedApkPath = path.join(srcCordovaFolder, 'platforms', 'android', 'app', 'build', 'outputs', 'apk', 'debug', 'app-debug.apk')
  const packagedApkPath = path.join(releaseFolder, `${packageJson.productName}_v${packageJson.version}_${targetEnvironment}.apk`)
  fs.copySync(generatedApkPath, packagedApkPath)
}

packageApk()
