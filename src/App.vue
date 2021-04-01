<template>
  <div id="app">
    <router-view />

    <modal v-if="isModalActive" />
  </div>
</template>
<script>
import Modal from "./components/modal/Modal.vue";
export default {
  components: {
    Modal,
  },
  computed: {
    isModalActive() {
      return this.$store.state.isModalActive;
    },
  },
};
</script>
<style lang="scss">
@font-face {
  font-family: stafflist-font;
  src: url("./assets/fonts/din/stafflistfont.ttf");
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: stafflist-font;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
