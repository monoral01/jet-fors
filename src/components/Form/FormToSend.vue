<template>
  <a-col span="8">
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
      <a-button ghost :disabled="false">Отправить резюме</a-button>
      <a-button ghost :disabled="false">Предложить проект</a-button>
      <FormItem>
        <!-- <a-select :load-options="[{ label: 'biba', value: 'biba' }]" /> -->
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
<script lang="ts">
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
<style lang="scss">
.ant-btn {
  &-background-ghost {
    &[disabled] {
      color: white;
      opacity: 0.4;
    }
  }
}
</style>
