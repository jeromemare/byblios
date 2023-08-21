import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("favorite", {
  persist: true,
  state: () => ({
    documents: [],
    searchs: [],
  }),
  getters: {
    favoriteDocuments: (state) => state.documents,
    favoriteCount: (state) => state.documents.length,
  },
  actions: {
    async toggleFavoriteDocument({ document }) {
      const documentId = document.id;
      const isDocumentFavorite = this.favoriteDocuments.find(
        (document) => document.id === documentId
      );
      if (isDocumentFavorite) {
        const documentId = document.id;
        this.documents = this.documents.filter(
          (document) => document.id !== documentId
        );
      } else {
        this.documents.push(document);
      }
    },
  },
});
