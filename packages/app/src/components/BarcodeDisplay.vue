<template>
  <canvas :id="idName" />
</template>

<script>
import JsBarcode from "jsbarcode";

export default {
  name: "BarcodeDisplay",
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    idName() {
      return `barcode-${this.value}`;
    },
  },
  mounted() {
    JsBarcode(`#${this.idName}`)
      .options({
        width: 1.35,
        height: 40,
        displayValue: true,
      })
      .codabar(this.value, { font: "Roboto", fontSize: 14, textMargin: 0 })
      .render();
  },
};
</script>
