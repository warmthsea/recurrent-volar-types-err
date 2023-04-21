import type { ElTable } from 'element-plus'
import type { Ref } from 'vue'
import type { UsePageType } from './usePage'

export const useTableCheck = <T>(_list: T[] | undefined, selectType: 'radio' | 'checkbox' = 'checkbox', tableRef?: UsePageType['dynamicsTableRef']) => {
  /** 单独使用 table */
  const multipleTable = ref<InstanceType<typeof ElTable>>()
  const multipleSelection = ref<Array<T>>([]) as Ref<Array<T>>

  const handleClearSelect = () => {
    multipleTable.value?.clearSelection()
    tableRef?.value?.tableRef?.clearSelection()
  }

  const handleSelectionChange = (e: Array<T>) => {
    if (selectType === 'radio' && e.length > 1) {
      handleClearSelect()
      multipleTable.value?.toggleRowSelection(e[e.length - 1], true)
      tableRef?.value?.tableRef?.toggleRowSelection(e[e.length - 1], true)
    }
    else { multipleSelection.value = e }
  }

  const getKeyValList = (key: keyof T): T[keyof T][] => {
    return multipleSelection.value.map(item => item[key])
  }

  return {
    multipleTable,
    multipleSelection,
    handleSelectionChange,
    getKeyValList,
  }
}
