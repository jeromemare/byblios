<template>
  <div>
    <q-list padding>
      <q-item-label header> Filtres </q-item-label>
      <q-item v-ripple tag="label">
        <q-item-section>
          <q-item-label>Disponibilité</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle
            v-model="availableFilter"
            checked-icon="check"
            color="green"
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>Bibliothèques</q-item-label>
          <q-select
            v-model="librairiesFilter"
            :options="librairiesOptions"
            filled
            multiple
            use-chips
            stack-label
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: "SearchDocumentFilters",
  data() {
    return {
      availableFilter: false,
      librairiesFilter: [],
      librairiesOptions: ["Cabanis", "Saint Cyprien", "Lardenne"],
    };
  },
};
</script>
