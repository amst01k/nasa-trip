<template>
  <div class="hero rounded">
    <v-row class="d-flex flex-wrap align-end justify-center">
      <v-col sm="12" md="12" lg="6">
        <v-sheet class="py-3 px-3">
          <h1 class="font-weight-black display-2 text-uppercase">NASA-Trip :</h1>
          <h2 class="title">Experiment with NASA's most popular API's.</h2>
        </v-sheet>
      </v-col>
      <v-col sm="12" md="12" lg="6">
        <v-sheet class="py-3 px-3">
          <h2
            class="subtitle-2 font-weight-bold"
          >Start with NASA's Astrophtography Picture Of the Day(APOD) below :</h2>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style lang="sass" scoped>
.hero
    margin: 48px 0 0 0

.rounded
    border-radius: 4px
</style>