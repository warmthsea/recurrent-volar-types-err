import type { FormItemRule } from 'element-plus'
import type { Arrayable } from 'element-plus/es/utils'
import type { DictItemType } from './setting'

export interface DefaultPageParamsItemType {
  /** 列名 / 表单label */
  readonly label: string
  /** 键值  动态dict需要slot */
  readonly prop: string

  /** slot */
  slot?: boolean

  /** 是否在 edit/add form显示 */
  form?: boolean
  /** 是否在 search form 显示 */
  search?: boolean

  onlySearch?: boolean
  onlyForm?: boolean

  formProp?: string
  formSolt?: boolean

  /**
   * @name 表单控件类型
   * @param input default 默认
   * @param password
   * @param radio dict 必传
   * @param select optionDict 必传
   */
  formType?: 'password' | 'input' | 'radio' | 'select' | 'textarea'
  dict?: Pick<DictItemType, 'label' | 'value'>[]
  /** name 对应 组件 bind 绑定 dict */
  optionDict?: 'optionDict1' | 'optionDict2' | 'optionDict3'
  disabled?: boolean
  maxlength?: number
  /** 尾随控件后面 */
  formSlotTip?: boolean
  rules?: Arrayable<FormItemRule>

  // column setting
  align?: 'left' | 'center'
  showOverflowTooltip?: boolean
  width?: string | number
  minWidth?: string | number
}
