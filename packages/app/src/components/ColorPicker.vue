<template>
  <q-color
    v-model="hex"
    default-view="palette"
    no-header
    no-footer
    :palette="palette"
  />
</template>

<script>
import colorsService from "src/services/colors-service.js";

const colors = colorsService.getColors();

export default {
  name: "ColorPicker",
  props: {
    color: {
      type: String,
      default: colors[0],
    },
  },
  data() {
    return {
      palette: colors,
      hex: colors[0],
    };
  },
  mounted() {
    this.hex = this.color;
  },
};
</script>
