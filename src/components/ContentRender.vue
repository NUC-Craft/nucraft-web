<template>
  <div>
    <v-container class="pl-0 pl-md-16 pl-lg-16 pr-0 pr-md-16 pr-lg-16" v-for="(item, i) in contentList" :key="i">
      <v-card>
        <div v-if="item.picture">
          <v-img
              class="white--text align-end"
              :src="item.picture.url"
              :max-height="item.picture.maxHeight"
          >
            <v-card-title style="opacity: 0.6" class="black">
              {{ item.title }}
            </v-card-title>
          </v-img>
        </div>
        <div v-else>
          <v-card-title>
            {{ item.title }}
          </v-card-title>
        </div>

        <v-card-subtitle class="pb-0">
          {{ item.subtitle }}
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div v-html="item.content"/>
        </v-card-text>

        <div v-if="item.actions">
          <v-card-actions>
            <v-btn
                v-for="(button, j) in item.actions"
                text
                :key="j"
                :color="button.color"
                @click="handleLink(button.link)"
            >
              {{ button.content }}
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ContentRender",
  props: {
    contentList: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    handleLink(url) {
      this.$router.push({path: url})
    }
  }
}
</script>
