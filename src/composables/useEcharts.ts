import type { EChartsOption } from 'echarts'
import type { Ref } from 'vue'
import { tryOnUnmounted, useDebounceFn } from '@vueuse/core'
import echarts from '@/util/echarts'
import { useSettingStore } from '~/store'

export function useECharts(
  elRef: Ref<HTMLDivElement>,
) {
  const settingStore = useSettingStore()

  let chartInstance: echarts.ECharts | null = null
  let resizeFn: Fn = resize
  const cacheOptions = ref({}) as Ref<EChartsOption>
  let removeResizeFn: Fn = () => {}

  resizeFn = useDebounceFn(resize, 200)

  const getOptions = computed(() => {
    return cacheOptions.value as EChartsOption
  })

  function initCharts() {
    const el = unref(elRef)
    if (!el || !unref(el))
      return

    chartInstance = echarts.init(el, 'default')
    const { removeEvent } = useEventListeners({
      el: window,
      name: 'resize',
      listener: resizeFn,
    })
    removeResizeFn = removeEvent
  }

  function setOptions(options: EChartsOption, clear = true) {
    cacheOptions.value = options
    if (unref(elRef)?.offsetHeight === 0) {
      useTimeoutFn(() => {
        setOptions(unref(getOptions))
      }, 30)
      return
    }
    nextTick(() => {
      useTimeoutFn(() => {
        if (!chartInstance) {
          initCharts()

          if (!chartInstance)
            return
        }
        clear && chartInstance?.clear()

        chartInstance?.setOption(unref(getOptions))
      }, 30)
    })
  }

  function updateOption(options: EChartsOption) {
    nextTick(() => {
      chartInstance?.setOption(options)
    })
  }

  function resize() {
    chartInstance?.resize({
      animation: {
        duration: 300,
        easing: 'quadraticIn',
      },
    })
  }

  watch(() => settingStore.isCollapse, (_) => {
    useTimeoutFn(() => {
      resizeFn()
    }, 200)
  })

  tryOnUnmounted(() => {
    if (!chartInstance)
      return
    removeResizeFn()

    utilAwaitTime(200).then(() => {
      chartInstance?.dispose()
      chartInstance = null
    })
  })

  function getInstance(): echarts.ECharts | null {
    if (!chartInstance)
      initCharts()

    return chartInstance
  }

  return {
    setOptions,
    updateOption,
    resize,
    echarts,
    getInstance,
  }
}
