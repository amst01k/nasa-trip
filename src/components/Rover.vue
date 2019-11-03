<template>
  <v-sheet class="py-3 px-3 w-full transparent">
    <h1 class="text-uppercase font-weight-black">Mars Rover Images</h1>
    <h2 class="title">Choose a Solar Day(Sol) Below :</h2>
    <v-alert
      class="caption mt-3"
      type="error"
      dense
      outlined
    >Please Note : Some Sol are missing from NASA's API. Either the Rover was down, or no information has been provided.</v-alert>
    <div class="d-flex flex-wrap flex-lg-row flex-column mt-6">
      <v-select
        label="Sol"
        :items="sol"
        @change="onSol(solSelect)"
        v-model="solSelect"
        outlined
        dense
      ></v-select>
    </div>
    <v-row>
      <v-col
        sm="12"
        md="12"
        lg="6"
        xl="6"
        align="center"
        justify="center"
        v-for="data in allRover.photos"
        :key="data.img_src"
      >
        <v-card
          class="rover-card d-block d-sm-block d-md-flex d-lg-flex d-xl-flex transparent"
          flat
        >
          <div class="v-list-item d-block d-sm-block d-md-flex d-lg-flex d-xl-flex px-0">
            <v-img :src="data.img_src" max-width="344" aspect-ratio="1" max-height="300">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-1"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-list-item-content class="align-start justify-start text-left pr-0 pl-md-6 pl-lg-6">
              <div class="overline">{{data.earth_date}}</div>
              <v-list-item-title class="title">On Rover : {{data.rover.name}}</v-list-item-title>
              <v-list-item-subtitle class="mt-1">
                Taken By :
                <strong>{{data.camera.name}}</strong>
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                (
                <strong>{{data.camera.full_name}}</strong>)
              </v-list-item-subtitle>
              <p class="body-2 mt-3">
                Sol :
                <strong>{{data.sol}}</strong>
              </p>
              <p class="body-2">
                ID:
                <strong>{{data.id}}</strong>
              </p>
              <p class="body-2">
                Eartch Launch Date :
                <strong>{{data.rover.launch_date}}</strong>
              </p>
              <p class="body-2">
                Mars Landing Date :
                <strong>{{data.rover.landing_date}}</strong>
              </p>
              <p class="body-2">
                Is it still active? :
                <span class="text-uppercase">
                  <strong>{{data.rover.status}}</strong>
                </span>
              </p>
              <p class="body-2">
                Total Photos Over Time :
                <strong>{{data.rover.total_photos}}</strong>
              </p>
              <v-card-actions
                class="justify-start align-start flex-column flex-lg-row px-0 py-0 mt-3"
              >
                <v-btn :href="data.img_src" target="_blank" outlined>View Rover Image</v-btn>
              </v-card-actions>
            </v-list-item-content>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Rover",
  data: () => {
    return {
      sol: Array.from(Array(1000).keys()),
      solSelect: String,
      loading: true
    };
  },
  methods: {
    ...mapActions(["filterRover"]),
    onSol(sol) {
      this.filterRover(sol);
    }
  },
  computed: mapGetters(["allRover"])
};
</script>