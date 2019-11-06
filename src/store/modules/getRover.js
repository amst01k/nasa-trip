import axios from "axios";

const nasaAPIKey = `xCjs3Fq3PI3V74LHy11wvmbJEcyOhLQ764cI2p2T`,
  roverURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/`,
  state = {
    rover: []
  },
  getters = {
    allRover: state => state.rover
  },
  actions = {
    async fetchCuriosity({ commit }) {
      const response = await axios.get(
        roverURL +
          `curiosity/` +
          `photos` +
          `?sol=` +
          `0` +
          `&page=` +
          `1` +
          `&api_key=` +
          nasaAPIKey
      );
      commit("setRover", response.data);
    },
    async filterCuriosity({ commit }, sol) {
      const response = await axios.get(
        roverURL +
          `curiosity/` +
          `photos` +
          `?sol=` +
          `${sol}` +
          `&page=` +
          `1` +
          `&api_key=` +
          nasaAPIKey
      );
      commit("updRover", response.data);
    },
    async fetchOpportunity({ commit }) {
      const response = await axios.get(
        roverURL +
          `opportunity/` +
          `photos` +
          `?sol=` +
          `0` +
          `&page=` +
          `1` +
          `&api_key=` +
          nasaAPIKey
      );
      commit("setRover", response.data);
    },
    async filterOpportunity({ commit }, sol) {
      const response = await axios.get(
        roverURL +
          `opportunity/` +
          `photos` +
          `?sol=` +
          `${sol}` +
          `&page=` +
          `1` +
          `&api_key=` +
          nasaAPIKey
      );
      commit("updRover", response.data);
    },
    async fetchSpirit({ commit }) {
      const response = await axios.get(
        roverURL +
          `spirit/` +
          `photos` +
          `?sol=` +
          `0` +
          `&page=` +
          `1` +
          `&api_key=` +
          nasaAPIKey
      );
      commit("setRover", response.data);
    },
    async filterSpirit({ commit }, sol) {
      const response = await axios.get(
        roverURL +
          `spirit/` +
          `photos` +
          `?sol=` +
          `${sol}` +
          `&page=` +
          `1` +
          `&api_key=` +
          nasaAPIKey
      );
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
