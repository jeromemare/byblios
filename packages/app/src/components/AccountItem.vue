<template>
  <q-card>
    <q-item class="user-summary">
      <q-item-section side>
        <q-avatar :color="avatarColor" text-color="white" size="2.7em">
          <span class="avatar-text">{{ userAvatarLabel }}</span>
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-h5">
          {{ user.name }}
        </q-item-label>
        <q-item-label v-if="!isAccountExpired" :class="leftBookColor" caption>
          {{ leftBooksLabel }}
        </q-item-label>
        <q-item-label>
          <q-chip
            v-if="isAccountAboutToExpire || isAccountExpired"
            :color="isAccountExpired ? 'negative' : 'warning'"
            text-color="white"
            dense
          >
            {{ expirationPreLabel }} {{ expirationDateForHuman }}
          </q-chip>
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-item class="barcode">
      <q-item-section>
        <barcode-display :value="user.id" />
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script>
import { mapState } from "pinia";

import { useApiStore } from "../stores/api-store";

import fr from "date-fns/locale/fr";
import parse from "date-fns/parse";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import isBefore from "date-fns/isBefore";
import differenceInDays from "date-fns/differenceInDays";

import BarcodeDisplay from "src/components/BarcodeDisplay.vue";
import { MAX_DOCUMENTS } from "src/services/constants";

export default {
  name: "AccountItem",
  components: {
    BarcodeDisplay,
  },
  props: {
    user: {
      type: Object,
      required: true,
      validator: (user) => {
        return !!(user.name && user.id && user.pin);
      },
    },
  },
  data() {
    return {
      timer: undefined,
    };
  },
  computed: {
    ...mapState(useApiStore, [
      "borrowedBooksCountByUser",
      "lateBooksCountByUser",
    ]),
    leftBooksLabel() {
      if (this.lateBooksCount > 0) {
        return `${this.lateBooksCount} document${
          this.lateBooksCount > 1 ? "s" : ""
        } en retard`;
      } else if (this.leftBookCount === 0) {
        return "Aucun emprunt possible";
      } else if (this.leftBookCount === 1) {
        return "Un emprunt restant";
      }
      return `${MAX_DOCUMENTS - this.borrowedBooksCount} emprunts restants`;
    },
    leftBookColor() {
      if (this.lateBooksCount > 0) {
        return "text-negative";
      } else if (this.leftBookCount === 0) {
        return "text-warning";
      }

      return "";
    },
    userAvatarLabel() {
      return this.user.name.slice(0, 1);
    },
    borrowedBooksCount() {
      return this.borrowedBooksCountByUser[this.user.id] || 0;
    },
    lateBooksCount() {
      return this.lateBooksCountByUser[this.user.id] || 0;
    },
    avatarColor() {
      return this.user.color || "blue";
    },
    statusColor() {
      return this.lateBooksCount > 0
        ? "negative"
        : this.leftBookCount === 0
        ? "positive"
        : "positive";
    },
    leftBookCount() {
      return MAX_DOCUMENTS - this.borrowedBooksCount;
    },
    statusCount() {
      return this.lateBooksCount > 0 ? this.lateBooksCount : this.leftBookCount;
    },
    expirationDate() {
      const date = this.user.info && this.user.info.expirationDate;
      return date && parse(date, "d/M/yyyy", new Date());
    },
    isAccountExpired() {
      return isBefore(this.expirationDate, new Date());
    },
    isAccountAboutToExpire() {
      const daysToExpiration = differenceInDays(
        this.expirationDate,
        new Date()
      );
      return daysToExpiration > 0 && daysToExpiration < 15;
    },
    expirationPreLabel() {
      return this.isAccountExpired ? "a expiré" : "expire";
    },
    expirationDateForHuman() {
      if (this.expirationDate) {
        return formatDistanceToNow(this.expirationDate, {
          addSuffix: true,
          locale: fr,
        });
      }
      return "--";
    },
  },
};
</script>

<style lang="sass" scoped>
.avatar
  color: white
  margin-bottom: 2px
  margin-top: 2px

.avatar-text
  font-weight: normal

.barcode
  padding-top: 0px

.user-summary
  padding-bottom: 0px
</style>
