<template>
  <q-page class="flex content-start">
    <div v-if="!hasUser" class="center-content">Aucun abonnement</div>
    <div class="q-pa-md row items-start justify-center q-gutter-md">
      <account-item
        v-for="user in userList"
        :key="user.id"
        :user="user"
        @click="editUser(user)"
      />
    </div>

    <q-dialog v-model="showUserForm">
      <account-form :user="userEdited" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapState } from "pinia";

import { useApiStore } from "../stores/api-store";

import AccountItem from "src/components/AccountItem.vue";
import AccountForm from "src/components/AccountForm.vue";

export default {
  name: "AccountsPage",
  components: {
    AccountItem,
    AccountForm,
  },
  data() {
    return {
      showUserForm: false,
      userEdited: {},
    };
  },
  computed: {
    ...mapState(useApiStore, ["userList"]),
    hasUser() {
      return this.userList && this.userList.length > 0;
    },
  },
  methods: {
    editUser(user) {
      this.userEdited = user;
      this.showUserForm = true;
    },
  },
};
</script>

<style lang="sass" scoped>
.center-content
  width: 100%
  height: 100%
  text-align: center
  padding-top: 50%
  font-variant: small-caps
  font-size: 1.2em
  color: #B0B0B0
</style>
