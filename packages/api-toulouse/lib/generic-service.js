import debug from 'debug'
import axios from 'axios'
import * as cheerio from 'cheerio'

import NotAvailableError from './errors/NotAvailableError'

const log = debug('bibtou:generic')

let bibHost = 'http://catalogues.toulouse.fr'

export function setBibHost(host) {
  bibHost = host
}

export function getBibHost() {
  return bibHost
}

export async function getSession() {
  const url = `${bibHost}/web2/tramp2.exe/log_in?setting_key=BMT1&screen=MyAccount.html`
  log(`Get homepage ${url}`)
  try {
    const homeResponse = await axios.get(url)
    console.log('-', { cheerio })
    const $ = cheerio.load(homeResponse.data)
    console.log('--', $)
    const loginFormUrl = $('form[name=loginWN]').attr('action')
    if (!loginFormUrl) {
      throw new Error('Impossible de trouver le code de session')
    }
    return loginFormUrl
  } catch (error) {
    console.error('err', { error })
    throw new NotAvailableError('Service non disponible', error)
  }
}

export async function getSessionId() {
  const loginUrl = await getSession()
  const sessionId = loginUrl.split('/').pop()
  return sessionId
}
