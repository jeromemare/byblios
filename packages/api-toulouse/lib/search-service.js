import debug from 'debug'
import { stringify } from 'querystring'
import * as cheerio from 'cheerio'

import { mapLimit, retry } from 'blend-promise-utils'
import _ from 'lodash'
import { getBibHost, getSessionId } from './generic-service'
import { requestHtmlPage } from './utils'

import Document from './Document'

const log = debug('bibtou:search')

function getReferenceFromWebResultWithTable(webResult) {
  const document = Document.createFromWebPage(webResult)
  return document
}

/**
 * Obtient le détail d'un résultat de la recherche
 *
 */
async function getSearchResultItemDetail(itemNumber, sessionId) {
  const bibHost = getBibHost()
  const newSessionId = sessionId.replace('000', '001')
  const url = `${bibHost}/web2/tramp2.exe/see_record/${newSessionId}?server=1home&item=${itemNumber}&item_source=1home`
  const config = {
    method: 'GET',
    url,
  }
  const resultPage = await requestHtmlPage(config)
  return resultPage
}

async function acquireSearchResultItemDetail(itemNumber, sessionId) {
  const webPageDetail = await getSearchResultItemDetail(itemNumber, sessionId)

  return {
    ...getReferenceFromWebResultWithTable(webPageDetail),
    _search: {
      item: itemNumber,
      date: new Date(),
    },
  }
}

/**
 * Parse des résultats sous forme de liste
 */
async function getReferenceFromWebResultList(
  webresult,
  resultsCount,
  sessionId,
  limit = 5,
  offset = 0,
) {
  const resultArray = _.range(offset + 1, Math.min(resultsCount - offset, limit) + 1)
  const results = await mapLimit(resultArray, 1, async result =>
    retry(acquireSearchResultItemDetail, {
      delayMs: 500,
      maxAttempts: 4,
    })(result, sessionId),
  )
  return results
}

async function getReferencesFromWebResults(webResult, sessionId, limit) {
  const $ = cheerio.load(webResult, {
    decodeEntities: false,
  })
  const resultCountHtml = $('body')
  const nbResultRegExp = /a\s+repéré\s+(\d+)\s+titres/i
  const resultsCountLabel = resultCountHtml.text().match(nbResultRegExp)
  if (resultsCountLabel) {
    const resultsCount = resultsCountLabel[1] || 0
    // eslint-disable-next-line no-console
    console.log(`${resultsCount} documents trouvés`)
    return getReferenceFromWebResultList(webResult, resultsCount, sessionId, limit)
  }

  // Ici il y a un problème
  return {
    _search: {
      item: 1,
      date: new Date(),
    },
    ...getReferenceFromWebResultWithTable(webResult),
  }
}

export async function search(term, limit) {
  const sessionId = await getSessionId()
  const bibHost = getBibHost()
  log(`Search ${bibHost}/web2/tramp2.exe/form/${sessionId}`)
  const requestBody = {
    servers: '1home',
    query_screen: 'Home.html',
    query: term,
    index: 'default',
    buttons: [
      'k_keyword=do_keyword_search default_value=k_keyword k_keyword=k_keyword',
      '*=do_keyword_search default_value=k_keyword k_keyword=k_keyword',
    ],
    k_keyword: 'OK',
    location_group_filter: 'ALL',
  }

  const config = {
    method: 'POST',
    url: `${bibHost}/web2/tramp2.exe/form/${sessionId}`,
    data: stringify(requestBody),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }
  const resultPage = await requestHtmlPage(config)
  return getReferencesFromWebResults(resultPage, sessionId, limit)
}

function getResultsCount(webResult) {
  const $ = cheerio.load(webResult, {
    decodeEntities: false,
  })
  const resultCountHtml = $('body')
  const nbResultRegExp = /a\s+repéré\s+(\d+)\s+titres/i
  const resultsCountLabel = resultCountHtml.text().match(nbResultRegExp)

  return (resultsCountLabel && resultsCountLabel[1]) || 1
}

function getResultsDocument(webResult, count) {
  if (count !== 1) {
    return []
  }
  const document = getReferenceFromWebResultWithTable(webResult)
  return [document]
}

export async function prepare(term) {
  const sessionId = await getSessionId()
  const bibHost = getBibHost()
  log(`Search ${bibHost}/web2/tramp2.exe/form/${sessionId}`)
  const requestBody = {
    servers: '1home',
    query_screen: 'Home.html',
    query: term,
    index: 'default',
    buttons: [
      'k_keyword=do_keyword_search default_value=k_keyword k_keyword=k_keyword',
      '*=do_keyword_search default_value=k_keyword k_keyword=k_keyword',
    ],
    k_keyword: 'OK',
    location_group_filter: 'ALL',
  }
  const config = {
    method: 'POST',
    url: `${bibHost}/web2/tramp2.exe/form/${sessionId}`,
    data: stringify(requestBody),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }
  const resultPage = await requestHtmlPage(config)
  const count = getResultsCount(resultPage)
  const documents = getResultsDocument(resultPage, count)

  const searchSession = {
    sessionId,
    count,
    documents,
  }

  return searchSession
}

/**
 *
 * @param {Object} searchSession Session de recherche
 * @param {Object} options Options d'obtention des résultats
 * @param {Function} options.addDocument Handle renvoyant les documents au fur et à mesure de leur acquisition
 * @param {Number} options.limit Nombre de documents à obtenir
 */
export async function getResults(searchSession, options = {}) {
  const { count = 1, sessionId } = searchSession
  const { limit = 9999, addDocument } = options
  if (count === 1) {
    if (addDocument) {
      addDocument(searchSession.documents[0], 1)
    }

    return searchSession
  }

  const resultArray = _.range(1, Math.min(count, limit) + 1)
  const results = await mapLimit(resultArray, 1, async result => {
    const document = await retry(acquireSearchResultItemDetail, {
      delayMs: 500,
      maxAttempts: 4,
    })(result, sessionId)

    if (addDocument) {
      addDocument(document, result)
    }
    return document
  })
  return results
}

export async function prepareAdvanced(query = {}) {
  const {
    groupLocation = 'ALL',
    location = 'RESV-ENF',
    itemCategory2 = 'ALL',
    sortByFilter = 'AU',
  } = query
  const sessionId = await getSessionId()
  const bibHost = getBibHost()
  log(`Advanced search ${bibHost}/web2/tramp2.exe/do_keyword_search/${sessionId}`)

  const requestBody = {
    location_group_filter: groupLocation || 'ALL',
    location_filter: location || 'ALL',
    item_category2_filter: itemCategory2 || 'ALL',
    material_filter: 'ALL',
    item_category1_filter: 'ALL',
    language_filter: 'all',
    shadow: ['NO', ''],
    display: 'Afficher+%E9nonc%E9+de+recherche',
    clearElements: 'Effacer+%E9nonc%E9+de+recherche',
    date_filter: '',
    sort_by_filter: sortByFilter,
    query: '+',
    clear: 'Effacer',
    submit: 'Chercher',
    index: 'default',
    query_screen: 'PowerSearchPK.html',
    servers: '1home',
    keyword_parser: 'CCL_SEARCH',
  }
  const config = {
    method: 'POST',
    url: `${bibHost}/web2/tramp2.exe/do_keyword_search/${sessionId}`,
    data: stringify(requestBody),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }

  const resultPage = await requestHtmlPage(config)
  const count = getResultsCount(resultPage)
  const documents = getResultsDocument(resultPage, count)

  const searchSession = {
    sessionId,
    count,
    documents,
  }

  return searchSession
}

export default {
  search,
  prepareAdvanced,
  prepare,
  getResults,
}
