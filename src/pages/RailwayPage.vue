<template>
  <div>
    <content-render :content-list="contentList"/>
  </div>
</template>

<script>
import ContentRender from "@/components/ContentRender";

export default {
  name: "RailwayPage",
  components: {ContentRender},
  data: () => ({
    contentList: [
      {
        picture: {url: 'https://s1.ax1x.com/2022/03/25/qUpuvQ.png', maxHeight: '400px'},
        title: '龙山局集团',
        subtitle: 'China Railway Longshan Group Co.,Ltd.',
        content:
            '<p>服务器内有四通八达的铁路线路</p>'
            + '<p>龙山局集团始建于2020年，是以铁路客货运输为主的特大型国有企业</p>'
            + '<p>龙局管内最早的铁路是上（兰村）沙（城）线，后兴建龙（山）北（国）支线，现管内有上沙、猪人塔专线等多条铁路线路，龙山站、上兰村站、孤山口等18座车站及乘降所。</p>'
      }
    ]
  })
}
</script>