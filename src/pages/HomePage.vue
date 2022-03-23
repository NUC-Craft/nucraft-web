<template>
  <v-card>
    <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>中北人自己的MC服务器</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      NUCraft
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <p>NUCraft 取自 NUC Craft ，将两个 C 合并而来，意为中北大学的MC服务器</p>
      <p>服务器开学期间拥有1000Mbps校园网络，DELL PowerEdge 12Gen 物理服务器，依托于中北大学AI+移动互联创新实验室、动漫创新实验室、漫无止境动漫社的良好资源与人员条件，致力于为同学们提供和谐、友爱、高品质的 MC 游戏体验。</p>
    </v-card-text>

    <v-card-actions>
      <v-btn
          color="orange"
          text
      >
        Share
      </v-btn>

      <v-btn
          color="orange"
          text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "HomePage",
  data:() =>({
  })
}
</script>

<style scoped>

</style>