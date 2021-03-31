<template>
  <div>
    <button @click.prevent="clickFile" class="add-document-button">
      <img src="../../assets/img/icon-plus.svg" alt="" />
      <span>Add document</span>
    </button>
    <input type="file" class="file" @change="getFile" />
  </div>
</template>

<script>
import pickFileMixin from "@/mixins/pickFile.js";
export default {
  mixins: [pickFileMixin],
  data() {
    return {
      fileName: "",
    };
  },
  methods: {
    // this method is being activated from the mixin pickFileMixin.
    handleDocument(file) {
      this.fileName = file.name;
      this.$emit("sendFile", file);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
.add-document-button {
  outline: none;
  border: 2px solid $border-color;
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  padding: 6px;
  width: 150px;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
input[type="file"] {
  display: none;
}
div {
  display: flex;
  align-items: center;
}
</style>
