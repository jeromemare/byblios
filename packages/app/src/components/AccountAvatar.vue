<template>
  <q-avatar :color="avatarColor" text-color="white" :size="size">
    <span class="avatar-text">{{ avatarText }}</span>
    <q-badge
      v-if="badgeLabel !== 0"
      :label="badgeLabel"
      :color="badgeColor"
      floating
    />
  </q-avatar>
</template>

<script>
import { mapState } from "pinia";

import { useApiStore } from "../stores/api-store";

import { MAX_DOCUMENTS } from "src/services/constants";

export default {
  name: "AccountAvatar",
  props: {
    user: {
      type: Object,
      required: true,
    },
    size: {
      type: String,
      default: "2.6em",
    },
  },
  computed: {
    ...mapState(useApiStore, [
      "colorsByUser",
      "borrowedBooksCountByUser",
      "lateBooksCountByUser",
      "hasUserFilterOn",
      "filteredUsers",
    ]),
    avatarColor() {
      if (this.hasUserFilterOn && !this.filteredUsers.includes(this.user.id)) {
        return "blue-grey-4";
      }
      return this.colorsByUser[this.user.id] || "red";
    },
    avatarText() {
      if (!this.user || !this.user.name) {
        return "?";
      }

      return this.user.name.slice(0, 1);
    },
    borrowedBooksCount() {
      return this.borrowedBooksCountByUser[this.user.id] || 0;
    },
    lateBooksCount() {
      return this.lateBooksCountByUser[this.user.id] || 0;
    },
    badgeLabel() {
      return this.lateBooksCount > 0
        ? this.lateBooksCount
        : this.leftBooksCount;
    },
    badgeColor() {
      return this.lateBooksCount > 0 ? "negative" : "positive";
    },
    leftBooksCount() {
      return MAX_DOCUMENTS - this.borrowedBooksCount;
    },
  },
};
</script>

<style lang="sass" scoped>
.avatar-text
  font-weight: normal
</style>
