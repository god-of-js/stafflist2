<template>
  <form>
    <custom-input
      :img="'SelectImg'"
      :elementType="'select'"
      :optionsArr="arr"
      :placeholder="'Project'"
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
      :err="emailIsWrong"
      :img="'EmailImg'"
      :placeholder="'Email Address'"
      @data="(e) => (data.email = e)"
    />
    <custom-input
      class="mt"
      :placeholder="'Clearance for'"
      :type="'checkbox'"
      @data="(e) => (data.email = e)"
    />
    <custom-input
      class="mt"
      :placeholder="'Clearance for'"
      :elementType="'textarea'"
      @data="(e) => (data.email = e)"
    />
  </form>
</template>

<script>
import CustomInput from "../../custom-components/CustomInput";
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
        file: null,
        project: null,
        clearanceForAll: null,
        date: null,
        additionalInformation: null,
      },
    };
  },
  components: {
    CustomInput,
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
.date {
  width: 50%;
}
</style>
