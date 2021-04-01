import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isModalActive: false,
  },
  mutations: {
    setModalState(state, param) {
      console.log(param);
      state.isModalActive = param;
    },
  },
  actions: {},
  modules: {},
});
