import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import cesium from 'vite-plugin-cesium'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
import importToCDN from 'vite-plugin-cdn-import'

// https://vite.dev/config/
export default defineConfig({
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    importToCDN({
      enableInDevMode: true,
      modules: [
        {
          name: 'vue',
          path: 'https://web3d2022.oss-cn-shenzhen.aliyuncs.com/js/vue.global.prod.js',
          var: 'Vue',
        },
        // {
        //   name: 'cesium',
        //   path: 'https://web3d2022.oss-cn-shenzhen.aliyuncs.com/cesium/Cesium.js',
        //   css: 'https://web3d2022.oss-cn-shenzhen.aliyuncs.com/cesium/Widgets/widgets.css',
        //   var: 'Cesium',
        // },
        {
          css: 'https://web3d2022.oss-cn-shenzhen.aliyuncs.com/js/elementui.index.css',
          name: 'element-plus',
          path: 'https://web3d2022.oss-cn-shenzhen.aliyuncs.com/js/elementui.full.min.js',
          var: 'ElementPlus',
        },
        {
          name: 'axios',
          path: 'https://web3d2022.oss-cn-shenzhen.aliyuncs.com/js/axios.min.js',
          var: 'axios',
        },
        {
          name: 'echarts',
          path: 'https://web3d2022.oss-cn-shenzhen.aliyuncs.com/js/echarts.min.js',
          var: 'echarts',
        },
        {
          name: 'file-saver',
          path: 'https://web3d2022.oss-cn-shenzhen.aliyuncs.com/js/FileSaver.min.js',
          var: 'FileSaver',
        },
        {
          name: 'xlsx',
          path: 'https://web3d2022.oss-cn-shenzhen.aliyuncs.com/js/xlsx.full.min.js',
          var: 'XLSX',
        },
      ],
    }),
    vue(),
    vueJsx(),
    vueDevTools(),
    cesium(),
    ElementPlus(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@common': fileURLToPath(new URL('./common', import.meta.url)),
    },
  },
})
