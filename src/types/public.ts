export type PagesExtends<T> = {
  size: number
  current: number
} & T

export interface PagesDefault<T, P> {
  tableData: P[]
  params: PagesExtends<T>
  total: number
  loading?: boolean
}
