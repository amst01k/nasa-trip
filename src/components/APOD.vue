<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" md="12" lg="12">
        <div class="apods">
          <v-card class="apod pt-3" width="344" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline my-0">{{allApod.date}}</div>
                <v-list-item-title class="title my-0">{{allApod.title}}</v-list-item-title>
                <v-list-item-subtitle>NASA's Astrophotography Photo Of the Day (APOD)</v-list-item-subtitle>
                <p class="body-2 mt-3">{{allApod.explanation}}</p>
              </v-list-item-content>
              <!-- <v-list-item-avatar>
                <v-img :src="allApod.url"></v-img>
              </v-list-item-avatar>-->
            </v-list-item>
            <v-card-actions>
              <v-row>
                <v-col col="12" sm="12" md="12" lg="12" order="1">
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
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
                    <v-date-picker v-model="date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(date), onSelect(allApod.date)"
                      >OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row class="mx-1">
                <v-col col="12" sm="12" md="12" lg="12">
                  <v-btn :href="allApod.hdurl" target="blank">View HD APOD</v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
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
    menu: false
  }),
  methods: {
    ...mapActions(["fetchApod", "updateApod"]),
    onSelect(allApod) {
      const newDate = {
        date: allApod
      };
      this.updateApod(newDate);
      console.log(allApod);
    }
  },
  computed: mapGetters(["allApod"]),
  created() {
    this.fetchApod();
  }
};
</script>

<style lang="sass" scoped>
.apods
    align-items: center
    display: flex
    flex-wrap: wrap
    justify-content: center
</style>