<template>
  <q-card style="width: 300px" class="q-px-sm q-pb-md">
    <q-item-label header> Identifiant </q-item-label>
    <q-item dense>
      <q-item-section avatar>
        <q-icon name="fas fa-barcode" />
      </q-item-section>
      <q-item-section>
        <q-input v-model="id" autofocus />
      </q-item-section>
    </q-item>
    <q-item-label header> Nom </q-item-label>
    <q-item dense>
      <q-item-section avatar>
        <q-icon name="fas fa-user" />
      </q-item-section>
      <q-item-section>
        <q-input v-model="name" />
      </q-item-section>
    </q-item>
    <q-item-label header> Pin </q-item-label>
    <q-item dense>
      <q-item-section avatar>
        <q-icon name="fas fa-key" />
      </q-item-section>
      <q-item-section>
        <q-input v-model="pin" />
      </q-item-section>
    </q-item>
    <q-card-actions align="right">
      <q-btn v-close-popup flat color="primary" @click="addUser(newUser)">
        Ajouter un abonnement
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapActions } from "pinia";

import { useApiStore } from "../stores/api-store";

export default {
  name: "NewAccountForm",
  data() {
    return {
      id: "",
      name: "",
      pin: "",
    };
  },
  computed: {
    newUser() {
      return {
        id: this.id,
        name: this.name,
        pin: this.pin,
        color: "blue",
      };
    },
  },
  methods: {
    ...mapActions(useApiStore, ["addUser"]),
  },
};
</script>
