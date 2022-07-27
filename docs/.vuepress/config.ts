import { defineUserConfig, viteBundler } from 'vuepress';

export default defineUserConfig({
    base: '/ShowXinCodeEngine/',
    bundler: viteBundler({
        viteOptions: {
            build: {
                assetsDir: './assets'
            }
        }
    })
});