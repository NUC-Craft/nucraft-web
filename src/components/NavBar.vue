<template>
  <v-app-bar
      absolute
      dark
      shrink-on-scroll
      src="@/assets/banner.webp"
      scroll-target="#scrolling-techniques"
  >
    <template v-slot:img="{ props }">
      <v-img
          v-bind="props"
          gradient="to top right, rgba(135, 206, 235, 0.5), rgba(47, 79, 79, 0.8)"
      ></v-img>
    </template>

    <v-btn x-large text @click="handleLink('/')">
      <h2>龙山Craft</h2>
    </v-btn>

    <v-spacer/>

    <v-btn v-for="(link, i) in linkList" :key="i" icon @click="handleLink(link.url)">
      <v-icon>{{ link.icon }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    linkList: [
      {
        icon: 'mdi-gamepad-variant',
        url: '/get-started'
      },
      {
        icon: 'mdi-github',
        url: 'https://github.com/NUC-Craft'
      },
      {
        icon: 'mdi-information',
        url: '/about'
      },
    ]
  }),
  methods: {
    handleLink(url) {
      if (url.includes('://')) {
        window.location.href = url
      } else {
        this.$router.push({path: url})
      }
    }
  }
}
</script>