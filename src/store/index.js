import Vue from "vue";
import Vuex from "vuex";
import getApod from "./modules/getApod";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    getApod
  }
});
