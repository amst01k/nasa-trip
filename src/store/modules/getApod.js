/* eslint-disable no-console */
import axios from "axios";

const nasaAPIKey = "xCjs3Fq3PI3V74LHy11wvmbJEcyOhLQ764cI2p2T";
const apodURL = "https://api.nasa.gov/planetary/apod?api_key=" + nasaAPIKey;

const state = {
    apod: []
  },
  getters = {
    allApod: state => state.apod
  },
  actions = {
    async fetchApod({ commit }) {
      const response = await axios.get(apodURL);
      commit("setApod", response.data);
    },
    async updateApod({ commit }, newDate) {
      const response = await axios.get(
        apodURL + "&date=" + `${newDate.date}`,
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
