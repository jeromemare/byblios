<template>
  <q-layout view="hHr Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="drawer=!drawer" />
        <q-toolbar-title>
          <span class="app-title">{{ appTitle }}</span>
        </q-toolbar-title>
        <q-btn flat round dense icon="mdi-playlist-star" @click="openLists" />
        <q-btn flat round dense icon="search" @click="openSearch" />
      </q-toolbar>
    </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="300"
        :breakpoint="400"
        overlay
      >
        <q-scroll-area style="height: calc(100% - 80px); margin-top: 80px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item-label header>Abonnements</q-item-label>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="add" />
              </q-item-section>

              <q-item-section>
                Ajouter
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="mdi-eye" />
              </q-item-section>

              <q-item-section>
                Visualiser
              </q-item-section>
            </q-item>

            <q-separator />
            <q-item-label header>Documents</q-item-label>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="search" />
              </q-item-section>

              <q-item-section>
                Rechercher
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="book" />
              </q-item-section>

              <q-item-section>
                Emprunter
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="book" />
              </q-item-section>

              <q-item-section>
                Renouveller
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="lock" />
              </q-item-section>

              <q-item-section>
                Réserver
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <!-- <q-img class="absolute-top" src="/img/fond-byblios-5.jpg" style="height: 80px"> -->
        <div class="absolute-top pt15 q-mb-sm" style="height: 80px">
          <div class="row bg-transparent">
            <q-avatar rounded size="40px" style="padding-top: 25px; padding-left: 15px;">
              <img src="/img/byblios-avatar.png">
            </q-avatar>
            <div class="column text-white" style="padding-top: 25px; padding-left: 15px; margin-left: 15px;">
              <div class="text-weight-bold app-title">{{ appTitle }}</div>
              <div>Bibliothèque de Toulouse</div>
            </div>
          </div>
          <q-btn icon="info" rounded flat color="white" class="fixed-top-right" />
        </div>
        <!-- </q-img> -->
      </q-drawer>

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
    <q-dialog v-model="isSearchOpened">
      <search-form @close="isSearchOpened = false" />
    </q-dialog>
    <q-dialog v-model="isListOpened">
      <list-form @close="isListOpened = false" />
    </q-dialog>
  </q-layout>
</template>

<script>
import { mapState } from "pinia";

import { useApiStore } from "../stores/api-store";

import SidebarPanel from "src/components/SidebarPanel.vue";
import SearchForm from "src/components/SearchForm.vue";
import ListForm from "src/components/ListForm.vue";

export default {
  name: "MyLayout",
  components: {
    SidebarPanel,
    SearchForm,
    ListForm,
  },
  data() {
    return {
      tab: "",
      isSearchOpened: false,
      isListOpened: false,
      drawer: false,
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
  methods: {
    openSearch() {
      this.isSearchOpened = true;
    },
    openLists() {
      this.isListOpened = true;
    },
  }
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


.pt15
    background-color: #5e806b
    background-size: 13px 13px, 29px 29px, 37px 37px, 53px 53px
    background-image: -webkit-linear-gradient(0, rgba(255, 255, 255, .07) 50%, transparent 50%), -webkit-linear-gradient(0, rgba(255, 255, 255, .13) 50%, transparent 50%), -webkit-linear-gradient(0, transparent 50%, rgba(255, 255, 255, .17) 50%), -webkit-linear-gradient(0, transparent 50%, rgba(255, 255, 255, .19) 50%)
    background-image: -moz-linear-gradient(0, rgba(255, 255, 255, .07) 50%, transparent 50%), -moz-linear-gradient(0, rgba(255, 255, 255, .13) 50%, transparent 50%), -moz-linear-gradient(0, transparent 50%, rgba(255, 255, 255, .17) 50%), -moz-linear-gradient(0, transparent 50%, rgba(255, 255, 255, .19) 50%)
    background-image: -ms-linear-gradient(0, rgba(255, 255, 255, .07) 50%, transparent 50%), -ms-linear-gradient(0, rgba(255, 255, 255, .13) 50%, transparent 50%), -ms-linear-gradient(0, transparent 50%, rgba(255, 255, 255, .17) 50%), -ms-linear-gradient(0, transparent 50%, rgba(255, 255, 255, .19) 50%)
    background-image: -o-linear-gradient(0, rgba(255, 255, 255, .07) 50%, transparent 50%), -o-linear-gradient(0, rgba(255, 255, 255, .13) 50%, transparent 50%), -o-linear-gradient(0, transparent 50%, rgba(255, 255, 255, .17) 50%), -o-linear-gradient(0, transparent 50%, rgba(255, 255, 255, .19) 50%)
    background-image: linear-gradient(0, rgba(255, 255, 255, .07) 50%, transparent 50%), linear-gradient(0, rgba(255, 255, 255, .13) 50%, transparent 50%), linear-gradient(0, transparent 50%, rgba(255, 255, 255, .17) 50%), linear-gradient(0, transparent 50%, rgba(255, 255, 255, .19) 50%)
</style>
