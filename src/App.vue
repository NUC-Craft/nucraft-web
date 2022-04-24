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
          <span class="mx-2">©2020-{{ new Date().getFullYear() }} 龙山市文化和旅游局</span>
          <span class="mx-2">版本:
            <a class="blue--text" target="_blank"
               :href="`https://github.com/NUC-Craft/nucraft-web/commit/${versionInfo.COMMIT_HASH}`">
            git-{{ versionInfo.BRANCH }}-{{ versionInfo.VERSION }}
          </a></span>
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
  },
  data: () => ({
    // eslint-disable-next-line no-undef
    versionInfo: VER_INFO
  })
};
</script>
