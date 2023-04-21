import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', {
  state: () => {
    const testNum = ref<number>(0)
    const routeIsMount = ref(false)
    return {
      testNum,
      routeIsMount,
    }
  },
  persist: false,
})

export type UseTestStoreType = ReturnType<typeof useTestStore>
