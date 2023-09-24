<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="arrow_back"
          aria-label="Home"
          @click="$router.push('/')"
        />

        <q-toolbar-title> Mes comptes </q-toolbar-title>
        <q-btn flat dense round icon="add" @click="mockUsers" />
        <q-btn
          flat
          dense
          round
          icon="add"
          aria-label="Add"
          @click="newAccountOpened = true"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-dialog v-model="newAccountOpened">
      <new-account-form />
    </q-dialog>
  </q-layout>
</template>

<script>
import { mapActions } from 'pinia'

import { useApiStore } from '../stores/api-store'

import NewAccountForm from 'src/components/NewAccountForm.vue'

export default {
  name: 'AccountsLayout',
  components: {
    NewAccountForm
  },
  data () {
    return {
      newAccountOpened: false
    }
  },
  methods: {
    ...mapActions(useApiStore, ['mockUsers'])
  }
}
</script>
