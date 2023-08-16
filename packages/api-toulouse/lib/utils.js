import iso88591 from 'windows-1252'
import axios from 'axios'

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

async function convertBlobToText(blob, encoding = 'UTF-8') {
  // eslint-disable-next-line no-undef
  const reader = new FileReader()

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

async function requestHtmlPageForBrowser(options) {
  const browserOptions = {
    ...options,
    responseType: 'blob',
  }
  const response = await axios.request(browserOptions)
  const blob = response.data

  return convertBlobToText(blob, 'iso8859-1')
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
