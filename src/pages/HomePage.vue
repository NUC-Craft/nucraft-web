<template>
  <div>
    <v-container class="pl-0 pl-md-16 pl-lg-16 pr-0 pr-md-16 pr-lg-16">
      <v-card>
        <v-img
            class="white--text align-end"
            src="@/assets/propaganda.webp"
        >
          <div style="opacity: 0.4" class="black">
            <v-card-title>龙山Craft</v-card-title>
            <v-card-subtitle>中北人的MC服务器</v-card-subtitle>
          </div>
        </v-img>
        <v-card-text class="text--primary">
          <p>NUCraft 取自 NUC Craft ，将两个 C 合并而来，意为中北大学的MC服务器</p>
          <p>服务器依托于中北大学AI+移动互联创新实验室、动漫创新实验室、漫无止境动漫社的良好资源与人员条件，致力于为同学们提供和谐、友爱、高品质的 MC 游戏体验。</p>
          <p>服务器主线连接有1000Mbps校园网，在校期间，只要是中北大学学生或教职工，均可通过校园网连接至服务器</p>
          <p>玩家群体面向中北大学学生，无论是红石大佬、建筑大师还是刚入坑的萌新，龙山 Craft 均欢迎你的到来</p>
        </v-card-text>

        <v-card-actions>
          <v-btn
              text
              color="primary"
              @click="handleLink('/get-started')"
          >
            开始游戏
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-container class="pl-0 pl-md-16 pl-lg-16 pr-0 pr-md-16 pr-lg-16" v-for="(item, i) in content" :key="i">
      <v-card>
        <v-img
            class="white--text align-end"
            :src="item.picture.url"
            :max-height="item.picture.maxHeight"
        >
          <v-card-title style="opacity: 0.6" class="black">
            {{ item.title }}
          </v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">
          {{ item.subtitle }}
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <p v-for="(paragraph, j) in item.paragraphs" :key="j"> {{ paragraph }} </p>
        </v-card-text>

        <v-card-actions>
          <v-btn
              v-for="(button, k) in item.actions"
              text
              :key="k"
              :color="button.color"
              @click="handleLink(button.link)"
          >
            {{ button.content }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data: () => ({
    content: [
      {
        picture: {url: 'https://s1.ax1x.com/2022/03/23/q3w59O.jpg', maxHeight: '400px'},
        title: '良好的环境',
        subtitle: '和谐、有爱、互助',
        paragraphs: [
          '秉承为玩家服务的理念，管理成员也与玩家身份一同游戏，无滥用权限问题',
          '对红石、建筑、资源开采等无限制，玩家可自由发展',
          '玩家都为中北同学，不仅在游戏中互助团结，在校园生活也可以共同交流'
        ]
      },
      {
        picture: {url: 'https://s1.ax1x.com/2022/03/25/qUpuvQ.png', maxHeight: '400px'},
        title: '龙山铁路',
        subtitle: '龙山局集团',
        paragraphs: [
          '服务器内有四通八达的铁路线路',
          '龙山局集团始建于2020年，是以铁路客货运输为主的特大型国有企业',
          '龙局管内最早的铁路是上（兰村）沙（城）线，后兴建龙（山）北（国）支线，现管内有上沙、猪人塔专线等多条铁路线路，龙山站、上兰村站、孤山口等18座车站及乘降所。'
        ]
      }
    ]
  }),
  methods: {
    handleLink(url) {
      this.$router.push({path: url})
    }
  }
}
</script>

<style scoped>

</style>