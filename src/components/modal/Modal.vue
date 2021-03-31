<template>
  <main>
    <modal-wrap>
      <!-- div is used as a container in this case. -->
      <div class="modal-card">
        <header>
          <b>{{ modalName }}</b>
          <custom-button :setClass="'close-btn'" @click="closeModal">
            <close-button-img />
          </custom-button>
        </header>
        <component :is="componentId" />
      </div>
    </modal-wrap>
  </main>
</template>

<script>
import ModalWrap from "./ModalWrap";
import CustomButton from "../custom-components/CustomButton";
import CloseButtonImg from "../images/CloseButtonImg";
import components from "./components";
export default {
  components: {
    ModalWrap,
    CustomButton,
    CloseButtonImg,
    ...components,
  },
  computed: {
    modalName() {
      return "Add Vacancy";
    },
    componentId() {
      return "VacancyForm";
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("setModalState", false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
@import "@/assets/styles/sizes.scss";
.modal-card {
  background: $white;
  width: 25%;
  margin: auto;
  border-radius: 5px;
  header {
    display: flex;
    justify-content: space-between;
    padding: 7px;
    border-bottom: 1px solid $border-color;
  }
}
@media screen and (max-width: $mobile-break-point) {
  .modal-card {
    height: 100%;
    width: 100%;
  }
}
</style>
