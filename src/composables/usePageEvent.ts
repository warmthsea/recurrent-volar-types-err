import type { AxiosResponse } from 'axios'
import type { FormInstance } from 'element-plus'
import type DynamicsForm from '~/components/dynamics/DynamicsForm.vue'

export const usePageEvent = <T>(
  form: T,
  getList: () => void,
  show?: Ref<boolean>,
  addApi?: (arg0: T) => Promise<AxiosResponse<any, any>>,
  editApi?: (arg0: T) => Promise<AxiosResponse<any, any>>,
  putCallBack?: () => void | Promise<void>,
  addCallBack?: () => void,
) => {
  const dynamicsFormRef = ref<InstanceType<typeof DynamicsForm>>()
  const formType = ref<'新增' | '编辑' | '查看'>('新增')

  const submitOkEvent = (res: { data: boolean }) => {
    if (!res.data) {
      return ElMessage.warning(
        `${formType.value === '编辑' ? '更改' : formType.value}失败`,
      )
    }

    if (show)
      show.value = false
    ElMessage.success(
      `${formType.value === '编辑' ? '更改' : formType.value}成功`,
    )
    getList()
  }

  const submitForm = async (
    formEl: FormInstance | undefined,
    callBack?: () => void,
  ): Promise<void> => {
    if (!formEl)
      return
    await formEl.validate(async (valid, fields) => {
      if (valid) {
        console.log(form)
        console.log('submit!')
        if (formType.value === '新增' && addApi) {
          addCallBack && addCallBack()
          addApi(form).then((res) => {
            submitOkEvent(res)
            callBack && callBack()
          })
        }

        if (formType.value === '编辑' && editApi) {
          putCallBack && await putCallBack()
          editApi(form).then((res) => {
            submitOkEvent(res)
            callBack && callBack()
          })
        }
      }
      else {
        console.log('error submit!', fields)
      }
    })
  }

  const addItem = async (callBack?: () => void) => {
    formType.value = '新增'
    if (show)
      show.value = true
    await dynamicsFormRef.value?.dyFormRef?.resetFields()
    callBack && callBack()
  }

  const editItem = async (item: T, callBack?: () => void, type?: '查看') => {
    formType.value = type || '编辑'
    console.log(item)

    if (show)
      show.value = true

    await dynamicsFormRef.value?.dyFormRef?.resetFields()

    for (const key in form) form[key] = item[key]

    callBack && callBack()
  }

  return {
    dynamicsFormRef,
    formType,
    submitForm,
    addItem,
    editItem,
  }
}

export type UsePageEventType = ReturnType<typeof usePageEvent>

export const usePageDeleteEvent = <D extends Record<string, any>>(
  _tableData: D[],
  getList: () => void,
  key: Exclude<keyof D, 'children'>,
  delApi?: (arg0: string) => Promise<AxiosResponse<any, any>>,
  delApis?: (arg0: D[keyof D][]) => Promise<AxiosResponse<any, any>>,
  clearSelect?: () => void,
) => {
  const deleteItem = (item: D | D[keyof D][], title?: string) => {
    const isArray = Array.isArray(item)

    ElMessageBox.confirm(
      isArray
        ? `已选择${item.length}条${title}，是否删除？`
        : `${title}`,
      '提示',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      },
    )
      .then(() => {
        if (!isArray && delApi)
          return delApi((item as D)[key])

        else if (delApis)
          return delApis(item as D[keyof D][])
        else throw new Error('缺少 delApi / delApi')
      })
      .then(() => {
        ElMessage.success('删除成功')
        clearSelect && clearSelect()
        getList()
      })
      .catch(() => {})
  }

  return {
    deleteItem,
  }
}

export type UsePageEventDeleteType = ReturnType<typeof usePageDeleteEvent>
