const simpleGit = require('simple-git')()

simpleGit.checkout('config.xml', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('config.xml restored')
  }
})
