<template>
  <v-app>
    <NavBar />
    <Hero />
    <v-content class="px-0 py-0">
      <v-container>
        <DataView />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Hero from "@/components/Hero.vue";
import DataView from "@/components/DataView.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Hero,
    DataView
  }
};
</script>
