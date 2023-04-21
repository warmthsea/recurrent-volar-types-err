import type { AxiosResponse } from 'axios'
import type { FormInstance } from 'element-plus'
import type { PagesExtends } from '~/types'
import type DynamicsForm from '~/components/dynamics/DynamicsForm.vue'
import type DynamicsTable from '~/components/dynamics/DynamicsTable.vue'

export const usePageList = <P>(
  listApi: (arg0?: P) => Promise<AxiosResponse<any, any>>,
) => {
  const list = ref<any[]>([])
  const getList = () => {
    return new Promise<void>((resolve) => {
      listApi().then((res) => {
        list.value = res.data || []
        resolve()
      })
    })
  }
  onMounted(() => getList())
  return { list }
}

export const usePage = <P, T>(
  listApi: (arg0: P) => Promise<AxiosResponse<any, any>>,
  params: P,
  tableData: Ref<T>,
  /** 默认分页数值 如果为null 则不分页 */
  defaultSetting?: {
    size?: number | null
    resKey?: string
  },
  callbackList?: () => void,
) => {
  const formRef = ref<FormInstance>()
  const dySearchFormRef = ref<InstanceType<typeof DynamicsForm>>()

  const dynamicsTableRef = ref<InstanceType<typeof DynamicsTable>>()

  const size = ref(10)

  const pageParams = reactive<PagesExtends<{}>>({
    current: 1,
    size: 10,
  })

  const total = ref(0)
  const loading = ref(true)

  const getList = (callback?: any): Promise<void> => {
    callback && callbackList && callbackList()
    loading.value = true
    return new Promise<void>((resolve) => {
      let isPage = true

      const paramsData = { ...params, ...pageParams }
      const paramsNotPageData = { ...params }

      if (defaultSetting && defaultSetting?.size === null)
        isPage = false

      listApi(isPage ? paramsData : paramsNotPageData).then((res) => {
        tableData.value = (defaultSetting?.resKey ? res.data[defaultSetting?.resKey] : res.data) || []
        total.value = res.data.total
        loading.value = false
        resolve()
      })
    })
  }

  const clearSelect = () => {
    dynamicsTableRef.value?.tableRef?.clearSelection()
  }

  const onSearch = (callback?: () => void) => {
    console.log('onSearch')

    callback && callback()
    pageParams.current = 1
    getList()
  }

  const onClear = (callback?: () => void) => {
    console.log('onClear')

    callback && callback()
    if (defaultSetting?.size !== null) {
      pageParams.current = 1
      pageParams.size = defaultSetting?.size || size.value
    }

    formRef.value?.resetFields()
    dySearchFormRef.value?.dyFormRef?.resetFields()
    clearSelect()
    getList()
  }

  onMounted(() => size.value = pageParams.size || 10)

  return {
    formRef,
    dySearchFormRef,
    dynamicsTableRef,

    pageParams,
    total,
    loading,

    getList,
    onSearch,
    onClear,
    clearSelect,
  }
}

export type UsePageType = ReturnType<typeof usePage>
