<template>
  <v-container>
    <v-card class="pl-16 pr-16">
      <v-card-title>开始游戏</v-card-title>
      <v-card-text>
        <h2>加入群聊</h2>
        <v-row>
          <v-col lg="8">
            <div>加群连接：
              <a target="_blank"
                 href="https://qm.qq.com/cgi-bin/qm/qr?k=7d-KbZyUmf_f9Qs4OBHX9MfGMRJeTxsr&jump_from=webapi">
                加入群聊
              </a>
            </div>
            <pre>群号：652022722</pre>
            <p>加群二维码：见右</p>
            <p>为了加入服务器，您需要先加入 龙山Craft 服务器交流群。 加入群里方便平时与朋友交流以及与联系管理，可以即使收到相关消息。 如果您没有 QQ 或不方便加入群里，可以向 mail@nuc.red
              发送邮件。</p>
          </v-col>
          <v-col lg="4">
            <v-img class="text-left" src="https://s1.ax1x.com/2022/03/24/qJd4bj.png" contain max-height="160px"/>
          </v-col>
        </v-row>
        <h2>认证身份</h2>
        <p>为了确保您是中北大学的学生，您可能需要私聊群内管理提供下列信息</p>
        <ul>
          <li>学号</li>
          <li>姓名（或其中的数个字）</li>
        </ul>
        <v-alert
            type="info"
            border="top"
            colored-border
            elevation="2"
        >
          <p>该信息仅用于认证您为中北大学学生，如果介意可以私聊以其他方式证明。</p>
          <p>我们承诺，不会向任何人泄露登记的个人信息。</p>
        </v-alert>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "GetStarted",
  data: () => ({
    title: '',
    content: ''
  })
}
</script>

<style scoped>

</style>