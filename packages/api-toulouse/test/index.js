/* eslint-disable no-console */
require('dotenv-flow').config()
require('axios-debug-log')

const chalk = require('chalk')
const format = require('date-fns/format')

const compareAsc = require('date-fns/compareAsc')
const differenceInDays = require('date-fns/differenceInDays')

const promiseUtils = require('blend-promise-utils')

const _ = require('lodash')

const bibtouApi = require('../lib')

/**
 *
 * @param {Array<Object>} bookList
 */
function displayBookList(bookList) {
  bookList
    .sort(({ rendre: rendre1 }, { rendre: rendre2 }) => compareAsc(rendre1, rendre2))
    .forEach(bl => {
      const bookDisplayLine = `${format(bl.rendre, 'dd LLL')} (${bl.renewal.count}): [${bl.user &&
        bl.user.name}] ${bl.titre} - ${bl.auteur} - <${bl.id}>`
      if (bl.renewal.count === '2') {
        console.log(chalk.blue(bookDisplayLine))
      } else if (differenceInDays(bl.rendre, new Date()) <= 2) {
        console.log(chalk.red(bookDisplayLine))
      } else {
        console.log(chalk.green(bookDisplayLine))
      }
    })
}

/**
 *
 * @param {Array<Object>} bookList
 */
function displayReservedBookList(bookList) {
  bookList.forEach(bl => {
    const bookDisplayLine = ` : [${bl.user && bl.user.name}] ${bl.titre} - ${bl.auteur} - ${
      bl.where
    } - <${bl.id}>`
    if (bl.since) {
      console.log(chalk.green(`${format(bl.since, 'dd LLL')}${bookDisplayLine}`))
    } else {
      console.log(chalk.yellow(`-- ---${bookDisplayLine}`))
    }
  })
}

function getUserFromEnvironment() {
  const usersEnv = process.env.USERS || ''
  const users = usersEnv
    .split(';')
    .map(userDefinition => userDefinition.split(':'))
    .map(([name = '', id = '', pin = '']) => ({
      name,
      id,
      pin,
    }))
    .filter(({ name = '' }) => name !== '')
  return users
}

const allUsers = getUserFromEnvironment()

async function getUsersInfo(users) {
  const infos = await promiseUtils.map(users, async user => bibtouApi.getAccountDetails(user))
  return infos
}

getUsersInfo(allUsers)
  .then(results => {
    console.log('Emprunts')
    results.forEach(result => {
      displayBookList(result.borrowedBooks)
    })
    console.log('Réservations')
    results.forEach(result => {
      if (result.reservedBooks.length) {
        displayReservedBookList(result.reservedBooks)
      }
    })
    // Placer ici les id des livres à renouveller
    const documentsToRenew = []
    const documents = _.flatMap(results, result => result.borrowedBooks).filter(doc =>
      documentsToRenew.includes(doc.id),
    )
    console.log('Renouvellement')
    return bibtouApi.renewDocuments(documents)
  })
  .then(results => {
    console.log('all done', { results })
  })
