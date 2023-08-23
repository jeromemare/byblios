import cloneDeep from "lodash/cloneDeep";

import { defineStore } from "pinia";

import {
  prepareAdvanced,
  prepare,
  getResults,
} from "src/services/book-service";

export const useSearchStore = defineStore("search", {
  persist: false,
  state: () => ({
    filters: {
      available: {
        active: false,
        value: false,
      },
      libraries: {
        active: false,
        value: [],
      },
    },
    searchResultsAvailable: false,
    searchInProgress: false,
    // Limite en nombre de documents de la recherche
    limit: 999,
    // Session de recherche
    session: {},
    // Documents trouvés pendant la session de recherche
    foundDocuments: [],
    // Nombre de documents trouvés dans la recherhe courante
    foundDocumentsCount: -1,
    // Requête de la recherche
    query: {},
    // Erreur de recherche
    error: "",
  }),
  getters: {},
  actions: {
    cleanSearch() {
      this.foundDocuments = [];
      this.foundDocumentsCount = -1;
      this.searchInProgress = true;
      this.searchResultsAvailable = true;
      this.error = "";
    },
    async search({ query }) {
      if (!query) {
        return;
      }

      this.query = cloneDeep(query);

      try {
        this.cleanSearch();
        let searchSession;
        if (query.location) {
          query.sortByFilter = "-PBYR";
          searchSession = await prepareAdvanced(query);
        } else {
          searchSession = await prepare(query.text);
        }
        this.foundDocumentsCount = searchSession.count;
        await getResults(searchSession, {
          addDocument: (document) => {
            this.foundDocuments.push(document);
          },
        });
      } catch (error) {
        this.error = error.message;
        console.error(
          `Erreur pendant la recherche ${query.text} - ${error.message}`
        );
      } finally {
        this.searchInProgress = false;
      }
    },
    async clearSearch() {
      this.foundDocuments = [];
      this.foundDocumentsCount = -1;
      this.searchInProgress = false;
      this.error = "";
      this.searchResultsAvailable = false;
    },
  },
});
