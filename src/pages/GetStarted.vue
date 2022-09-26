<template>
  <v-container class="pl-0 pl-md-16 pl-lg-16 pr-0 pr-md-16 pr-lg-16">
    <v-card class="pl-0 pl-md-16 pl-lg-16 pr-0 pr-md-16 pr-lg-16">
      <v-card-title>开始游戏</v-card-title>
      <v-card-text>
        <section>
          <h2>加入群聊</h2>
          <v-row>
            <v-col lg="8">
              <div>加群连接：
                <a href="https://qm.qq.com/cgi-bin/qm/qr?k=7d-KbZyUmf_f9Qs4OBHX9MfGMRJeTxsr&jump_from=webapi"
                   type="primary">加入群聊
                </a>
              </div>
              <pre>群号：652022722</pre>
              <p>加群二维码：见右</p>
              <p>为了加入服务器，您需要先加入 龙山Craft 服务器交流群。 加入群里方便平时与朋友交流以及与联系管理，可以即使收到相关消息。
                如果您没有 QQ 或不方便加入群里，可以向 mail@nuc.red
                发送邮件。</p>
            </v-col>
            <v-col lg="4">
              <v-img class="rounded" src="@/assets/qrcode.webp" contain max-height="160px"/>
            </v-col>
          </v-row>
          <br/>
          <h2>认证身份</h2>
          <p>为了确保您是中北大学的学生，您可能需要私聊群内管理提供下列信息：</p>
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
        </section>
        <section>
          <h2>配置客户端</h2>
          <p>使用任意的 1.17.1 版本的 Java 版 MC客户端即可加入游戏，如果你不知道如何下载游戏请遵循以下步骤：</p>
          <ol>
            <li>在群文件中找到最新的客户端，文件名可以询问管理员；</li>
            <li>如果你没有Java17/不知道什么是Java17/从来没有安装过1.17.x版本的MC，请
              <a href="https://mirrors.tuna.tsinghua.edu.cn/Adoptium/17/jre/x64/windows/OpenJDK17U-jre_x64_windows_hotspot_17.0.2_8.msi">点击这里</a>
              下载并安装 Java 17（一直点击下一步即可）；
            </li>
            <li>将群文件中下载的客户端移动到电脑上您找得到的地方（比如 <code>D:\Games</code> 或者 <code>桌面</code> 等）；
            </li>
            <li>右键下载的客户端，找到“解压缩”或“解压文件夹”等类似字样，点击。<span class="font-weight-bold">不要</span>直接双击打开；
            </li>
            <li>解压完成后桌面将会多出来一个包含有 "NUCraft" 字样的文件夹，文件内有包含 "HMCL" 字样的文件，双击打开；</li>
            <li>点击右下角的“启动游戏”，将会弹出窗口提示您添加账户。如果您没有购买/不知道 Minecraft
              正版，请直接在离线模式输入您想要的游戏ID，如果有正版则选择 MOJANG 或 Microtost 登录；
            </li>
            <li>稍等一段时间，游戏将会启动。点击 “多人游戏”，加入列表里的 龙山Craft 服务器即可。</li>
          </ol>
          <p>如果您使用其它客户端请确保不包含有作弊性质的 mod 。</p>
        </section>
        <section>
          <h2>注册与登录</h2>
          <p>进入服务器后，您需要注册您的账户（首次进入）或者登录才能继续，注册参考以下步骤：</p>
          <ol>
            <li>打开聊天框（通常是按 "T" 键）</li>
            <li>输入 <code>/register 你的密码 你的密码</code>，注意，这里将 “你的密码” 替换为你想要设置的密码；</li>
            <li>按下回车键，观察聊天框的内容，如果提示注册成功则可以继续，如果失败请仔细阅读信息并重试；</li>
          </ol>
          <v-alert
              border="left"
              colored-border
              type="warning"
              elevation="2">请牢记您的密码并不要告诉他人。如果密码遗忘请联系管理员。
          </v-alert>
          <p>注册后再次进入服务器需要登录，可以参考以下步骤：</p>
          <ol>
            <li>打开聊天框；</li>
            <li>输入<code>/login 你的密码</code>，此处密码为之前注册时输入的；</li>
          </ol>
        </section>
        <section>
          <h2>游玩</h2>
          <p>服务器内有诸多公共资源，可以在不违背道德的情况下自由使用，如果您找不到这些可以在群里询问群友；</p>
          <p>
            服务器内有发达的铁路系统，您可以乘坐矿车到龙山城定居。如果喜欢自己探索并在别处定居可以联系龙山局集团修建铁路。</p>
          <p>有不懂的事可以问我们，我们会亲切的告诉你。</p>
        </section>
        <section>
          <h2>常见命令</h2>
          <p>通常来说，按下 T 可以打开聊天框，以下命令在聊天框输入并回车执行。</p>
          <h3>游戏原生</h3>
          <ul>
            <li><code>/help</code> - 获取帮助</li>
            <li><code>/ping</code> - 查看ping值</li>
          </ul>
          <h3>AuthMe</h3>
          <ul>
            <li><code>/register 密码 重复密码</code> - 注册</li>
            <li><code>/login 密码 重复密码</code> - 登录</li>
            <li><code>/changepassword 新密码</code> - 更改密码</li>
          </ul>
          <h3>EssentialsX</h3>
          <ul>
            <li><code>/spawn</code> - 回到出生点</li>
            <li><code>/sethome</code> - 在当前位置设置家</li>
            <li><code>/home</code> - 传送回家</li>
            <li><code>/tpa 玩家ID</code> - 发送传送邀请</li>
          </ul>
        </section>
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
