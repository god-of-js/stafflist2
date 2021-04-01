<template>
  <form @submit.prevent="submit">
    <custom-input
      :img="'SelectImg'"
      :elementType="'select'"
      :optionsArr="arr"
      :placeholder="'Project'"
      @data="(e) => (data.project = e)"
    />
    <custom-input
      class="mt date"
      :img="'DateImg'"
      :placeholder="'Date'"
      :type="'date'"
      @data="(e) => (data.date = e)"
    />
    <custom-input
      class="mt"
      :err="emailStartedAndCorrect"
      :img="'EmailImg'"
      :placeholder="'Email Address'"
      @data="(e) => (data.email = e)"
    />
    <custom-input
      class="mt"
      :placeholder="'Clearance for'"
      :type="'checkbox'"
      @data="(e) => (data.clearanceForAll = e)"
    />
    <custom-button
      @click.prevent="additionalInformation = !additionalInformation"
      :setClass="'text'"
      class="mt mb"
    >
      <span v-if="!additionalInformation" class="dash">+</span>
      <span v-else class="dash">-</span>
      <span class="ml">Additional Information</span>
    </custom-button>
    <!-- Used as a container to group the additional informations. -->
    <div v-if="additionalInformation">
      <custom-input
        class="mt"
        :placeholder="'Additional staff information'"
        :elementType="'textarea'"
        @data="(e) => (data.additionalInformation = e)"
      />
      <add-document @sendFile="placeFile" />
      <!-- Used as a flex container here. No significant semantic meaning given. -->
      <div
        class="documents"
        v-for="(document, index) in data.files"
        :key="index"
      >
        <span v-text="document.name" />
        <custom-button :setClass="'text'" @click="removeImage(index)"
          >Delete</custom-button
        >
      </div>
    </div>
    <custom-button class="mtx5" :inactive="emailCheckInput">SAVE</custom-button>
  </form>
</template>

<script>
import axios from "axios";
import emailValidation from "@/helpers/emailValidation";
import CustomInput from "../../custom-components/CustomInput";
import CustomButton from "../../custom-components/CustomButton";
import AddDocument from "../../custom-components/AddDocument";
export default {
  data: () => {
    return {
      arr: [
        {
          value: "Emergency hospital",
          text: "Emergency Hospital",
        },
      ],
      data: {
        email: null,
        files: [],
        project: null,
        clearanceForAll: null,
        date: null,
        additionalInformation: null,
      },
      additionalInformation: false,
    };
  },
  components: {
    CustomInput,
    AddDocument,
    CustomButton,
  },
  computed: {
    emailCheckInput() {
      return !emailValidation.email.test(this.data.email);
    },
    emailStartedAndCorrect() {
      return !!this.data.email && !emailValidation.email.test(this.data.email);
    },
  },
  methods: {
    submit() {
      axios.post("https://someurl/post-request", this.data).then(() => {});
    },
    placeFile(file) {
      console.log(file);
      this.data.files.push(file);
    },
    removeImage(index) {
      this.data.files.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
form {
  padding: 6% 3%;
}
.mt {
  margin-top: 15px;
}
.mb {
  margin-bottom: 15px;
}
.ml {
  margin-right: 15px;
}
.date {
  width: 50%;
}
.mtx5 {
  margin-top: 30px;
}
.documents {
  display: flex;
  align-content: center;
  justify-content: space-between;
}
</style>
