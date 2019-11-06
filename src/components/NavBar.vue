<template>
  <nav class="nav">
    <v-app-bar app flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase font-weight-black">
        <span>NASA-Trip</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-sheet class="fill-height">
      <v-navigation-drawer v-model="drawer" fixed temporary>
        <v-container>
          <h3>Learn More :</h3>
          <v-list-item class="px-0 py-0">
            <v-btn text href="https://api.nasa.gov" target="_blank" class="px-0 py-0">
              <span>NASA'S API'S</span>
              <v-icon small>mdi-open-in-new</v-icon>
            </v-btn>
          </v-list-item>
          <v-list-item class="px-0 py-0">
            <v-btn
              text
              href="https://github.com/amst01k/nasa-trip.git"
              target="_blank"
              class="px-0 py-0"
            >
              <span>GITHUB</span>
              <v-icon small>mdi-open-in-new</v-icon>
            </v-btn>
          </v-list-item>
        </v-container>
      </v-navigation-drawer>
    </v-sheet>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    drawer: false
  })
};
</script>

<style lang="sass">
</style>