<template>
  <div class="data-view">
    <APOD />
    <v-container>
      <v-row align="start" justify="start">
        <v-col class="px-0 px-sm-0 px-md-3 px-lg-3">
          <v-btn outlined @click="onAdd()">{{roverBtn.text}}</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <template v-if="roverSeen">
      <Rover />
    </template>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import APOD from "@/components/APOD.vue";
import Rover from "@/components/Rover.vue";
export default {
  name: "DataView",
  components: {
    APOD,
    Rover
  },
  data: () => ({
    roverSeen: false,
    roverBtn: {
      text: "Add Mars Rover Images"
    }
  }),
  methods: {
    ...mapActions(["fetchRover"]),
    onAdd() {
      this.roverSeen = !this.roverSeen;
      if (this.roverSeen === true) {
        this.loading = false;
        this.fetchRover();
        this.roverBtn.text = "Remove Mars Rover Images";
      } else {
        this.roverBtn.text = "Add Mars Rover Images";
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.data-view
  display: flex
  flex-wrap: wrap

.w-full
  width: 100% !important
</style>