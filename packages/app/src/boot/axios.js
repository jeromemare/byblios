import { boot } from 'quasar/wrappers'
import axios from 'axios'

async function requestBrowser (options) {
  if (window.cordova && window.cordova.plugin && window.cordova.plugin.http) {
    console.log('Use Cordova advanced http')
    const { url, ...cordovaOptions } = options
    cordovaOptions.method = (cordovaOptions.method || 'get').toLowerCase()
    // prettier-ignore
    return new Promise((resolve, reject) => window.cordova.plugin.http.sendRequest(url, cordovaOptions, (response) => {
      resolve(response)
    }, (response) => {
      reject(response)
    }))
  }

  return axios.request(options)
}

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$request = requestBrowser
})
