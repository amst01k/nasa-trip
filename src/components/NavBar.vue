<template>
  <v-app-bar app flat>
    <v-toolbar-title class="headline">
      <span>NASA-Trip</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text href="https://api.nasa.gov" target="_blank">
      <span class="mr-2">NASA'S API'S</span>
      <v-icon small>mdi-open-in-new</v-icon>
    </v-btn>
    <v-btn text href="https://github.com/amst01k/nasa-trip.git" target="_blank">
      <span class="mr-2">GITHUB</span>
      <v-icon small>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar"
};
</script>