<template>
  <a-form-item>
    <slot name="element" />
  </a-form-item>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "FormItem",
  setup() {
    return {};
  },
});
</script>
<style lang="scss"></style>
