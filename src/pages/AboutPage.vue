<template>
  <div>
    <content-render :content-list="contentList"/>
  </div>
</template>

<script>
import ContentRender from "@/components/ContentRender";

export default {
  name: "AboutPage",
  components: {ContentRender},
  data: () => ({
    contentList: [
      {
        title: '关于服务器',
        subtitle: 'NUCraft',
        content:
            '<p>龙山Craft 成立于 2020 年，最初为 2020 届中北C语音学习群基友服，后与校漫无止境动漫社的 @TATA 协商后共同成立龙山 Craft，由AI+移动互联创新实验室 @Gaein_nidb提供服务器、校园网线路以及运维</p>'
            + '<p>服务器成立以来一直努力营造一个温馨和谐的氛围，版本升降、插件增删以及游戏内各事项均由玩家商议决定</p>'
            + '<p>两年时间中，广大玩家齐心协力，建造了龙山城等建筑，猪人塔以及农场等各种设施。动漫创新实验室的 @Admiral_Spee_ 修建了数条铁路线路及沿线设施，极大的方便了玩家出行。</p>'
      },
      {
        title: '联机地址信息',
        content:
            '<h3>主联机地址</h3><ul><li>自动线路: <code>mc.ai-lab.ac.cn</code></li></ul>' +
            '<p>该地址为 SRV 记录，自动解析至在用的主机及端口。建议添加此地址，如果无效再使用下述地址</p>'
            + '<h3>当前使用地址</h3><ul>' +
            '<li>默认线路: <code>in.mc.ai-lab.ac.cn:45603</code></li>' 
            + '<h3>校园网地址</h3><ul><li><del>校园网: <code>10.0.117.71</code></del> 暂停使用</li></ul>'
            + '<h3>ZT网络地址</h3><ul><li><del>ZT网络: <code>192.168.194.x</code></del> 暂停使用</li></ul>'
      }
    ]
  })
}
</script>
