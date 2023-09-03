<template>
  <q-page class="flex">
    <div v-if="reservedBooksCount === 0" class="center-content">
      Aucune réservation
    </div>
    <q-scroll-area style="width: calc(100vw - 55px);">
      <div class="q-pa-md">
        <q-list separator class="full-width">
          <q-item-label v-if="availableReservedBooksFiltered.length > 0" header>
            Documents disponibles
          </q-item-label>
          <reservation-item
            v-for="book in availableReservedBooksFiltered"
            :key="book.user.id + '/' + book.id"
            :book="book"
          />
          <q-item-label v-if="unavailableReservedBooksFiltered.length > 0" header>
            En attente
          </q-item-label>
          <reservation-item
            v-for="book in unavailableReservedBooksFiltered"
            :key="book.user.id + '/' + book.id"
            :book="book"
          />
        </q-list>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { mapState } from "pinia";

import { useApiStore } from "../stores/api-store";

import ReservationItem from "src/components/ReservationItem.vue";

export default {
  name: "ReservationsPage",
  components: {
    ReservationItem,
  },
  computed: {
    ...mapState(useApiStore, [
      "availableReservedBooks",
      "unavailableReservedBooks",
      "availableReservedBooksCount",
      "unavailableReservedBooksCount",
      "reservedBooksCount",
      "hasUserFilterOn",
      "filteredUsers",
    ]),
    availableReservedBooksFiltered () {
      return this.availableReservedBooks
        .filter(book => !this.hasUserFilterOn || this.filteredUsers.includes(book.user.id))
    },
    unavailableReservedBooksFiltered () {
      return this.unavailableReservedBooks
        .filter(book => !this.hasUserFilterOn || this.filteredUsers.includes(book.user.id))
    }
  },
};
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
</style>
