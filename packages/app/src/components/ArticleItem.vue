<template>
  <!-- <q-slide-item
    @right="confirmRenewBook"
  >
    <template v-slot:right>
      <q-icon name="alarm" />
    </template> -->
  <q-item
    v-ripple
    v-touch-hold.mouse="confirmRenewBook"
    :class="{ 'bg-red-1': daysToDue <= 0 }"
  >
    <q-item-section side top>
      <q-avatar :icon="bookIcon" :color="avatarColor" text-color="white" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="3">
        {{ book.titre }}
      </q-item-label>
      <q-item-label caption>
        {{ book.auteur }}
      </q-item-label>
      <q-item-label caption :class="statusTextColor">
        <q-icon :name="statusIcon" :color="statusColor" text-color="white" />
        {{ statusLabel }}
      </q-item-label>
    </q-item-section>
    <q-item-section side right top>
      <q-chip dense size="sm" clickable @click="$emit('filter', book.emprunte)">
        {{ book.emprunte }}
      </q-chip>
    </q-item-section>
    <q-dialog v-model="confirmRenew" persistent>
      <q-card>
        <q-bar class="bg-primary text-white">
          <q-icon name="error_outline" />
          <div>Renouveler le document</div>
        </q-bar>
        <q-card-section>
          <div class="text-h6">
            {{ book.titre }}
          </div>
          <div class="text-subtitle">
            {{ book.auteur }}
          </div>
          <q-item-label caption :class="statusTextColor">
            <q-icon
              :name="statusIcon"
              :color="statusColor"
              text-color="white"
            />
            {{ statusLabel }}
          </q-item-label>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn v-close-popup flat label="Annuler" />
          <q-btn
            v-close-popup
            flat
            label="Renouveler"
            color="primary"
            @click="renewBook"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-item>
  <!-- </q-slide-item> -->
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useApiStore } from "../stores/api-store";

import { parseISO, differenceInDays, formatDistanceStrict } from "date-fns";
import { fr } from "date-fns/locale";

export default {
  name: "ArticleItem",
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      confirmRenew: false,
    };
  },
  computed: {
    ...mapState(useApiStore, ["colorsByUser"]),
    bookIcon() {
      const typeIcons = {
        _BD12: "far fa-comments",
        _TEXTP: "fas fa-book",
        _CDMUS: "fas fa-compact-disc",
        _FILMTP: "fas fa-film",
      };
      return typeIcons[this.book.type] || "folder";
    },
    avatarText() {
      if (!this.book.user || !this.book.user.name) {
        return "?";
      }

      return this.book.user.name.slice(0, 1);
    },
    avatarColor() {
      return this.colorsByUser[this.book.user.id] || "red";
    },
    statusTextColor() {
      return this.daysToDue <= 0
        ? "text-negative"
        : this.daysToDue < 2
        ? "text-warning"
        : "";
    },
    statusIcon() {
      return this.canBeRenewed ? "bookmark" : "warning";
    },
    statusColor() {
      return this.daysToDue <= 0
        ? "negative"
        : this.daysToDue < 2
        ? "warning"
        : "positive";
    },
    daysToDue() {
      return differenceInDays(parseISO(this.book.rendre), new Date());
    },
    statusLabel() {
      return this.daysToDue <= 0
        ? `En retard (${Math.abs(this.daysToDue) + 1} jour${
            this.daysToDue > 0 ? "s" : ""
          })`
        : this.book.rendre
          ? formatDistanceStrict(parseISO(this.book.rendre), new Date(), {
              locale: fr,
              addSuffix: true,
              unit: "day",
            })
          : '--'
    },
    canBeRenewed() {
      return this.book.renewal && this.book.renewal.count < 2;
    },
  },
  methods: {
    ...mapActions(useApiStore, ["renewDocument"]),
    renewBook() {
      this.renewDocument(this.book);
    },
    confirmRenewBook() {
      this.confirmRenew = true;
    },
  },
};
</script>
