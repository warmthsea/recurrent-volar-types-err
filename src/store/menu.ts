import { defineStore } from 'pinia'
import type { Router } from 'vue-router'
import { useTestStore } from './test'
import type { MenuType } from '~/types'
import { getMenuApi } from '~/api/menu'

const modules = import.meta.glob('../pages/**/**/*.vue')

export const useMenuStore = defineStore('menu', {
  state: () => {
    const menuList = ref<MenuType[]>([])

    const getMenuList = (): Promise<void> => {
      console.log('get menu list')
      return new Promise((resolve) => {
        getMenuApi().then((res) => {
          menuList.value = res.data || []
          resolve()
        })
      })
    }
    const addRoute = (router: Router): Promise<void> => {
      const testStore = useTestStore()
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve) => {
        if (!menuList.value.length)
          await getMenuList()

        const data = utilGetLastList(menuList.value, 'children')
        data.forEach((i) => {
          router.addRoute('layoutHome', {
            path: i.path,
            name: i.name,
            meta: i,
            component: modules[`../pages${i.path}.vue`],
          })
        })
        // router.addRoute('layoutHome', {
        //   path: '/admin/index',
        //   name: 'test',
        //   component: modules['../pages/admin/index.vue'],
        // })
        testStore.routeIsMount = true
        resolve()
      })
    }

    const refreshMenu = (e = true) => {
      menuList.value = []
      e && location.reload()
    }

    return {
      menuList,
      getMenuList,
      addRoute,
      refreshMenu,
    }
  },
  // persist: true,
  persist: {
    storage: sessionStorage,
  },
})

export type UseMenuStoreType = ReturnType<typeof useMenuStore>
