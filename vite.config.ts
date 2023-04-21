/// <reference types="vitest" />
import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  optimizeDeps: {
    include: [
      'echarts/core',
      'echarts/charts',
      'echarts/components',
      'echarts/renderers',
    ],
  },
  build: {
    sourcemap: false,
    rollupOptions: {
    },
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3100,
    open: false,
    proxy: {
      '/api': {
        target: 'http://172.19.11.188:9999',
        ws: true,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue({
          reactivityTransform: true,
        }),
      },
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'vue/macros', 'vue-router', '@vueuse/core'],
      dts: true,
      dirs: ['./src/composables'],
      vueTemplate: true,
      resolvers: [ElementPlusResolver()],
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
    }),
    ElementPlus({
      useSource: true,
    }),
    visualizer(),
    viteCompression({
      threshold: 500000, // 对大于 500kb 的文件进行压缩
      deleteOriginFile: false,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "~/styles/element/index.scss" as *;',
      },
    },
  },

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
