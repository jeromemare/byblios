<template>
  <q-img
    :src="imageSrc"
    placeholder-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg=="
  />
</template>

<script>
import { Platform } from "quasar";

export default {
  name: "CachedImage",
  props: {
    url: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "jpg",
    },
  },
  data() {
    return {
      imageEncoded: null,
    };
  },
  computed: {
    imageSrc() {
      return `data:image/${this.type};base64,${this.imageEncoded}`;
    },
  },
  async mounted() {
    const image = await this.$vlf.getItem(this.id);
    if (image) {
      this.imageEncoded = image;
    } else {
      const url = Platform.is.cordova
        ? this.url
        : this.url.replace(
            "http://images.titelive.com/",
            "https://localhost:9000/cover/"
          );
      const response = await this.$axios.get(url, {
        responseType: "arraybuffer",
      });
      this.imageEncoded = Buffer.from(response.data, "binary").toString(
        "base64"
      );
      await this.$vlf.setItem(this.id, this.imageEncoded);
    }
  },
};
</script>
