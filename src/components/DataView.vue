<template>
  <div class="data-view">
    <v-container>
      <v-row align="start" justify="start">
        <v-col class="px-0">
          <v-btn outlined @click="onAdd()">{{roverBtn.text}}</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <APOD />
    <template v-if="roverSeen">
      <v-sheet class="py-3 px-3 w-full">
        <h1>Mars Rover Images :</h1>
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
            lg="6"
            md="12"
            sm="12"
            align="center"
            justify="center"
            v-for="rover in allRover.photos"
            :key="rover.img_src"
          >
            <v-card class="rover-card d-block d-sm-block d-md-flex d-lg-flex d-xl-flex" flat>
              <div class="v-list-item d-block d-sm-block d-md-flex d-lg-flex d-xl-flex px-0">
                <v-img :src="rover.img_src" max-width="344" aspect-ratio="1" max-height="300"></v-img>
                <v-list-item-content
                  class="align-start justify-start text-left pr-0 pl-md-6 pl-lg-6"
                >
                  <div class="overline">{{rover.earth_date}}</div>
                  <v-list-item-title class="title">On Rover : {{rover.rover.name}}</v-list-item-title>
                  <v-list-item-subtitle>
                    Taken By :
                    <strong>{{rover.camera.name}}</strong>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    - aka -
                    <strong>{{rover.camera.full_name}}</strong>
                  </v-list-item-subtitle>
                  <p class="body-1 mt-3">Solar Day(Sol) : {{rover.sol}}</p>
                  <p class="body-1">Eartch Launch Date : {{rover.rover.launch_date}}</p>
                  <p class="body-1">Mars Landing Date : {{rover.rover.landing_date}}</p>
                  <p class="body-1">
                    Is it still active? :
                    <span class="text-uppercase">{{rover.rover.status}}</span>
                  </p>
                  <v-card-actions
                    class="justify-start align-start flex-column flex-lg-row px-0 py-0"
                  ></v-card-actions>
                </v-list-item-content>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </template>
  </div>
</template>

<script>
/*eslint-disable no-console*/
import { mapGetters, mapActions } from "vuex";
import APOD from "@/components/APOD.vue";
export default {
  name: "DataView",
  components: {
    APOD
  },
  data: () => {
    return {
      roverSeen: false,
      sol: Array.from(Array(1000).keys()),
      solSelect: String,
      roverBtn: {
        text: "Add Mars Rover Images"
      }
    };
  },
  methods: {
    ...mapActions(["fetchRover", "filterRover"]),
    onAdd() {
      this.roverSeen = !this.roverSeen;
      if (this.roverSeen === true) {
        this.fetchRover();
        this.roverBtn.text = "Remove Mars Rover Images";
      } else {
        this.roverBtn.text = "Add Mars Rover Images";
      }
    },
    onSol(sol) {
      this.filterRover(sol);
      console.log(sol);
    }
  },
  computed: mapGetters(["allRover"])
};
</script>

<style lang="sass" scoped>
.data-view
  display: flex
  flex-wrap: wrap

.w-full
  width: 100% !important
</style>