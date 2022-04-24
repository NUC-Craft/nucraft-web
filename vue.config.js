const {defineConfig} = require('@vue/cli-service')
const {GitRevisionPlugin} = require('git-revision-webpack-plugin')
const gitRevisionPlugin = new GitRevisionPlugin()

module.exports = defineConfig({
    transpileDependencies: [
        'vuetify'
    ],
    configureWebpack: {
        plugins: [gitRevisionPlugin]
    },
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = '龙山Craft | 中北大学人自己的MC服务器'

            return args
        })
        config.plugin('define').tap(args => {
            args[0].VER_INFO = {
                VERSION: JSON.stringify(gitRevisionPlugin.version()),
                COMMIT_HASH: JSON.stringify(gitRevisionPlugin.commithash()),
                BRANCH: JSON.stringify(gitRevisionPlugin.branch()),
            }

            return args
        })
    }
})
