<template>
  <q-expansion-item>
    <template v-slot:header>
      <q-item-section side top>
        <q-avatar
          :icon="typeIcon"
          :color="availabilityColor"
          text-color="white"
        />
      </q-item-section>
      <q-item-section>
        <q-item-label lines="3">
          {{ document.title }}
        </q-item-label>
        <q-item-label caption>
          {{ document.author }}
        </q-item-label>
        <q-item-label lines="3" class="copy-list">
          {{ availablesInLibraries }}
        </q-item-label>
      </q-item-section>
    </template>
    <q-card>
      <q-card-section>
        {{ document.summary }}
      </q-card-section>
      <q-card-section>
        {{ document.materialDescription }}
      </q-card-section>
      <q-list dense>
        <q-item
          v-for="copy in availablesCopies"
          :key="`${copy.library}/${copy.index}`"
        >
          <span class="text-sucess">{{ copy.library }} </span>
          <span> {{ copy.localisation }} / {{ copy.index }} </span>
        </q-item>
        <q-item
          v-for="copy in unavailablesCopies"
          :key="`${copy.library}/${copy.index}`"
        >
          <span class="text-grey-6">{{ copy.library }} </span>
          <span> {{ copy.localisation }} / {{ copy.index }} </span>
        </q-item>
        <q-card-actions>
          <q-btn flat icon="favorite" @click="toggleFavorite" />
        </q-card-actions>
      </q-list>
    </q-card>
  </q-expansion-item>
</template>

<script>
import { mapActions } from "pinia";

import { useFavoriteStore } from "../stores/favorite-store";

import compact from "lodash/compact";

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
const isCopyUnavailable = (copy) => !isCopyAvailable(copy);

const typeToIcon = {
  livre: "fas fa-book",
  dvd: "fas fa-film",
  "audio-livre": "far fa-file-audio",
};

export default {
  name: "SearchDocumentTile",
  props: {
    document: {
      type: Object,
      required: true,
    },
  },
  computed: {
    typeIcon() {
      return typeToIcon?.[this.document.type] ?? "mdi-help-rhombus-outline";
    },
    available() {
      return (this.document?.copies ?? []).some(isCopyAvailable);
    },
    availablesInLibraries() {
      return this.availablesCopies.map((copy) => copy.library).join(", ");
    },
    availabilityColor() {
      return this.available ? "green" : "red";
    },
    availablesCopies() {
      return (compact(this.document?.copies) ?? []).filter(isCopyAvailable);
    },
    unavailablesCopies() {
      return (compact(this.document?.copies) ?? []).filter(isCopyUnavailable);
    },
  },
  methods: {
    ...mapActions(useFavoriteStore, ["toggleFavoriteDocument"]),
    toggleFavorite() {
      this.toggleFavoriteDocument({ document: this.document });
    },
  },
};
</script>

<style lang="scss" scoped>
.copy-list {
  font-size: 0.6em;
}
</style>
