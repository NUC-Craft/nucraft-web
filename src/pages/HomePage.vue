<template>
  <div>
    <v-card v-for="(item, i) in content" :key="i" style="margin: 32px">
      <v-img
          class="white--text align-end"
          height="320px"
          :src="item.picture"
      >
        <v-card-title>{{ item.title }}</v-card-title>
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
        >
          {{ button.content }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data: () => ({
    content: [
      {
        picture: 'https://s1.ax1x.com/2022/03/23/q3w59O.jpg',
        title: '龙山Craft',
        subtitle: '中北人自己的MC服务器',
        paragraphs: [
          'NUCraft 取自 NUC Craft ，将两个 C 合并而来，意为中北大学的MC服务器',
          '服务器依托于中北大学AI+移动互联创新实验室、动漫创新实验室、漫无止境动漫社的良好资源与人员条件，致力于为同学们提供和谐、友爱、高品质的 MC 游戏体验。',
          '服务器主线连接有1000Mbps校园网，在校期间，只要是中北大学学生或教职工，均可通过校园网连接至服务器',
          '玩家群体面向中北大学学生，无论是红石大佬、建筑大师还是刚入坑的萌新，龙山 Craft 均欢迎你的到来'
        ],
        actions: [
          {
            link: '',
            content: '开始游戏',
            color: 'blue'
          },
          {
            link: '',
            content: '了解更多',
            color: 'orange'
          }
        ]
      },
      {
        picture: 'https://s1.ax1x.com/2022/03/23/q3w59O.jpg',
        title: '良好的环境',
        subtitle: '和谐、有爱、互助',
        paragraphs: [
          '秉承为玩家服务的理念，管理成员也与玩家身份一同游戏，无滥用权限问题',
          '对红石、建筑、资源开采等无限制，玩家可自由发展',
          '玩家都为中北同学，不仅在游戏中互助团结，在校园生活也可以共同交流'
        ]
      }
    ]
  })
}
</script>

<style scoped>

</style>