import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import router from './router'
import App from './App.vue'

import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/tailwind.css'
import './styles/main.scss'
import 'element-plus/es/components/message/style/css'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(router).use(pinia)
app.mount('#app')

console.info(
  `%c mode ${import.meta.env.VITE_NODE_ENV} `,
  'font-style: italic; background-color: rgba(241,243,244,1); color: rgba(0,0,0,0.7);',
)
