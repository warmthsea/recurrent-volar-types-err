import { getDictApi } from '~/api/admin/dict'
import type { DictItemType } from '~/types'

export const useDict = (key: string, isMount = true) => {
  const dict = ref<DictItemType[]>([])

  const getDistList = (): Promise<void> => {
    return new Promise((resolve) => {
      getDictApi(key).then((res) => {
        dict.value = res.data || []
        resolve(res.data)
      })
    })
  }

  onMounted(() => isMount && getDistList())

  return { dict, getDistList }
}
