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
    async updateApod({ commit }, date) {
      const response = await axios.get(apodURL + "&date=" + `${date}`);
      commit("newDate", response.data);
    }
  },
  mutations = {
    setApod: (state, apod) => (state.apod = apod),
    newDate: (state, apod) => (state.apod = apod)
  };

export default {
  state,
  getters,
  actions,
  mutations
};
