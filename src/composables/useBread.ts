import { useSettingEventStore } from '~/store'

export interface BreadItemType {
  name: string
  path?: string
}

export const useBread = (list: BreadItemType[] | string[]) => {
  const settingEventStore = useSettingEventStore()
  settingEventStore.breadList = list.map((item) => {
    if (typeof item === 'string')
      return { name: item }
    return item
  })
  useTitle(settingEventStore.breadList.map(i => i.name).reverse().join(' | '))
}
