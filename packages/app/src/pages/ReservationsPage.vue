<template>
  <q-page class="flex">
    <div v-if="reservedBooksCount === 0" class="center-content">
      Aucune réservation
    </div>
    <q-scroll-area :style="pageWidth">
      <div class="q-pa-md">
        <q-list separator class="full-width">
          <q-item-label v-if="availableReservedBooksCount > 0" header>
            Documents disponibles
          </q-item-label>
          <reservation-item
            v-for="book in availableReservedBooks"
            :key="book.user.id + '/' + book.id"
            :book="book"
          />
          <q-item-label v-if="unavailableReservedBooksCount > 0" header>
            En attente
          </q-item-label>
          <reservation-item
            v-for="book in unavailableReservedBooks"
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
import { useLayoutStore } from "../stores/layout-store";

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
    ]),
    ...mapState(useLayoutStore, ["pageWidth"]),
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
