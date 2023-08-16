<template>
  <q-card>
    <q-card-section>
      <div class="text-subtitle1">Développeur Panel</div>
      <div class="text-subtitle2 text-grey">Mockup de données</div>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <q-btn
        v-close-popup
        flat
        round
        icon="fas fa-broom"
        color="negative"
        @click="reset"
      />
      <q-btn
        v-close-popup
        outline
        icon="fas fa-database"
        color="accent"
        label="Données"
        @click="mockData"
      />
      <q-btn
        v-if="areUsersMockeable"
        v-close-popup
        outline
        icon="far fa-address-card"
        color="accent"
        label="Utilisateurs"
        @click="mockUsers"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapState, mapActions } from "pinia";

import { useApiStore } from "../stores/api-store";

export default {
  name: "DevelopperPanel",
  computed: {
    ...mapState(useApiStore, ["areUsersMockeable"]),
  },
  methods: {
    ...mapActions(useApiStore, ["reset", "mockUsers", "mockData"]),
  },
};
</script>
