<template>
  <div class="data-view">
    <APOD />
    <div class="btn-wrapper">
      <v-container>
        <v-row class="py-6">
          <v-col
            col="12"
            sm="12"
            md="4"
            lg="4"
            class="d-flex justify-sm-start justify-md-center justify-lg-center justify-xl-center align-sm-start align-md-center align-lg-center align-xl-center"
          >
            <v-btn outlined @click="oncuriosity()">{{curiosityBtn.text}}</v-btn>
          </v-col>
          <v-col
            col="12"
            sm="12"
            md="4"
            lg="4"
            class="d-flex justify-sm-start justify-md-center justify-lg-center justify-xl-center align-sm-start align-md-center align-lg-center align-xl-center"
          >
            <v-btn outlined @click="onOpportunity()">{{opportunityBtn.text}}</v-btn>
          </v-col>
          <v-col
            col="12"
            sm="12"
            md="4"
            lg="4"
            class="d-flex justify-sm-start justify-md-center justify-lg-center justify-xl-center align-sm-start align-md-center align-lg-center align-xl-center"
          >
            <v-btn outlined @click="onSpirit()">{{spiritBtn.text}}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <template v-if="curiosity">
      <curiosity />
    </template>
    <template v-if="opportunity">
      <Opportunity />
    </template>
    <template v-if="spirit">
      <Spirit />
    </template>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import APOD from "@/components/APOD.vue";
import Curiosity from "@/components/rovers/Curiosity.vue";
import Opportunity from "@/components/rovers/Opportunity.vue";
import Spirit from "@/components/rovers/Spirit.vue";
export default {
  name: "DataView",
  components: {
    APOD,
    Curiosity,
    Opportunity,
    Spirit
  },
  data: () => ({
    curiosity: false,
    opportunity: false,
    spirit: false,
    curiosityBtn: {
      text: "curiosity Rover Images"
    },
    opportunityBtn: {
      text: "Opportuntiy Rover Images"
    },
    spiritBtn: {
      text: "Spirit Rover Images"
    }
  }),
  methods: {
    ...mapActions(["fetchCuriosity", "fetchOpportunity", "fetchSpirit"]),
    oncuriosity() {
      this.opportunity = false;
      this.spirit = false;
      this.curiosity = !this.curiosity;
      this.fetchCuriosity();
    },
    onOpportunity() {
      this.curiosity = false;
      this.spirit = false;
      this.opportunity = !this.opportunity;
      this.fetchOpportunity();
    },
    onSpirit() {
      this.curiosity = false;
      this.opportunity = false;
      this.spirit = !this.spirit;
      this.fetchSpirit();
    }
  }
};
</script>

<style lang="sass" scoped>
.btn-wrapper
  width: 100%
.data-view
  display: flex
  flex-wrap: wrap
</style>