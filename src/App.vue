<template>
  <v-app>
    <v-card :tile="true" class="overflow-hidden">
      <NavBar />
      <v-sheet
          id="scrolling-techniques-2"
          class="overflow-y-auto"
          max-height="100vh"
      >
        <v-container style="padding-top: 128px; height: 3000px;">
          <HelloWorld />
        </v-container>
      </v-sheet>
    </v-card>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import NavBar from "@/components/NavBar";

export default {
  name: 'App',

  components: {
    NavBar,
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
