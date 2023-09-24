<template>
  <q-card class="my-card">
    <q-card-section horizontal>
      <q-card-section class="full-width" vertical>
        <q-item>
          <q-item-section avatar>
            <q-avatar
              :icon="document.typeIcon"
              :color="document.availabilityColor"
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
              {{ document.availablesInLibraries }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-card-section v-if="document.display === 'cover'" key="cover">
          <cached-image
            :id="document.isbn"
            class="col"
            :url="document.image"
            type="jpg"
          />
        </q-card-section>
        <q-card-section v-else-if="document.display === 'copies'" key="copies">
          <q-list dense>
            <q-item
              v-for="copy in document.availablesCopies"
              :key="`${copy.library}/${copy.index}`"
            >
              <span class="text-sucess">{{ copy.library }} </span>
              <span> {{ copy.localisation }} / {{ copy.index }} </span>
            </q-item>
            <q-item
              v-for="copy in document.unavailablesCopies"
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
              <q-item-label caption> ISBN: {{ document.isbn }} </q-item-label>
            </q-item-section>
          </q-card-section>
        </q-card-section>
      </q-card-section>

      <q-card-actions vertical class="left">
        <q-btn
          flat
          round
          :color="document.favoriteActionColor"
          :icon="document.favoriteActionIcon"
          @click="$emit('toggleFavorite')"
        />
        <q-btn
          :disable="document.display === 'cover'"
          :color="document.display === 'cover' ? 'accent' : 'grey-4'"
          flat
          round
          icon="image"
          @click="$emit('displayContent', document, 'cover')"
        />
        <q-btn
          :disable="document.display === 'summary'"
          :color="document.display === 'summary' ? 'accent' : 'grey-4'"
          flat
          round
          icon="subject"
          @click="$emit('displayContent', document, 'summary')"
        />
        <q-btn
          :disable="document.display === 'copies'"
          :color="document.display === 'copies' ? 'accent' : 'grey-4'"
          flat
          round
          icon="library_books"
          @click="$emit('displayContent', document, 'copies')"
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
export default {
  name: 'SearchDocumentTileFunctional',
  props: {
    document: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.copy-list {
  font-size: 0.6em;
}
.my-card {
  margin-bottom: 8px;
}
</style>
