<template>
  <v-sheet class="py-3 px-3 w-full transparent">
    <h1 class="text-uppercase font-weight-black">Mars curiosity Rover Images</h1>
    <h2 class="title">
      Choose a
      <v-icon>mdi-white-balance-sunny</v-icon>&nbsp;Solar Day(Sol) Below :
    </h2>
    <v-alert class="caption mt-3" type="error" dense outlined>
      Please Note :
      <strong>This may be a large download.</strong> All calls are limited to 25 objects per page.
      <strong>If no data is returned, please choose another SOL.</strong>
    </v-alert>
    <div class="d-flex flex-wrap flex-lg-row flex-column mt-6">
      <v-select
        prepend-icon="mdi-white-balance-sunny"
        label="Sol"
        :items="sol"
        @change="onSol(solSelect)"
        v-model="solSelect"
        no-data-text="No Data Returned"
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
        :key="data.id"
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
                <strong>{{data.sol}}&nbsp;</strong>
                <v-icon>mdi-white-balance-sunny</v-icon>
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
  name: "curiosity",
  data: () => {
    return {
      sol: Array.from(Array(1000).keys()),
      solSelect: String,
      loading: true
    };
  },
  methods: {
    ...mapActions(["filterCuriosity"]),
    onSol(sol) {
      this.filterCuriosity(sol);
    }
  },
  computed: mapGetters(["allRover"])
};
</script>

<style lang="sass" scoped>
.w-full
    width: 100% !important
</style>