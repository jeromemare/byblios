<template>
  <q-item v-ripple clickable>
    <q-item-section side top>
      <q-avatar :color="avatarColor" text-color="white">
        {{ avatarText }}
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label v-if="isAvailable" caption>
        {{ availableSince }}
      </q-item-label>
      <q-item-label lines="3">
        {{ book.titre }}
      </q-item-label>
      <q-item-label caption>
        {{ book.auteur }}
      </q-item-label>
      <q-item-label caption>
        <q-chip
          outline
          square
          color="primary"
          text-color="white"
          icon="directions"
        >
        <div class="ellipsis">
          {{ book.where  }}
          <q-tooltip>{{ cookiesLabel }}</q-tooltip>
        </div>
        </q-chip>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { mapState } from "pinia";

import { useApiStore } from "../stores/api-store";

import addDays from "date-fns/addDays";
import differenceInCalendarDays from "date-fns/differenceInCalendarDays";
import parseISO from "date-fns/parseISO";

export default {
  name: "ReservationItem",
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(useApiStore, ["colorsByUser"]),
    avatarText() {
      if (!this.book.user || !this.book.user.name) {
        return "?";
      }

      return this.book.user.name.slice(0, 1);
    },
    avatarColor() {
      return this.colorsByUser[this.book.user.id] || "red";
    },
    isAvailable() {
      return !!this.book.since;
    },
    nbDaysLeft() {
      if (!this.book.since) {
        return undefined;
      }

      return differenceInCalendarDays(
        addDays(parseISO(this.book.since), 10),
        new Date()
      );
    },
    availableSince() {
      if (!this.book.since) {
        return undefined;
      }
      const plural = `${this.nbDaysLeft > 1 ? "s" : ""}`;
      return `${this.nbDaysLeft} jour${plural} restant${plural}`;
    },
  },
  methods: {
    onRight() {
      console.log("right");
    },
    onLeft() {
      console.log("left");
    },
  },
};
</script>
