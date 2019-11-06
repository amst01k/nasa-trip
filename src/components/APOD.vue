<template>
  <div class="apod-wrapper">
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12">
        <div class="apods">
          <v-card
            class="apod d-block d-sm-block d-md-flex d-lg-flex d-xl-flex py-2 px-3 transparent"
            flat
          >
            <v-list-item class="d-block d-sm-block d-md-flex d-lg-flex d-xl-flex px-0">
              <v-img :src="allApod.url" max-width="375" aspect-ratio="1" :alt="allApod.title">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-1"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-list-item-content class="pr-0 pl-md-6 pl-lg-6">
                <div class="overline">{{allApod.date}}</div>
                <v-list-item-title class="title">{{allApod.title}}</v-list-item-title>
                <v-list-item-subtitle>NASA's Astrophotography Photo Of the Day (APOD)</v-list-item-subtitle>
                <p class="body-2 my-3">{{allApod.explanation}}</p>
                <v-alert dense outlined type="error">Warning: The HD APOD may be a large download.</v-alert>
                <v-card-actions
                  class="justify-start align-start flex-column flex-lg-row px-0 py-0 mt-0 mt-lg-3 vertical-middle"
                >
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    origin="top right"
                    offset-x
                    left
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date"
                        label="Select A Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-on="on"
                        max-width="150px"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable min="1995-06-16">
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(date), onSelect(date)"
                        v-on:key-down.enter="$refs.menu.save(date), onSelect(date)"
                      >View</v-btn>
                    </v-date-picker>
                  </v-menu>
                  <v-btn :href="allApod.url" class="my-3 mr-lg-3" target="blank" outlined large>
                    View SD APOD
                    <v-icon color="primary">mdi-download</v-icon>
                  </v-btn>
                  <v-hover v-slot:default="{hover}">
                    <v-btn
                      :href="allApod.hdurl"
                      class="my-3 mx-0 ml-lg-3"
                      target="blank"
                      :title="title"
                      outlined
                      large
                      :class="{'on-hover': hover}"
                    >
                      View HD APOD
                      <v-icon color="primary">mdi-download</v-icon>
                    </v-btn>
                  </v-hover>
                </v-card-actions>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { mapGetters, mapActions } from "vuex";
export default {
  name: "APOD",
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    title: "Warning: This could be a large download!!"
  }),
  methods: {
    ...mapActions(["fetchApod", "updateApod"]),
    onSelect(date) {
      this.updateApod(date);
    }
  },
  computed: mapGetters(["allApod"]),
  created() {
    this.fetchApod();
  }
};
</script>

<style lang="sass">
.apods
  display: flex
  flex-wrap: wrap

.v-text-field > .v-input__control > .v-input__slot
  width: 100px !important

.vertical-middle
  vertical-align: middle
</style>