<template>
  <div class="column inline justify-center sidebar">
    <div class="space" />
    <div class="sidebar-item">
      <q-btn
        :class="{ 'fa-spin': isUpdateInProgress }"
        flat
        round
        icon="fas fa-sync-alt"
        color="accent"
        size="md"
        class="fa-q-item"
        @click="refresh"
      />
    </div>
    <div class="sidebar-item">
      <q-separator />
    </div>
    <div v-for="user in userList" :key="user.id" class="sidebar-item">
      <account-avatar :user="user" size="42px" @click="filterByUser(user)" />
    </div>
    <div class="sidebar-item">
      <q-btn
        v-if="hasFilter"
        key="removeFilter"
        round
        icon="mdi-filter-remove-outline"
        color="accent"
        size="md"
        @click="cleanFilter"
      />
      <q-btn
        v-else
        key="addAccount"
        round
        icon="add"
        color="accent"
        size="md"
        @click="newAccountOpened = true"
      />
    </div>
    <div class="sidebar-item">
      <q-separator />
    </div>

    <div class="sidebar-item">
      <q-btn
        v-if="isDev"
        flat
        round
        icon="fas fa-bug"
        color="accent"
        size="md"
        @click="openDebugPanel"
      />
    </div>
    <q-dialog v-model="newAccountOpened">
      <new-account-form />
    </q-dialog>
    <q-dialog v-model="isDevelopperPanelOpened">
      <developper-panel />
    </q-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";

import { useApiStore } from "../stores/api-store";

import DevelopperPanel from "src/components/DevelopperPanel.vue";
import AccountAvatar from "src/components/AccountAvatar.vue";
import NewAccountForm from "src/components/NewAccountForm.vue";

export default {
  name: "SidebarPanel",
  components: {
    DevelopperPanel,
    AccountAvatar,
    NewAccountForm,
  },
  props: {
    detailMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      newAccountOpened: false,
      isDevelopperPanelOpened: false,
    };
  },
  computed: {
    ...mapState(useApiStore, ["isUpdateInProgress", "userList", "hasFilter"]),
    isDev() {
      return process.env.DEV;
    },
  },
  methods: {
    ...mapActions(useApiStore, ["fetchUsers", "filterUser", "cleanFilter"]),
    refresh() {
      if (!this.isUpdateInProgress) {
        this.fetchUsers();
      }
    },
    openDebugPanel() {
      this.isDevelopperPanelOpened = true;
    },
    filterByUser(user) {
      this.filterUser(user.id);
    },
  },
};
</script>

<style lang="sass" scoped>
.sidebar-item
  padding: 5px

.space
  padding-top: 10px

.fas
  padding-left: 10px
</style>
