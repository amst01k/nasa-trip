<template>
  <v-app>
    <NavBar />
    <v-content>
      <v-container>
        <DataView />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import DataView from "@/components/DataView.vue";

export default {
  name: "App",
  components: {
    DataView,
    NavBar
  }
};
</script>
