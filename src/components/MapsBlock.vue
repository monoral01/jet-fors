<template>
  <a-col span="16">
    <a-row>
      <a-col span="12">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A2b5aea08c71fd67d5671cf527c49dae936ee3e223f395187cb27b10a7213217d&amp;source=constructor"
          width="516"
          height="556"
          frameborder="0"
        ></iframe>
      </a-col>
      <a-col span="12">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A2b5aea08c71fd67d5671cf527c49dae936ee3e223f395187cb27b10a7213217d&amp;source=constructor"
          width="516"
          height="556"
          frameborder="0"
        ></iframe>
      </a-col>
    </a-row>
  </a-col>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MapsBlock",
});
</script>
<style lang="scss"></style>
