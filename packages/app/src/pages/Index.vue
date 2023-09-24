<template>
  <q-page class="flex">
    <div v-if="borrowedBooksCount === 0" class="center-content">
      Aucun emprunt
    </div>
    <q-scroll-area style="width: calc(100vw - 55px);">
      <div class="q-pa-md">
        <q-list separator>
          <article-item
            v-for="book in borrowedBooksSorted"
            :key="book.user.id + '/' + book.id"
            :book="book"
            @filter="filterLibrary"
          />
        </q-list>
      </div>
    </q-scroll-area>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        v-if="hasDocumentsToRenew"
        :disable="isUpdateInProgress"
        fab
        dense
        icon="refresh"
        color="warning"
        @click="renewAllNeeded"
      />
    </q-page-sticky>
    <q-dialog v-model="confirmRenew" persistent>
      <q-card>
        <q-bar class="bg-primary text-white">
          <q-icon name="error_outline" />
          <div>Renouveler les documents</div>
        </q-bar>
        <q-card-section>
          <div class="text-h6">
            {{ nbDocumentsToRenewLabel }}
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn v-close-popup flat label="Annuler" />
          <q-btn
            v-close-popup
            flat
            label="Renouveler"
            color="primary"
            @click="renewDocumentsToRenew"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'pinia'

import { useApiStore } from '../stores/api-store'

import { parseISO, compareAsc } from 'date-fns'

import simplur from 'simplur'

import ArticleItem from 'src/components/ArticleItem.vue'

export default {
  name: 'PageIndex',
  components: {
    ArticleItem
  },
  data () {
    return {
      confirmRenew: false,
      filteredLibrary: null
    }
  },
  computed: {
    ...mapState(useApiStore, [
      'borrowedBooksCount',
      'filteredBorrowedBooks',
      'hasDocumentsToRenew',
      'isUpdateInProgress',
      'documentsToRenewCount'
    ]),
    nbDocumentsToRenewLabel () {
      return simplur`${this.documentsToRenewCount} document[|s]`
    },
    borrowedBooksWithLibraryFilter () {
      return this.filteredBorrowedBooks.filter(
        (book) =>
          !this.filteredLibrary || book.emprunte === this.filteredLibrary
      )
    },
    borrowedBooksSorted () {
      return this.borrowedBooksWithLibraryFilter
        .map((book) => book)
        .sort(({ rendre: rendre1 }, { rendre: rendre2 }) =>
          compareAsc(parseISO(rendre1), parseISO(rendre2))
        )
    },
    borrowedBooksCountLabel () {
      if (this.borrowedBooksCount === 1) {
        return 'un document emprunté'
      }
      return `${this.borrowedBooksCount} documents empruntés`
    }
  },
  methods: {
    ...mapActions(useApiStore, ['renewDocumentsToRenew']),
    // Renew all documents that needs and can be renewed
    renewAllNeeded () {
      this.confirmRenew = true
    },
    filterLibrary (library) {
      if (this.filteredLibrary) {
        this.filteredLibrary = null
      } else {
        this.filteredLibrary = library
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.center-content
  width: 100%
  height: 100%
  text-align: center
  padding-top: 50%
  font-variant: small-caps
  font-size: 1.2em
  color: #B0B0B0

.filter-toolbar
  height: 50px
</style>
