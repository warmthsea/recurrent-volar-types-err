import type DatePicker from '~/components/table/DatePicker.vue'

export const useTypeRefCascader = () => {
  const cascaderRef = ref()
  const getZh = () => {
    return cascaderRef.value?.getCheckedNodes()[0].pathLabels.join('/')
  }

  return { cascaderRef, getZh }
}
export const useTypeRefDatePicker = () => {
  const pickerRef = ref<InstanceType<typeof DatePicker>>()
  const pickerDateClear = () => {
    if (pickerRef.value)
      pickerRef.value.date = ['', '']
  }
  return { pickerRef, pickerDateClear }
}
