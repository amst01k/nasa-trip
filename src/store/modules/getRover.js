import axios from "axios";

const nasaAPIKey = "xCjs3Fq3PI3V74LHy11wvmbJEcyOhLQ764cI2p2T",
  roverURL =
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=0&page=1&api_key=" +
    nasaAPIKey,
  roverSolURL =
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=1&api_key=` +
    nasaAPIKey;

const state = {
    rover: []
  },
  getters = {
    allRover: state => state.rover
  },
  actions = {
    async fetchRover({ commit }) {
      const response = await axios.get(roverURL);
      commit("setRover", response.data);
    },
    async filterRover({ commit }, sol) {
      const response = await axios.get(roverSolURL + "&sol=" + `${sol}`);
      commit("updRover", response.data);
    }
  },
  mutations = {
    setRover: (state, rover) => (state.rover = rover),
    updRover: (state, rover) => (state.rover = rover)
  };

export default {
  state,
  getters,
  actions,
  mutations
};
