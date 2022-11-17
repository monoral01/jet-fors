<template>
  <a-col span="8">
    <a-form layout="vertical" :model="formState" :ref="formRef" :rules="rules">
      <FormItem>
        <template #element>
          <a-input
            name="name"
            placeholder="Введите имя"
            v-model:value="formState.name"
          />
        </template>
      </FormItem>
      <FormItem>
        <template #element>
          <a-input
            name="email"
            placeholder="Введите Email"
            v-model:value="formState.email"
          />
        </template>
      </FormItem>
      <a-button ghost :disabled="isResume">Отправить резюме</a-button>
      <a-button ghost :disabled="!isResume">Предложить проект</a-button>
      <FormItem>
        <template #element>
          <a-select
            placeholder="Ваша специализация"
            name="specialization"
            v-model:value="formState.specialization"
            :options="[
              { label: 'Бэкенд-разработчик', value: 'back' },
              { label: 'Фронтенд-разработчик', value: 'front' },
            ]"
          />
        </template>
      </FormItem>
      <FormItem>
        <template #element>
          <a-upload
            v-model:file-list="fileList"
            name="file"
            v-model:value="formState.file"
            :action="handlePost"
            :multiple="false"
            :headers="headers"
            @change="handleChange"
          >
            <a-button>
              Прикрепите резюме
              <upload-outlined></upload-outlined>
            </a-button>
          </a-upload>
        </template>
      </FormItem>
      <FormItem>
        <template #element>
          <a-textarea
            name="about"
            placeholder="Введите сообщение"
            :autoSize="{ minRows: 4, maxRows: 8 }"
          />
        </template>
      </FormItem>
      <a-button @click="onSubmit">ОТПРАВИТЬ</a-button>
    </a-form>
  </a-col>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";
import FormItem from "./FormItem.vue";
import { useForm } from "ant-design-vue/lib/form";
import { message } from "ant-design-vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { FileInfo, FileItem } from "@/models/FileItem";
import { FormToSend } from "@/models/Form";

export default defineComponent({
  components: { FormItem, UploadOutlined },
  name: "FormToSend",
  setup() {
    const defaultState: FormToSend = {
      name: undefined,
      email: undefined,
      isResume: true,
      file: undefined,
      specialization: undefined,
      about: undefined,
    };
    const formState = ref<FormToSend>(defaultState);
    const fileList = ref();
    const isResume = ref(false);
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
      console.log(formState);
      /// send formState to jet-fors email
      console.log("biba");
    };
    const handlePost = (file: FileItem) => Promise.resolve();
    const handleChange = (info: FileInfo) => {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`Файл ${info.file.name} успешно загружен`);
      } else if (info.file.status === "error") {
        message.error(`Не получилось загрузить файл ${info.file.name} :(`);
      }
    };
    return {
      formState,
      onSubmit,
      formRef,
      rules,
      fileList,
      headers: {
        authorization: "authorization-text",
      },
      handleChange,
      handlePost,
      isResume,
    };
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
