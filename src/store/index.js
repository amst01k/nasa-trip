import Vue from "vue";
import Vuex from "vuex";
import getApod from "./modules/getApod";
import getRover from "./modules/getRover";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    getApod,
    getRover
  }
});
