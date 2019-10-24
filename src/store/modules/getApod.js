/* eslint-disable no-console */
import axios from "axios";
const state = {
    apod: []
  },
  getters = {
    allApod: state => state.apod
  },
  actions = {
    async fetchApod({ commit }) {
      const response = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=xCjs3Fq3PI3V74LHy11wvmbJEcyOhLQ764cI2p2T"
      );
      commit("setApod", response.data);
    },
    async updateApod({ commit }, newDate) {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=xCjs3Fq3PI3V74LHy11wvmbJEcyOhLQ764cI2p2T&date=${newDate.date}`,
        newDate
      );
      commit("changeDate", response.data);
    }
  },
  mutations = {
    setApod: (state, apod) => (state.apod = apod),
    changeDate: (state, apod) => (state.apod = apod)
  };

export default {
  state,
  getters,
  actions,
  mutations
};
