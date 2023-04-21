import type { iconNames } from '~/components/dynamics/DyIcon'

export interface MenuType {
  id: string
  icon: typeof iconNames[number]
  keepAlive: '0' | '1'
  label: string
  MenuType: string
  parentId: string
  path: string
  name: string
  permission: string | null
  sortOrder: number
  visible: string
  weight: string
  children?: MenuType[]
}
