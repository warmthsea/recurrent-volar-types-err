import proxyUrl from '../../config'

/** 展示文件 */
export const utilPreviewFile = (path?: string): string => {
  if (!path)
    return ''
  return proxyUrl + path
}

/**
 * 异步等待时间
 * @param timer ms
 * @returns
 */
export const utilAwaitTime = (timer: number): Promise<void> => {
  return new Promise((resolve) => {
    const timers: NodeJS.Timeout = setTimeout(() => {
      clearTimeout(timers)
      resolve()
    }, timer)
  })
}

export const utilThrottle = (function () {
  let prev = Date.now()
  return function (callback: () => void, delay: number) {
    const now = Date.now()
    if (now - prev > delay) {
      callback()
      prev = Date.now()
    }
  }
})()

/**
 * @name 多层级数据结构重排成为一级
 * @param list
 * @param key
 * @returns
 */
export const utilGetLastList = <
  T extends Record<string, any>,
  E extends keyof T,
>(
    list: T[],
    key: E,
  ): Omit<T, E>[] => {
  const newList: Omit<T, E>[] = []
  const getLastData = (clist: T[]) => {
    clist.forEach((i) => {
      if (!i[key])
        newList.push(i)
      else getLastData(i[key])
    })
  }
  getLastData(list)
  return newList
}

/**
 *
 * @param value
 * @param dict 数组
 * @param zhKey 需要匹配后翻译出来的属性，默认@label
 * @param key 与 value 匹配的属性，默认@value
 * @returns string
 */
export const utilDictZh = <
  T extends Record<'label' | 'value' | string, any>,
>(
    value: string | number,
    dict: T[] | Readonly<T[]>,
    zhKey: keyof T = 'label',
    key: keyof T = 'value',
  ): string => {
  let zh = ''
  try {
    dict.forEach((i) => {
      if (i[key] === value) {
        zh = i[zhKey] as string
        throw new Error('无')
      }
    })
  }
  catch {}
  return zh
}

/** 获取文件地址后缀 */
export const utilGetSuffix = (str: string): string => {
  if (!str.includes('.'))
    return ''
  const fileExtension = str.substring(str.lastIndexOf('.') + 1)
  return fileExtension
}

/** 对象数组重排成单个属性值数组 */
export const utilListKeyList = <T>(key: keyof T, list: T[]): T[keyof T][] => {
  const newList: T[keyof T][] = []
  list.forEach((i: T) => {
    newList.push(i[key])
  })
  return newList
}

/** 对象清空 */
export function utilCleanDics(obj: any) {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const item = obj[key]
      switch (typeof item) {
        case 'string':
          obj[key] = ''
          break
        case 'number':
          obj[key] = null
          break
        default:
          if (item === null) { /* empty */ }
          else if (typeof item === 'boolean') {
            obj[key] = false
          }
          else if (typeof item === 'undefined') { /* empty */ }
          else if (Array.isArray(item)) {
            obj[key] = []
          }
          else { utilCleanDics(obj[key]) }
          break
      }
    }
  }
}

/** Object 转化 为 FormData */
export const utilFormData = <T extends Record<string, any>>(data: T): FormData => {
  const formData = new FormData()
  for (const item in data)
    data[item] !== undefined && formData.append(item, data[item])

  return formData
}

/** Object 数据为空的清除 */
export const utilObjectFilter = <T extends Record<string, any>>(data: T): T => {
  const parData = { ...data }
  for (const item in parData)
    !parData[item] && delete parData[item]
  return parData
}
