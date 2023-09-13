import debug from 'debug'
import * as cheerio from 'cheerio'
import cheerioTableparser from 'cheerio-tableparser'

import { mapSeries } from 'blend-promise-utils'
import { parse } from 'date-fns'
import _ from 'lodash'

import { getResults, prepare, prepareAdvanced, search } from './search-service'
import { setBibHost, getBibHost, getSession } from './generic-service'
import { requestHtmlPage } from './utils'

const log = debug('bibtou:borrow')

async function getAccountHtmlPage(session, user) {
  const requestBody = {
    fail_screen: 'LoginOTFFailed.html',
    screen: 'MyAccount.html',
    server: '',
    item: '',
    item_source: '',
    userid: user.id,
    pin: user.pin,
  }

  const bibHost = getBibHost()
  log(`Get account page ${bibHost}${session}`)
  const config = {
    method: 'POST',
    url: `${bibHost}${session}`,
    data: requestBody,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }

  return requestHtmlPage(config)
}

function createBookListFromHtmlTable(tableData, $) {
  function getInnerText(html) {
    if (!html) {
      return ''
    }
    let htmlData = ''
    // console.log('> ', html)
    try {
      const processedHtml = $(`<div>${html}<div>`).prop('innerText')
      htmlData = processedHtml || ''
    } catch (err) {
      htmlData = html || ''
    }
    // console.log('>> ', htmlData)
    return htmlData.trim()
  }

  const cleanTable = tableData.slice(1).map(list => list.slice(1))
  if (cleanTable.length > 0) {
    return cleanTable[0].map((htmlTitle, index) => {
      const titre = getInnerText(htmlTitle)
      const auteur = getInnerText(cleanTable[1][index]).replace('?NON ETABLIE', '')
      const renewalText = getInnerText(cleanTable[7][index]).split('\n')
      const retard = getInnerText(cleanTable[6][index])
      const [nbRenewal, dateRenewal = ''] = renewalText.map(text => text.trim())
      return {
        titre,
        auteur,
        code: getInnerText(cleanTable[2][index]),
        type: getInnerText(cleanTable[3][index]),
        emprunte: getInnerText(cleanTable[4][index]),
        rendre: parse(getInnerText(cleanTable[5][index]), 'd/M/yyyy,HH:mm', new Date()),
        retard,
        renewal: {
          count: nbRenewal || 0,
          date: dateRenewal,
        },
      }
    })
  }

  return []
}

function createReservedBookListFromHtmlTable(tableData) {
  const cleanTable = tableData.slice(1).map(list => list.slice(1))

  if (cleanTable.length > 0) {
    return cleanTable[0].map((cote, index) => {
      const titre = cleanTable[1][index]
      const dateSince = cleanTable[4][index]
      const since = dateSince !== '' ? parse(dateSince.trim(), 'd/M/yyyy', new Date()) : undefined
      return {
        cote,
        titre,
        auteur: cleanTable[2][index],
        where: cleanTable[3][index],
        since,
      }
    })
  }

  return []
}

function getAccountRealName(html) {
  const $ = cheerio.load(html, {
    decodeEntities: false,
  })
  const userRealNameHtml = $(
    'body > div > div > div > table > tbody > tr > td > table:nth-child(1) > tbody > tr > td > h2',
  )
  const userRealName = userRealNameHtml
    .text()
    .split(',')
    .map(name => name.trim())
  const firstName = userRealName[1] || ''
  const lastName = userRealName[0] || ''
  return {
    first: firstName,
    last: lastName,
    full: `${firstName} ${lastName}`,
  }
}

function getUserInfo(userInfoData, index, regex, defaultValue = '') {
  const match = userInfoData[index].match(regex)
  return match && match.length > 0 ? match[0] : defaultValue
}

function getAccountUserInfo(html) {
  const $ = cheerio.load(html, {
    decodeEntities: false,
  })
  const userInfoHtml = $(
    '#panel1 > div.bibinfo > table:nth-child(2) > tbody > tr > td.searchcontent',
  )
  const userInfoDataHtml = userInfoHtml.html()
  if (!userInfoDataHtml) {
    console.error("L'utilisateur n'est pas reconnu")
  }
  // TODO Si userInfoDataHtml est null => l'utilisateur n'existe pas, remonter l'information
  const userInfoData = userInfoDataHtml.split('<br>').map(info => info.trim())

  const expirationDateRegex = /\d+\/\d+\/\d+/
  const mailRegex = /[^\s]+@[^\s]+/
  const phoneRegex = /\d{2} \d{2} \d{2} \d{2} \d{2}/

  const expirationDate = getUserInfo(userInfoData, 3, expirationDateRegex, '--/--/--')
  const mail = getUserInfo(userInfoData, 1, mailRegex)
  const phone = getUserInfo(userInfoData, 1, phoneRegex)

  return {
    phone,
    expirationDate,
    mail,
  }
}

function getAccountBorrowedBooks(html, user) {
  const $ = cheerio.load(html)
  cheerioTableparser($)
  const documentListSelector = '#panel2 > div > form > table:nth-child(2)'
  const documents = $(documentListSelector).parsetable(true, true, false)
  const bookList = createBookListFromHtmlTable(documents, $)

  const tds = $('#panel2 > div > form > table:nth-child(2) input[name=HASNOW]')
    .map(function getNodeValue() {
      return this.attribs.value
    })
    .get()

  return bookList.map((book, index) => {
    const id = tds[index].split(':').shift()
    const form = tds[index]

    log(`getBook ${id} ${book.titre}`)
    return {
      ...book,
      id,
      form,
      user,
    }
  })
}

function getAccountReservedBooks(html, user) {
  const $ = cheerio.load(html)
  cheerioTableparser($)
  const documentListSelector = '#panel3 > div > form > table:nth-child(2)'
  const documents = $(documentListSelector).parsetable(true, true, true)
  const bookList = createReservedBookListFromHtmlTable(documents)

  const tds = $('#panel3 > div > form > table:nth-child(2) input[name=request]')
    .map(function getNodeValue() {
      return this.attribs.value
    })
    .get()

  return bookList.map((book, index) => {
    return {
      ...book,
      id: tds[index].split('|').shift(),
      form: tds[index],
      user,
    }
  })
}

async function disconnect(session) {
  const bibHost = getBibHost()
  const logoutUrl = `${bibHost}/web2/tramp2.exe/log_out/${session}`
  log(`Disconnect user: ${logoutUrl}`)
  try {
    const logoutPage = await requestHtmlPage({
      method: 'GET',
      url: logoutUrl,
    })
    return logoutPage
  } catch (error) {
    log('Disconnect error', { error })
  }

  return ''
}

async function connect(user) {
  const session = await getSession()
  if (session) {
    const sessionToken = session.split('/').pop()
    await getAccountHtmlPage(session, user)
    return sessionToken
  }

  return undefined
}

function getAccountInfoFromWebPage(accountHtmlPage, user) {
  const userInfo = getAccountUserInfo(accountHtmlPage)
  const detail = getAccountRealName(accountHtmlPage)

  // # On obtient les emprunts
  const borrowedBooks = getAccountBorrowedBooks(accountHtmlPage, user)
  // # On obtient les réservations
  const reservedBooks = getAccountReservedBooks(accountHtmlPage, user)

  return {
    user,
    detail,
    info: userInfo,
    borrowedBooks,
    reservedBooks,
  }
}

/**
 * Obtient pour un utilisateur les détails de son compte
 * - Nom, adresse, période de validité de l'abonnement, mail
 * - Emprunts
 * - Réservation
 * @param {Object} user
 */
export async function getAccountDetails(user) {
  console.log('Get Account detail for', { user })
  if (!user || !user.id || !user.pin) {
    log(`getAccountDetails l'utilisateur ${user} ne définit pas d'id ou de pin`)
  }

  try {
    const session = await getSession()
    if (session) {
      const sessionToken = session.split('/').pop()
      const accountHtmlPage = await getAccountHtmlPage(session, user)
      // # On se déconnecte pour libérer la session côté serveur
      const accountDetails = getAccountInfoFromWebPage(accountHtmlPage, user)
      await disconnect(sessionToken)
      return accountDetails
    }
    return {
      error: true,
      message: 'Pas de session disponible',
      code: 404,
    }
  } catch (error) {
    log(error)
    return {
      error,
      message: 'Erreur interne',
      code: 500,
    }
  }
}

export async function renewRequest(session, documents) {
  let hasnow = documents.map(({ form }) => form)
  if (hasnow.length === 1) {
    hasnow = hasnow.pop()
  }
  const requestBody = `HASNOW=${hasnow}&buttons=Renew%3Drenew_hasnow+screen%3DMyAccount.html&Renew=Renouveler+les+pr%EAts+s%E9lectionn%E9s&buttons=RenewAll%3Drenew_hasnow+hasnow=all+screen%3DMyAccount.html`
  // const requestBody = {
  //   HASNOW: hasnow,
  //   buttons: [
  //     'Renew=renew_hasnow+screen=MyAccount.html',
  //     'RenewAll=renew_hasnow+hasnow=all+screen=MyAccount.html',
  //   ],
  //   Renew: 'Renouveler+les+pr%EAts+s%E9lectionn%E9s',
  // }

  const bibHost = getBibHost()
  const config = {
    method: 'POST',
    url: `${bibHost}/web2/tramp2.exe/form/${session}`,
    data: requestBody,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }
  log({ config })
  const responseHtml = await requestHtmlPage(config)
  log(responseHtml)
  return responseHtml
}

export async function renewDocumentsForUser({ user, documents }) {
  log(`renewDocumentsForUser ${documents.length} docs for ${user.name}`)
  // # Connect the user
  const session = await connect(user)
  log(`user ${user.name} connected`)
  // # Renew all user documents
  const accountHtmlPage = await renewRequest(session, documents)
  // # Update documents list for user
  const accountDetails = getAccountInfoFromWebPage(accountHtmlPage, user)
  // # Disconnect the user
  await disconnect(session)
  log(`user ${user.name} disconnected`)
  return accountDetails
}

export async function renewDocuments(documents) {
  log(`renewDocuments ${documents.length} docs`)
  // # Grouper les documents par utilisateurs
  const documentsByUsers = _.compact(
    Object.values(_.groupBy(documents, document => document.user.id)).map(docs => {
      if (!docs || !docs.length || docs.length === 0) {
        return null
      }

      // Liste de { user, documents }
      return {
        documents: docs,
        user: docs[0].user,
      }
    }),
  )

  // # Pour chaque utilisateur renouveller les documents
  return mapSeries(documentsByUsers, renewDocumentsForUser)
}

export { setBibHost, getResults, prepare, prepareAdvanced, search }

export default {
  setBibHost,
  getAccountDetails,
  renewDocuments,
  getResults,
  prepare,
  prepareAdvanced,
  search,
}
