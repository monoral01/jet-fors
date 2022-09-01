<template>
  <a-row class="contacts-label"> </a-row>
  <a-row class="contacts-content">
    <FormToSend />
    <MapsBlock />
  </a-row>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FormToSend from "@/components/Form/FormToSend.vue";
import MapsBlock from "@/components/MapsBlock.vue";

export default defineComponent({
  name: "ContactsPage",
  components: { FormToSend, MapsBlock },
});
</script>
<style lang="scss">
.contacts {
  &-label {
    height: 20vh;
  }
  &-content {
    margin: 0px 80px;
  }
}
</style>
