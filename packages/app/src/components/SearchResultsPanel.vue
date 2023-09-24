<template>
  <div ref="searchDiv">
    <q-card v-if="error">
      {{ error }}
    </q-card>
    <q-virtual-scroll
      v-else
      style="max-height: 70vh"
      :virtual-scroll-item-size="250"
      :virtual-scroll-slice-size="10"
      :items="documents"
      separator
    >
      <template v-slot="{ item, index }">
        <SearchDocumentCard
          :key="`${index}/${item.id}/${
            item._search && item._search.item ? item._search.item : '1'
          }`"
          :document="item"
          :full-mode="fullMode"
          @displayContent="setDisplayForDocumentCard"
          @toggleFavorite="toggleFavorite(item)"
        />
      </template>
    </q-virtual-scroll>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import { mapState, mapActions } from 'pinia'

import { useFavoriteStore } from '../stores/favorite-store'
import { useSearchStore } from '../stores/search-store'

import { convert } from 'src/services/document-to-card'

import SearchDocumentCardFunctional from 'src/components/SearchDocumentCardFunctional.vue'
import SearchDocumentCard from 'src/components/SearchDocumentCard.vue'

export default {
  name: 'SearchResultsPanel',
  components: {
    SearchDocumentCardFunctional,
    SearchDocumentCard
  },
  props: {
    documents: {
      type: Array,
      required: true
    },
    query: {
      type: Object,
      required: true
    },
    fullMode: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      internalDocuments: []
    }
  },
  computed: {
    ...mapState(useSearchStore, ['error']),
    ...mapState(useFavoriteStore, ['favoriteDocuments']),
    documentComponent () {
      return this.fullMode
        ? 'search-document-card-functional'
        : 'search-document-tile'
    }
  },
  watch: {
    documents: {
      immediate: true,
      handler: function () {
        const internalDocuments = Object.freeze(
          JSON.parse(JSON.stringify(this.documents))
        )
        this.internalDocuments = internalDocuments.map((doc) =>
          convert(this.favoriteDocuments, doc)
        )
      }
    }
  },
  methods: {
    ...mapActions(useFavoriteStore, ['toggleFavoriteDocument']),
    toggleFavorite (document) {
      this.toggleFavoriteDocument({ document })
    },
    setDisplayForDocumentCard (document, display) {
      this.internalDocuments = this.internalDocuments.map((doc) => {
        if (document.id === doc.id) {
          return {
            ...doc,
            display
          }
        }
        return doc
      })
    }
  }
}
</script>
