<template>
  <div>
    <v-container v-for="(item, i) in contentList" :key="i">
      <v-card>
        <div v-if="item.picture">
          <v-img
              class="white--text align-end"
              :src="item.picture.url"
              :max-height="item.picture.maxHeight"
          >
            <div style="opacity: 0.4" class="black">
              <v-card-title class="py-2">
                {{ item.title }}
              </v-card-title>
              <div v-if="item.subtitle">
                <v-card-subtitle class="py-0">
                  {{ item.subtitle }}
                </v-card-subtitle>
              </div>
            </div>
          </v-img>
        </div>
        <div v-else>
          <v-card-title>
            {{ item.title }}
          </v-card-title>
          <div v-if="item.subtitle">
            <v-card-subtitle>
              {{ item.subtitle }}
            </v-card-subtitle>
          </div>
        </div>

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
                @click="navigate(button.link)"
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
import {navigate} from "@/utils/navigateHandler";

export default {
  name: "ContentRender",
  props: {
    contentList: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    navigate: (url) => navigate(url)
  }
}
</script>
