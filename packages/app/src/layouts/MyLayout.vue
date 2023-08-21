<template>
  <q-layout view="hHr Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round dense icon="menu" />
        <q-toolbar-title>
          <span class="app-title">{{ appTitle }}</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div class="wrapper">
        <div class="sidebar">
          <sidebar-panel class="sidebar-wrapper" />
        </div>
        <div class="content">
          <router-view />
        </div>
      </div>
    </q-page-container>
    <q-footer elevated>
      <q-tabs v-model="tab">
        <q-route-tab
          icon="far fa-address-book"
          name="emprunts"
          label="Emprunts"
          to="/"
        >
          <q-badge v-if="hasBorrowStatus" :color="borrowStatusColor" floating>
            {{ borrowStatusLabel }}
          </q-badge>
        </q-route-tab>
        <q-route-tab
          icon="far fa-bookmark"
          name="reservations"
          label="Réservation"
          to="reservations"
        >
          <q-badge
            v-if="availableReservedBooksCount > 0"
            :color="reservationStatusColor"
            floating
          >
            {{ availableReservedBooksCount }}
          </q-badge>
        </q-route-tab>
        <q-route-tab
          icon="far fa-address-card"
          name="abonnements"
          label="Cartes"
          to="cards"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from "pinia";

import { useApiStore } from "../stores/api-store";

import SidebarPanel from "src/components/SidebarPanel.vue";

export default {
  name: "MyLayout",
  components: {
    SidebarPanel,
  },
  data() {
    return {
      tab: "",
    };
  },
  computed: {
    ...mapState(useApiStore, [
      "borrowedBooksCount",
      "borrowedWarningBooksCount",
      "lateBooksCount",
      "availableReservedBooksCount",
      "availableReservedBooksWarning",
      "haveBorrowWarningBooks",
      "haveLateDocuments",
    ]),
    appTitle() {
      return "b\u03B3blio\u03C2";
    },
    reservationStatusColor() {
      return this.availableReservedBooksWarning ? "warning" : "positive";
    },
    borrowStatusColor() {
      return this.haveLateDocuments ? "negative" : "warning";
    },
    borrowStatusLabel() {
      return this.haveLateDocuments
        ? this.lateBooksCount
        : this.borrowedWarningBooksCount;
    },
    hasBorrowStatus() {
      return this.haveLateDocuments || this.haveBorrowWarningBooks;
    },
  },
};
</script>

<style lang="sass" scoped>
.app-title
  font-family: Comfortaa

.sidebar
  flex: 0 0 55px
  background-color: whitesmoke

.sidebar-wrapper
  position: fixed
  top: 50px
  left: 0

.content
  flex: 1 1

.wrapper
  display: flex
</style>
