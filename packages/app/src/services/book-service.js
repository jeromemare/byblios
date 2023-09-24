import { Platform } from 'quasar'

import {
  setBibHost,
  renewDocuments as apiRenewDocuments,
  getAccountDetails as apiGetAccountDetails,
  search as apiSearch,
  prepare as apiPrepare,
  prepareAdvanced as apiPrepareAdvanced,
  getResults as apiGetResults
} from '@byblios/api-toulouse'

import mockData from '../../data/mockData.json'

import addDays from 'date-fns/addDays'

async function renewDocuments (documents) {
  if (!Platform.is.nativeMobile) {
    setBibHost('/bib')
  }

  return apiRenewDocuments(documents)
}

async function getAccountDetailsForUser (user) {
  if (!Platform.is.nativeMobile) {
    setBibHost('/bib')
  }

  return apiGetAccountDetails(user)
}

async function search (term, limit = 10) {
  if (!Platform.is.nativeMobile) {
    setBibHost('/bib')
  }

  return apiSearch(term, limit)
}

async function prepare (term) {
  if (!Platform.is.nativeMobile) {
    setBibHost('/bib')
  }

  return apiPrepare(term)
}

async function prepareAdvanced (query) {
  if (!Platform.is.nativeMobile) {
    setBibHost('/bib')
  }

  return apiPrepareAdvanced(query)
}

async function getResults (searchSession, options) {
  return apiGetResults(searchSession, options)
}

async function mockGetData () {
  const { users, documents } = mockData

  return {
    users,
    documents: documents.map((document) => {
      const rendre = addDays(new Date(), document.rendre)
      return {
        ...document,
        rendre
      }
    })
  }
}

export {
  renewDocuments,
  getAccountDetailsForUser,
  search,
  mockGetData,
  prepare,
  prepareAdvanced,
  getResults
}
