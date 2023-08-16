import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layout", {
  state: () => ({
    isSidebarVisible: true,
  }),
  getters: {
    pageWidth: (state) =>
      state.isSidebarVisible
        ? "width: calc(100vw - 55px);"
        : "width: calc(100vw);",
  },
  actions: {
    async toggleSidebar() {
      if (this.isSidebarVisible) {
        this.isSidebarVisible = false;
      } else {
        this.isSidebarVisible = true;
      }
    },
  },
});
