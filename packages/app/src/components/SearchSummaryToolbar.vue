<template>
  <q-toolbar>
    <q-btn flat round icon="chevron_left" @click="back" />

    <span class="search-text">
      {{ query.text }}
    </span>

    <q-space />
    <q-btn round flat icon="more_vert">
      <q-menu cover auto-close anchor="top right" self="bottom right">
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="favorite" />
          </q-item-section>
          <q-item-section>Ajouter aux favoris</q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="share" />
          </q-item-section>
          <q-item-section>Partager</q-item-section>
        </q-item>
      </q-menu>
    </q-btn>
  </q-toolbar>
</template>

<script>
export default {
  name: 'SearchSummaryToolbar',
  props: {
    query: {
      type: Object,
      required: true
    }
  },
  methods: {
    back () {
      this.$emit('new-search')
    }
  }
}
</script>

<style lang="sass" scoped>
.search-text
  font-size: 1em
</style>
