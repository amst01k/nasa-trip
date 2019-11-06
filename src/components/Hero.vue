<template>
  <div class="hero-wrapper">
    <!-- <transition name="fade"> -->
    <div class="hero">
      <v-container>
        <v-row class="d-flex flex-wrap align-start justify-start">
          <v-col sm="12" md="12" lg="6" xl="6">
            <v-sheet class="py-3 px-3 transparent">
              <h1 class="display-3 text-uppercase font-weight-black">NASA-Trip</h1>
              <h2 class="mt-2 font-weight-bold">Experiment with NASA's most popular API's.</h2>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style lang="sass" scoped>
.hero
  padding: 64px 0 0 0
</style>