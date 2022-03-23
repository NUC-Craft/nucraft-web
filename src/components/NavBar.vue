<template>
  <v-app-bar
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="@/assets/banner.png"
      scroll-target="#scrolling-techniques-2"
  >
    <template v-slot:img="{ props }">
      <v-img
          v-bind="props"
          gradient="to top right, rgba(135, 206, 235, 0.5), rgba(47, 79, 79, 0.8)"
      ></v-img>
    </template>

    <h2>龙山Craft —— 中北人的MC</h2>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-gamepad-variant</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-github</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-information</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>