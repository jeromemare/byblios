import debug from 'debug'
import * as cheerio from 'cheerio'

import { requestHtmlPage } from './utils'
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
    const homePage = await requestHtmlPage({
      method: 'GET',
      url,
    })
    const $ = cheerio.load(homePage)
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
