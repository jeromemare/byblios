<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">
        {{ title }}
      </div>
      <div class="text-subtitle2">
        {{ author }}
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions vertical>
      <q-btn flat> Renouveler </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  }
}
</script>
