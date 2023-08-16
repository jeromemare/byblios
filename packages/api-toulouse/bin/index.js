#!/usr/bin/env node

const program = require('commander')

const perf = require('execution-time')()

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const GenericService = require('../lib/generic-service')
const SearchService = require('../lib/search-service')
const { printDocuments } = require('../lib/documents-service')

const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ documents: [] }).write()

function setProxy(options = {}) {
  const { proxy, local } = options
  if (local) {
    GenericService.setBibHost('http://localhost:3000')
  } else if (proxy) {
    GenericService.setBibHost(proxy)
  }
}

async function search(term, options = {}) {
  const { nbResults } = options
  setProxy(options)
  perf.start()
  console.log(term)
  const reference = await SearchService.search(term, nbResults)
  const results = perf.stop()
  printDocuments(reference)
  console.log(results.preciseWords)
}

async function adv(term, options = {}) {
  const { nbResults } = options
  setProxy(options)
  perf.start()
  console.log(term)
  const searchSession = await SearchService.prepareAdvanced(term)
  console.log(`${searchSession.count} documents identifiés`)
  const references = await SearchService.getResults(searchSession, {
    addDocument(document) {
      db.get('documents')
        .push(document)
        .write()
      printDocuments(document)
    },
    limit: nbResults,
  })
  const results = perf.stop()
  console.log(results.preciseWords, references.length)
}

async function asyncSearch(term, options = {}) {
  const { nbResults } = options
  setProxy(options)
  perf.start()
  console.log(term)
  const searchSession = await SearchService.prepare(term)
  console.log(`${searchSession.count} documents identifiés`)
  const references = await SearchService.getResults(searchSession, {
    addDocument(document) {
      printDocuments(document)
    },
    limit: nbResults,
  })
  const results = perf.stop()
  console.log(results.preciseWords, references.length)
}

program.storeOptionsAsProperties(false).passCommandToAction(false)

program
  .command('search <term>')
  .alias('s')
  .option('-n,--nbResults <nbResults>')
  .option('-p --proxy <proxy>')
  .option('-l --local')
  .description('Recherche de documents')
  .action((term, options) => {
    search(term, options)
  })

program
  .command('asearch <term>')
  .alias('a')
  .option('-n,--nbResults <nbResults>')
  .option('-p --proxy <proxy>')
  .option('-l --local')
  .description('Recherche de documents')
  .action((term, options) => {
    asyncSearch(term, options)
  })

program
  .command('adv <term>')
  .alias('s')
  .option('-n,--nbResults <nbResults>')
  .option('-p --proxy <proxy>')
  .option('-l --local')
  .description('Recherche avancée de documents')
  .action((term, options) => {
    adv(term, options)
  })

// allow commander to parse `process.argv`
program.parse(process.argv)
