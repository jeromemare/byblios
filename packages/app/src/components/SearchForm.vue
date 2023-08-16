<template>
  <q-layout view="lHh Lpr fFf" container class="bg-white">
    <q-header>
      <q-toolbar class="text-white no-border">
        <q-tabs v-model="tab" shrink>
          <q-tab :alert="searchInProgress" name="search" icon="search" />
          <q-tab name="favorites" icon="favorite">
            <q-badge
              v-if="favoriteCount > 0"
              color="white"
              text-color="primary"
              floating
            >
              {{ favoriteCount }}
            </q-badge>
          </q-tab>
        </q-tabs>
      </q-toolbar>
      <q-linear-progress
        v-if="tab === 'search' && searchInProgress"
        :value="searchProgress"
        color="accent"
        track-color="grey-4"
        size="30px"
      >
        <div class="absolute-full flex flex-center">
          <q-badge
            v-if="foundDocumentsCount > 0"
            color="white"
            text-color="accent"
            :label="searchInProgressLabel"
          />
          <q-spinner-dots v-else color="accent" size="1em" />
        </div>
      </q-linear-progress>
    </q-header>

    <q-footer v-if="displayResults">
      <q-toolbar
        v-if="isTextFilterActivated"
        bordered
        class="bg-white text-primary"
      >
        <q-input
          v-model="textFilter"
          class="full-width"
          outlined
          clearable
          placeholder="Rechercher dans la liste"
          hint="Auteur, titre ou résumé"
          dense
          @clear="toggleTextFilterMode"
        />
      </q-toolbar>
      <q-toolbar bordered class="bg-white text-primary">
        <q-btn :icon="viewerModeIcon" flat @click="toggleVueMode" />
        <q-btn :icon="textFilterModeIcon" flat @click="toggleTextFilterMode" />
        <q-toggle v-model="authorFilter" icon="fas fa-user-tag" color="green" />
        <q-toggle
          v-model="availableFilter"
          checked-icon="check"
          color="green"
          unchecked-icon="clear"
        />
        <q-select
          v-model="libraryFilter"
          :options="libraryOptions"
          label="Bibliothèque"
          clearable
        />
      </q-toolbar>
      <search-summary-toolbar
        v-if="displayResults"
        :query="query"
        @new-search="back"
      />
    </q-footer>

    <q-page-container>
      <q-page>
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="search">
            <keep-alive>
              <search-results-panel
                v-if="displayResults"
                :documents="filteredDocuments"
                :query="query"
                :full-mode="fullMode"
                @new-search="displayResults = false"
              />
              <search-panel v-else @search="launchSearch" />
            </keep-alive>
          </q-tab-panel>

          <q-tab-panel name="favorites">
            <component
              :is="favoriteDocumentComponent"
              v-for="document in favoriteDocuments"
              :key="`${document.id}/${
                document._search && document._search.item
                  ? document._search.item
                  : '1'
              }`"
              :document="document"
            />
            <q-page-sticky position="bottom-right" :offset="[18, 18]">
              <q-btn
                v-if="isShareAvailable"
                fab
                icon="share"
                color="primary"
                @click="share"
              />
              <q-btn fab icon="send" color="primary" @click="toClipboard" />
            </q-page-sticky>
          </q-tab-panel>
        </q-tab-panels>

        <q-page-sticky position="bottom-right" :offset="[18, 88]">
          <q-btn v-if="searchInProgress" fab icon="clear" color="warning" />
        </q-page-sticky>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from "pinia";

import { useFavoriteStore } from "../stores/favorite-store";
import { useApiStore } from "../stores/api-store";
import { useSearchStore } from "../stores/search-store";

import copy from "copy-to-clipboard";

import compact from "lodash/compact";

import SearchPanel from "src/components/SearchPanel.vue";
import SearchResultsPanel from "src/components/SearchResultsPanel.vue";
import SearchSummaryToolbar from "src/components/SearchSummaryToolbar.vue";
import SearchDocumentTile from "src/components/SearchDocumentTile.vue";
import SearchDocumentCard from "src/components/SearchDocumentCard.vue";

const isCopyAvailable = (copy) => {
  if (!copy) {
    return false;
  }

  const unavailableLocalisation = [
    "Réservé",
    "Prêté",
    "Document indisponible, acheminement en cours",
  ];
  return (
    copy.availableOn === "" &&
    !unavailableLocalisation.includes(copy.localisation)
  );
};

const hasCopyInLibrary = (library, copy, withAvailability) => {
  if (withAvailability && !isCopyAvailable(copy)) {
    return false;
  }

  return copy.library.toLowerCase().includes(library.toLowerCase());
};

const hasAuthor = (text, document) => {
  const words = text.split(" ").map((word) => word.toLowerCase());
  const author = document.author.toLowerCase();
  return words.some((word) => author.includes(word));
};

export default {
  name: "SearchForm",
  components: {
    SearchPanel,
    SearchResultsPanel,
    SearchSummaryToolbar,
    SearchDocumentTile,
    SearchDocumentCard,
  },
  data() {
    return {
      fullMode: false,
      textFilterMode: false,
      textFilter: "",
      tab: "search",
      drawer: false,
      isOpen: false,
      query: {},
      displayResults: false,
      libraryFilter: "",
      libraryOptions: [
        "Cyprien",
        "Cabanis",
        "Grand M",
        "Pradette",
        "Ancely",
        "Exupery",
      ],
      availableFilter: false,
      authorFilter: false,
    };
  },
  computed: {
    ...mapState(useApiStore, ["activeSearch"]),
    ...mapState(useSearchStore, [
      "searchInProgress",
      "foundDocuments",
      "foundDocumentsCount",
      "error",
    ]),
    ...mapState(useFavoriteStore, ["favoriteDocuments", "favoriteCount"]),
    favoriteDocumentComponent() {
      return this.fullMode ? "search-document-card" : "search-document-tile";
    },
    viewerModeIcon() {
      return this.fullMode ? "fullscreen_exit" : "fullscreen";
    },
    textFilterModeIcon() {
      return this.textFilterMode ? "cancel_presentation" : "find_in_page";
    },
    isShareAvailable() {
      return navigator.share;
    },
    searchProgress() {
      if (this.foundDocumentsCount === -1) {
        return 0;
      }

      return this.foundDocuments.length / this.foundDocumentsCount;
    },
    searchInProgressLabel() {
      return this.foundDocumentsCount >= 0
        ? `${this.foundDocuments.length} / ${this.foundDocumentsCount} documents`
        : "Recherche en cours";
    },
    filteredDocuments() {
      const filteredDocuments = this.foundDocuments
        .filter((document) => {
          const documentCopiesCount = document?.copies?.length ?? 0;
          const availableDocument =
            !this.availableFilter || documentCopiesCount > 0;
          const authorFilter =
            !this.authorFilter || hasAuthor(this.query.text, document);
          const copiesFilter = (compact(document?.copies) ?? []).some(
            (copy) => {
              const copyAvailableFilter =
                !this.availableFilter || isCopyAvailable(copy);
              const libraryFilter =
                !this.libraryFilter ||
                hasCopyInLibrary(
                  this.libraryFilter,
                  copy,
                  this.availableFilter
                );
              return copyAvailableFilter && libraryFilter;
            }
          );
          return (
            availableDocument &&
            (document?.copies?.length === 0 || copiesFilter) &&
            authorFilter
          );
        })
        .filter((document) => {
          if (!this.isTextFilterActivated) {
            return true;
          }
          const searchText = this.textFilter.toLowerCase();
          const searchComponents = [
            document?.author ?? "",
            document?.title ?? "",
            document?.summary ?? "",
          ];
          return searchComponents
            .map((component) => component.toLowerCase())
            .some((component) => component.includes(searchText));
        });
      return Object.freeze(filteredDocuments);
    },
    isTextFilterActivated() {
      return this.textFilterMode;
    },
  },
  watch: {
    activeSearch: {
      immediate: true,
      handler: function () {
        this.isOpen = this.activeSearch;
      },
    },
  },
  methods: {
    ...mapActions(useApiStore, ["closeSearch"]),
    ...mapActions(useSearchStore, ["search", "clearSearch"]),
    toggleTextFilterMode() {
      this.textFilterMode = !this.textFilterMode;
    },
    toggleVueMode() {
      this.fullMode = !this.fullMode;
    },
    async share() {
      const text = this.favoriteDocuments
        .map(
          (document) => `
          ${document.title} - ${document.author}
          ${document.id ?? ""} - ISBN: ${document.isbn ?? ""}`
        )
        .join("\n");

      if (navigator.share) {
        try {
          await navigator.share({
            title: "Documents favoris",
            text,
          });
          console.log("Partage avec succès");
        } catch (error) {
          console.error("Erreur de partage", error);
        }
      }
    },
    async toClipboard() {
      const text = this.favoriteDocuments
        .map(
          (document) => `
          ${document.title} - ${document.author}
          ${document.id ?? ""} - ISBN: ${document.isbn ?? ""}`
        )
        .join("\n");
      copy(text, {
        debug: true,
        message: "Press #{key} to copy",
      });
    },
    async launchSearch(query) {
      this.displayResults = true;
      this.query = query;
      await this.search({ query });
    },
    back() {
      this.displayResults = false;
      this.clearSearch();
    },
  },
};
</script>
