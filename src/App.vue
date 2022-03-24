<template>
  <v-app>
    <v-card :tile="true" class="overflow-hidden">
      <NavBar/>
      <v-sheet
          id="scrolling-techniques-2"
          class="overflow-y-auto"
          max-height="100vh"
      >
        <v-container style="padding-top: 128px; min-height: 1000px;">
          <HomePage/>
        </v-container>
      </v-sheet>
    </v-card>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
import HomePage from "@/pages/HomePage";

export default {
  name: 'App',

  components: {
    NavBar,
    HomePage
  },

  data: () => ({
    //
  }),
};
</script>
