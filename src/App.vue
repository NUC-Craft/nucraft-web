<template>
  <v-app>
    <v-card :tile="true" class="overflow-hidden">
      <NavBar/>
      <v-sheet
          id="scrolling-techniques"
          class="overflow-y-auto"
          max-height="100vh"
      >
        <v-container style="padding-top: 128px; min-height: 1000px;">
          <router-view/>
        </v-container>
        <v-footer style="background-color: #287d2f" class="white--text">
          <span>©2020-{{ new Date().getFullYear() }} 龙山市文化和旅游局</span>
          <v-spacer/>
          <span>NUC.RED</span>
        </v-footer>
      </v-sheet>
    </v-card>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {
    NavBar
  }
};
</script>
