<template>
  <div class="mx-0 mx-lg-16 mx-md-16">
    <div class="mx-0 mx-md-16 mx-lg-16">
      <v-container>
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
            <p>NUCraft 取自 NUC Craft ，将两个 C 合并而来，意为中北大学的 MineCraft 服务器</p>
            <p>服务器依托于中北大学 AI+移动互联创新实验室、动漫创新实验室、漫无止境动漫社的良好资源与人员条件，致力于为同学们提供和谐、友爱、高品质的 MC 游戏体验。</p>
            <p>服务器现由 @塔塔 运营，对校内、校外均提供连接。</p>
            <p>玩家群体面向中北大学学生，无论是红石大佬、建筑大师还是刚入坑的萌新，龙山 Craft 均欢迎你的到来</p>
          </v-card-text>

          <v-card-actions>
            <v-btn
                text
                color="primary"
                @click="navigate('/get-started')"
            >
              开始游戏
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
      <content-render :content-list="contentList"/>
    </div>
  </div>
</template>

<script>
import ContentRender from "@/components/ContentRender";
import {navigate} from "@/utils/navigateHandler";

export default {
  name: "HomePage",
  components: {ContentRender},
  data: () => ({
    contentList: [
      {
        picture: {url: '/pictures/picture1.webp', maxHeight: '400px', class: 'grey lighten-3 black--text'},
        title: '良好的环境',
        subtitle: '和谐、有爱、互助',
        content:
            '<p>秉承为玩家服务的理念，管理成员也与玩家身份一同游戏，无滥用权限问题</p>'
            + '<p>对红石、建筑、资源开采等无限制，玩家可自由发展</p>'
            + '<p>玩家都为中北同学，不仅在游戏中互助团结，在校园生活也可以共同交流</p>'
      },
      {
        picture: {url: '/pictures/railway.webp', maxHeight: '400px', class: 'black'},
        title: '龙山铁路局',
        subtitle: 'China Railway Longshan Group Co.,Ltd.',
        content:
            '<p>服务器内有四通八达的铁路线路</p>'
            + '<p>龙山局集团始建于2020年，是以铁路客货运输为主的特大型国有企业</p>'
            + '<p>龙局管内最早的铁路是上（兰村）沙（城）线，后兴建龙（山）北（国）支线，现管内有上沙、猪人塔专线等多条铁路线路，龙山站、上兰村站、孤山口等18座车站及乘降所。</p>',
        actions: [{
          color: 'blue',
          link: '/railway',
          content: '了解更多'
        }]
      }
    ],
  }),
  methods: {
    navigate: (url) => navigate(url)
  }
}
</script>

<style scoped>

</style>