<template>
  <q-card class="my-card">
    <q-card-section horizontal>
      <q-card-section class="full-width" vertical>
        <q-item>
          <q-item-section avatar>
            <q-avatar :icon="typeIcon" :color="availabilityColor" />
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
        </q-item>
        <q-card-section
          v-if="displayContent === 'cover' || fullMode"
          key="cover"
        >
          <cached-image
            :id="document.isbn"
            class="col"
            :url="document.image"
            type="jpg"
          />
        </q-card-section>
        <q-card-section
          v-else-if="displayContent === 'copies' && !fullMode"
          key="copies"
        >
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
          </q-list>
        </q-card-section>
        <q-card-section v-else key="summary">
          <q-card-section horizontal>
            <q-item-section class="col-3">
              <cached-image
                :id="document.isbn"
                :url="document.image"
                type="jpg"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>
                {{ document.summary }}
              </q-item-label>
              <q-item-label caption>
                {{ document.materialDescription }}
              </q-item-label>
              <q-item-label
                caption
                @click="openBookOnGoogleBook(document.isbn)"
              >
                ISBN: {{ document.isbn }}
              </q-item-label>
            </q-item-section>
          </q-card-section>
        </q-card-section>
      </q-card-section>

      <q-card-actions vertical class="left">
        <q-btn
          flat
          round
          :color="favoriteActionColor"
          :icon="favoriteActionIcon"
          @click="toggleFavorite"
        />
        <q-btn
          :disable="displayContent === 'cover'"
          :color="displayContent === 'cover' ? 'accent' : 'grey-4'"
          flat
          round
          icon="image"
          @click="displayContent = 'cover'"
        />
        <q-btn
          :disable="displayContent === 'summary'"
          :color="displayContent === 'summary' ? 'accent' : 'grey-4'"
          flat
          round
          icon="subject"
          @click="displayContent = 'summary'"
        />
        <q-btn
          :disable="displayContent === 'copies'"
          :color="displayContent === 'copies' ? 'accent' : 'grey-4'"
          flat
          round
          icon="library_books"
          @click="displayContent = 'copies'"
        >
          <q-badge color="red" floating>
            {{ document.copies.length }}
          </q-badge>
        </q-btn>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapState, mapActions } from "pinia";

import { useFavoriteStore } from "../stores/favorite-store";

import { openURL } from "quasar";

import compact from "lodash/compact";

import CachedImage from "./CachedImage.vue";

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
  components: {
    CachedImage,
  },
  props: {
    document: {
      type: Object,
      required: true,
    },
    fullMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      displayContent: "summary",
    };
  },
  computed: {
    ...mapState(useFavoriteStore, ["favoriteDocuments"]),
    favoriteActionIcon() {
      return this.isFavorite ? "favorite" : "favorite_border";
    },
    favoriteActionColor() {
      return this.isFavorite ? "red" : "gray";
    },
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
    isFavorite() {
      return !!this.favoriteDocuments.find(
        (document) => this.document.id === document.id
      );
    },
  },
  methods: {
    ...mapActions(useFavoriteStore, ["toggleFavoriteDocument"]),
    toggleFavorite() {
      this.toggleFavoriteDocument({ document: this.document });
    },
    async openBookOnGoogleBook(isbn) {
      const googleBookQuery = `https://www.googleapis.com/books/v1/volumes?q=isbn${isbn}`;
      const response = await this.$axios.get(googleBookQuery);
      const googleBook = response.data?.items[0];
      openURL(googleBook.volumeInfo.previewLink);
    },
  },
};
</script>

<style lang="scss" scoped>
.copy-list {
  font-size: 0.6em;
}
.my-card {
  margin-bottom: 8px;
}
</style>
