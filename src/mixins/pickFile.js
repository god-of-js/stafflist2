// This is been done in a mixin incase it is to be called in another component with different styling or format.

export default {
  methods: {
    getFile() {
      const fileInput = document.querySelector(".file");
      const file = fileInput.files[0];
      if (!file || !this.isDocument(file)) {
        alert(
          "wrong format of document. The formats allowed are PDF, txt, file, plain, docx, doc"
        );
        return;
      }
      // this method is in the component
      this.handleDocument(file);
    },
    clickFile() {
      document.querySelector(`.file`).click();
    },

    isDocument(file) {
      const allowedFiles = ["pdf", "doc", "docx", "txt", "plain"];
      if (file) {
        const type = file.type.split("/")[1] ?? file.name.split(".")[1];
        if (allowedFiles.indexOf(type) >= 0) {
          return true;
        } else return false;
      }
    },
  },
};
