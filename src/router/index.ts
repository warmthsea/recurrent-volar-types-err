import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { webiste } from '~/const/webiste'

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layoutHome',
    component: () => import('../layout/index.vue'),
    redirect: webiste.fistPage.value,
    children: [
      { path: '/index', name: 'index', component: () => import('../pages/index/index.vue') },
    ],
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
