<template>
  <a-col span="12">
    <a-form layout="vertical" :model="formState" :ref="formRef" :rules="rules">
      <FormItem>
        <template #element>
          <a-input placeholder="Введите имя" />
        </template>
      </FormItem>
      <FormItem>
        <template #element>
          <a-input placeholder="Введите Email" />
        </template>
      </FormItem>
      <a-button></a-button>
      <a-button></a-button>
      <FormItem>
        <template #element></template>
      </FormItem>
      <FormItem>
        <template #element></template>
      </FormItem>
      <FormItem>
        <template #element></template>
      </FormItem>
    </a-form>
  </a-col>
</template>
<script>
import { ref, defineComponent } from "vue";
import FormItem from "./FormItem.vue";
import { useForm } from "ant-design-vue/lib/form";

export default defineComponent({
  components: { FormItem },
  name: "FormToSend",
  setup() {
    const formState = ref();
    const rules = {
      article: [
        {
          required: true,
          message: "Поле обязательно для заполнения",
        },
      ],
    };
    const formRef = useForm(formState);
    const onSubmit = async () => {
      /// send formState to jet-fors email
      console.log("biba");
    };
    return { formState, onSubmit, formRef, rules };
  },
});
</script>
<style lang="scss"></style>
