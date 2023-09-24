/* eslint-disable no-undef */
import debug from 'debug'
import iso88591 from 'windows-1252'
import axios from 'axios'

const log = debug('bibtou:utils')

/**
 * Permet de savoir si l'exécution est faite sur NodeJs
 * @return {Boolean} false si l'on s'exécute dans un navigateur
 */
function isNode() {
  return (
    Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) ===
    '[object process]'
  )
}

function createFileReader() {
  if (window.cordova) {
    const reader = new FileReader()
    /* eslint-disable no-underscore-dangle */
    return reader._realReader
  }

  return new FileReader()
}

async function convertBlobToText(blob, encoding = 'UTF-8') {
  // eslint-disable-next-line no-undef
  const reader = createFileReader()

  return new Promise(resolve => {
    // This fires after the blob has been read/loaded.
    reader.addEventListener('loadend', e => {
      const text = e.srcElement.result
      resolve(text)
    })

    // Start reading the blob as text.
    reader.readAsText(blob, encoding)
  })
}

async function requestHtmlPageForNode(options) {
  const nodeOptions = {
    ...options,
    responseType: 'arraybuffer',
    responseEncoding: 'binary',
  }
  const response = await axios.request(nodeOptions)
  return iso88591.decode(response.data.toString('binary'))
}

async function requestBrowser(options) {
  if (window.cordova && window.cordova.plugin && window.cordova.plugin.http) {
    log('Use Cordova advanced http')
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

async function requestHtmlPageForBrowser(options) {
  const browserOptions = {
    ...options,
    responseType: 'blob',
  }
  const response = await requestBrowser(browserOptions)
  const blob = response.data

  try {
    const data = await convertBlobToText(blob, 'iso8859-1')
    return data
  } catch (err) {
    log(err)
  }

  return ''
}

export async function requestHtmlPage(options) {
  if (isNode()) {
    return requestHtmlPageForNode(options)
  }
  return requestHtmlPageForBrowser(options)
}

export default {
  isNode,
  convertBlobToText,
  requestHtmlPage,
}
