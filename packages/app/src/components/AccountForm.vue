<template>
  <q-card style="width: 300px" class="q-px-sm q-pb-md">
    <q-item-label header> Nom </q-item-label>
    <q-item dense>
      <q-item-section avatar>
        <q-avatar :color="color" text-color="white">
          {{ name.slice(0, 1) }}
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-input v-model="name" autofocus />
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
    <q-item-label header> Choisissez une couleur </q-item-label>
    <q-item>
      <q-item-section>
        <div class="row">
          <div
            v-for="colorOption in colorOptions"
            :key="colorOption"
            :class="{ selected: colorOption === color }"
            class="color-selector"
          >
            <q-icon
              :color="colorOption"
              size="md"
              name="fas fa-circle"
              @click="updateColor(colorOption)"
            />
          </div>
        </div>
      </q-item-section>
    </q-item>
    <q-card-actions align="right">
      <q-btn
        v-close-popup
        flat
        round
        color="red"
        icon="close"
        @click.stop="deleteUser"
      />
      <q-btn v-close-popup flat color="primary" @click="updateUser(newUser)">
        Valider
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapActions } from "pinia";

import { useApiStore } from "../stores/api-store";

import colorsService from "src/services/colors-service";

export default {
  name: "AccountForm",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      id: "",
      name: "",
      pin: "",
      color: "",
    };
  },
  computed: {
    colorOptions() {
      return colorsService.getColorsName();
    },
    newUser() {
      return {
        ...this.user,
        id: this.id,
        name: this.name,
        pin: this.pin,
        color: this.color,
      };
    },
  },
  watch: {
    user: {
      immediate: true,
      handler: function () {
        this.id = this.user.id;
        this.name = this.user.name;
        this.pin = this.user.pin;
        this.color = this.user.color || "blue";
      },
    },
  },
  methods: {
    ...mapActions(useApiStore, ["updateUser", "removeUser"]),
    async deleteUser({ reset }) {
      await this.removeUser(this.user);
      this.$q.notify("Le compte a été supprimé");
      this.finalize(reset);
    },
    finalize(reset) {
      this.timer = setTimeout(() => {
        reset();
      }, 2000);
    },
    updateColor(newColor) {
      this.color = newColor;
      this.updateUser(this.newUser);
    },
  },
};
</script>

<style lang="sass" scoped>
.color-selector
  padding: 5px

.selected
  border-radius: 50%
  border: 1px solid $primary
</style>
