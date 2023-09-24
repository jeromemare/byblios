import { defineStore } from 'pinia'

import { mapSeries } from 'blend-promise-utils'

import compact from 'lodash/compact'
import uniq from 'lodash/uniq'
import difference from 'lodash/difference'
import mapValues from 'lodash/mapValues'
import pickBy from 'lodash/pickBy'

import isBefore from 'date-fns/isBefore'
import parseISO from 'date-fns/parseISO'
import compareAsc from 'date-fns/compareAsc'
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'

import colorsService from 'src/services/colors-service'
import {
  renewDocuments,
  getAccountDetailsForUser,
  mockGetData
} from 'src/services/book-service'

export const useApiStore = defineStore('api', {
  persist: {
    paths: [
      'borrowedBooksByUser',
      'reservedBooksByUser',
      'users',
      'filters',
      'searchOpened'
    ]
  },
  state: () => ({
    borrowedBooksByUser: {},
    reservedBooksByUser: {},
    users: {},
    colors: colorsService.getColorsName(),
    updateInProgress: false,
    filters: [],
    searchOpened: false
  }),
  getters: {
    activeSearch () {
      return this.searchOpened
    },
    // @TODO Supprimer les livres non renouvelable
    documentsToRenewByUser () {
      return pickBy(this.borrowedWarningBooksByUser, (books, user) =>
        this.usersWithoutLateDocuments.includes(user)
      )
    },
    // Liste des documents devant être renouvellés
    // Tous les documentsà rendre dans moins de deux jours, d'utilisateur non bloqués
    // @TODO Supprimer les utilisateurs ayant leur abonnement périmé
    documentsToRenew () {
      return Object.values(this.documentsToRenewByUser).flat()
    },
    documentsToRenewCount () {
      return this.documentsToRenew.length
    },
    hasDocumentsToRenew () {
      return this.documentsToRenew && this.documentsToRenew.length > 0
    },
    isUpdateInProgress () {
      return this.updateInProgress
    },
    areUsersMockeable () {
      return !!process.env.USERS
    },
    availableColors (state) {
      const usedColors = uniq(compact(this.userList.map((user) => user.color)))
      return difference(state.colors, usedColors)
    },
    nextAvailableColor () {
      return (
        (this.availableColors.length > 0 && this.availableColors[0]) || 'red'
      )
    },
    colorsByUser (state) {
      return mapValues(state.users, (user) => user.color || 'red')
    },
    borrowedBooks (state) {
      return Object.values(state.borrowedBooksByUser).flat()
    },
    filteredBorrowedBooks () {
      return this.borrowedBooks.filter(
        ({ user }) =>
          !this.hasUserFilterOn || this.filteredUsers.includes(user.id)
      )
    },
    reservedBooks (state) {
      return Object.values(state.reservedBooksByUser).flat()
    },
    borrowedBooksCount () {
      return this.borrowedBooks && this.borrowedBooks.length
    },
    borrowedBooksCountByUser (state) {
      return mapValues(state.borrowedBooksByUser, (books) => books.length)
    },
    borrowedWarningBooksByUser (state) {
      // Retourne les livres à rendre dans moins de deux jours par utilisateur
      return mapValues(state.borrowedBooksByUser, (books) => {
        return books.filter(
          ({ rendre }) =>
            differenceInCalendarDays(parseISO(rendre), new Date()) <= 2
        )
      })
    },
    borrowedWarningBooksCountByUser () {
      // Retourne le nombre de livres à rendre dans moins de deux jours par utilisateur
      return mapValues(
        this.borrowedWarningBooksByUser,
        (books) => books.length
      )
    },
    borrowedWarningBooksCount () {
      // Retourne le nombre de livres à rendre dans moins de deux jours
      return Object.values(this.borrowedWarningBooksCountByUser).reduce(
        (acc, value) => acc + value,
        0
      )
    },
    haveBorrowWarningBooks () {
      return this.borrowedWarningBooksCount > 0
    },
    lateBooksByUser (state) {
      return mapValues(state.borrowedBooksByUser, (books) =>
        books.filter(({ rendre }) => isBefore(parseISO(rendre), new Date()))
      )
    },
    lateBooksCountByUser () {
      return mapValues(this.lateBooksByUser, (books) => books.length)
    },
    // Liste des users ayant des documents en retard
    usersWithoutLateDocuments () {
      return Object.keys(
        pickBy(this.lateBooksCountByUser, (count) => count === 0)
      )
    },
    lateBooksCount () {
      return Object.values(
        mapValues(this.lateBooksByUser, (books) => books.length)
      ).reduce((acc, value) => acc + value, 0)
    },
    haveLateDocuments () {
      return Object.values(this.lateBooksCountByUser).some(
        (lateBooksCount) => lateBooksCount > 0
      )
    },
    reservedBooksCount () {
      return this.reservedBooks && this.reservedBooks.length
    },
    userList (state) {
      return Object.values(state.users)
    },
    availableReservedBooks () {
      return this.reservedBooks
        .filter((book) => book.since)
        .sort(({ since: since1 }, { since: since2 }) => {
          return compareAsc(parseISO(since1), parseISO(since2))
        })
    },
    unavailableReservedBooks () {
      return this.reservedBooks.filter((book) => !book.since)
    },
    availableReservedBooksCount () {
      return this.availableReservedBooks.length
    },
    unavailableReservedBooksCount () {
      return this.unavailableReservedBooks.length
    },
    availableReservedBooksWarning () {
      return this.availableReservedBooks.some(({ since }) => {
        const daysToReservationExpiration = differenceInCalendarDays(
          new Date(),
          parseISO(since)
        )
        // La réservation expirera dans 2 jours
        return daysToReservationExpiration >= 8
      })
    },
    hasFilter (state) {
      return state.filters.length > 0
    },
    filteredUsers (state) {
      return state.filters
        .filter((filter) => filter.name === 'user')
        .map((filter) => filter.value)
    },
    hasUserFilterOn () {
      return this.filteredUsers && this.filteredUsers.length > 0
    }
  },
  actions: {
    async openSearch () {
      this.searchOpened = true
    },
    async closeSearch () {
      this.searchOpened = false
    },
    launchUpdate () {
      this.updateInProgress = true
    },
    stopUpdate () {
      this.updateInProgress = false
    },
    updateBorrowedBooksForUser ({ user, books }) {
      const userId = user.id
      this.borrowedBooksByUser = {
        ...this.borrowedBooksByUser,
        [userId]: JSON.parse(JSON.stringify(books))
      }
    },
    updateReservedBooksForUser ({ user, books }) {
      const userId = user.id
      this.reservedBooksByUser = {
        ...this.reservedBooksByUser,
        [userId]: JSON.parse(JSON.stringify(books))
      }
    },
    async renewDocumentsToRenew () {
      this.launchUpdate()
      try {
        const results = await renewDocuments(this.documentsToRenew)
        if (results && results.length > 0) {
          await mapSeries(results, async (accountDetail) => {
            if (accountDetail && accountDetail.detail) {
              // La requête s'est bien passé
              this.updateAccount({ accountDetail, user: accountDetail.user })
            }
            return null
          })
        }
      } finally {
        this.stopUpdate()
      }
    },
    async renewDocument (doc) {
      const { user } = doc
      this.launchUpdate()
      try {
        const results = await renewDocuments([doc])
        if (results && results.length === 1) {
          const accountDetail = results.pop()
          if (accountDetail && accountDetail.detail) {
            // La requête s'est bien passé
            this.updateAccount({ accountDetail, user })
          }
        }
      } finally {
        this.stopUpdate()
      }
    },
    async updateAccount ({ accountDetail, user }) {
      const {
        info,
        detail,
        borrowedBooks = [],
        reservedBooks = []
      } = accountDetail
      // TODO Notification dans Quasar
      //   const borrowedMessage = `<br>${borrowedBooks.length} emprunt${borrowedBooks.length > 1 ? 's' : ''}`
      //   const reservedMessage = `<br>${reservedBooks.length} réservation${reservedBooks.length > 1 ? 's' : ''}`
      //   Notify.create({
      //     multiLine: true,
      //     message: `Mise à jour pour ${user.name}` + borrowedMessage + reservedMessage,
      //     html: true,
      //   })

      this.updateUser({
        ...user,
        info,
        detail
      })
      this.updateBorrowedBooksForUser({ user, books: borrowedBooks })
      this.updateReservedBooksForUser({ user, books: reservedBooks })
    },
    async fetchUser ({ user }) {
      const accountDetail = await getAccountDetailsForUser(user)
      const { error, message } = accountDetail

      if (error) {
        console.log(`Erreur d'update pour ${user.name} : ${message}`)
      } else {
        await this.updateAccount({ accountDetail, user })
      }
    },
    async fetchUsers () {
      console.log('fetch')
      this.launchUpdate()
      try {
        await mapSeries(this.userList, async (user) => {
          console.log('Fetch user', { user })
          return this.fetchUser({ user })
        })
      } finally {
        this.stopUpdate()
      }
    },
    async mockData () {
      const { users = [], documents = [] } = await mockGetData()
      // Creation d'utilisateur à partir du fichier json
      await mapSeries(users, async (user) => this.addUser(user))
      // Creation des documents à partir du fichier json
      users.forEach((user) => {
        const documentsForUser = documents.filter(
          (document) => document.user.id === user.id
        )
        this.updateBorrowedBooksForUser({ user, books: documentsForUser })
      })
    },
    async mockUsers () {
      const users = JSON.parse(process.env.USERS)
      await mapSeries(users, async (user) => this.addUser(user))
    },

    cleanBooksWithoutUsers () {
      Object.keys(this.borrowedBooksByUser)
        .filter((userId) => !this.users[userId])
        .forEach((userId) => delete this.borrowedBooksByUser[userId])

      this.borrowedBooksByUser = {
        ...this.borrowedBooksByUser
      }

      Object.keys(this.reservedBooksByUser)
        .filter((userId) => !this.users[userId])
        .forEach((userId) => delete this.reservedBooksByUser[userId])

      this.reservedBooksByUser = {
        ...this.reservedBooksByUser
      }
    },
    async addUser (user) {
      // Gestion de la couleur
      if (!user.color) {
        user.color = this.nextAvailableColor
      }

      this.users[user.id] = JSON.parse(JSON.stringify(user))
      this.users = JSON.parse(JSON.stringify(this.users))
      this.cleanBooksWithoutUsers()
    },
    async removeUser (user) {
      if (this.users[user.id]) {
        delete this.users[user.id]
        this.users = JSON.parse(JSON.stringify(this.users))
      }
      this.cleanBooksWithoutUsers()
    },
    async updateUser (user) {
      if (this.users[user.id]) {
        this.users = {
          ...this.users,
          [user.id]: JSON.parse(JSON.stringify(user))
        }
      }
      this.cleanBooksWithoutUsers()
    },
    async filterUser (userId) {
      this.filters = this.filters.filter(({ name }) => name !== 'user')
      this.filters.push({ name: 'user', value: userId })
    },
    async cleanFilter () {
      this.filters = []
    },
    reset () {
      this.borrowedBooksByUser = {}
      this.reservedBooksByUser = {}
      this.users = {}
      this.colors = colorsService.getColorsName()
      this.updateInProgress = false
      this.filters = []
      this.searchOpened = false
    }
  }
})
