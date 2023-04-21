import { defineStore } from 'pinia'
import type { BreadItemType } from '~/composables/useBread'
import { webiste } from '~/const/webiste'

export const useSettingStore = defineStore('setting', {
  state: () => {
    const isCollapse = ref(false)
    const changeIndex = ref(webiste.fistPage.value)

    return {
      isCollapse,
      changeIndex,
    }
  },
  persist: true,
})

export type UseSettingStoreType = ReturnType<typeof useSettingStore>

export const useSettingEventStore = defineStore('setting-event', {
  state: () => {
    const isRefresh = ref<'paused' | 'running'>('paused')

    const startRefresh = async () => {
      isRefresh.value = 'running'
      console.clear()
      await utilAwaitTime(500)
      isRefresh.value = 'paused'
    }

    const breadList = ref<BreadItemType[]>([])

    return {
      isRefresh,
      startRefresh,
      breadList,
    }
  },
  persist: false,
})

export type UseSettingEventStoreType = ReturnType<typeof useSettingEventStore>
