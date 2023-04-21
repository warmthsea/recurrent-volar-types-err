export interface DictItemType {
  createBy: string
  createTime: string
  delFlag: string
  description: string
  dictId: string
  dictType: string
  id: string
  label: string
  remarks: string
  sortOrder: string
  updateBy: string
  updateTime: string
  /** tip：使用其它类型传递可能被接口转换成 string 类型 */
  value: string
}
