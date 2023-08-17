require('dotenv-flow').config()
const fs = require('fs')
const parser = require('xml2json')

const cordovaAppName = process.env.CORDOVA_APPNAME || 'Ma Biblio'

fs.readFile('./config.xml', function (err, data) {
  if (err) {
    console.error(err)
    return
  }
  const config = JSON.parse(parser.toJson(data, { reversible: true }))
  config.widget.name.$t = cordovaAppName

  var stringified = JSON.stringify(config)
  var xml = parser.toXml(stringified)
  fs.writeFile('./config.xml', xml, function (err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log('config updated!')
    }
  })
})
