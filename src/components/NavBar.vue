<template>
  <nav class="nav">
    <v-app-bar app flat scroll-off-screen>
      <v-app-bar-nav-icon class="d-sm-none d-md-none d-lg-none d-xl-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase font-weight-black">
        <span>NASA-Trip</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="drawer d-none d-sm-flex">
        <v-btn text href="https://api.nasa.gov" target="_blank">
          <span class="mr-2">NASA'S API'S</span>
          <v-icon small>mdi-open-in-new</v-icon>
        </v-btn>
        <v-btn text href="https://github.com/amst01k/nasa-trip.git" target="_blank">
          <span class="mr-2">GITHUB</span>
          <v-icon small>mdi-open-in-new</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-sheet class="fill-height">
      <v-navigation-drawer v-model="drawer" absolute temporary>
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