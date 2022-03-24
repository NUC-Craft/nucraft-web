const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: [
        'vuetify'
    ],
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = '龙山Craft | 中北大学人自己的MC服务器'
            return args
        })
    }
})
