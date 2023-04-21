import type { FormItemRule } from 'element-plus'
import type { Arrayable } from 'element-plus/es/utils'

export const rulesName = (
  tip: string,
  strLong: [number, number] = [2, 7],
  required = true,
): Arrayable<FormItemRule> => {
  return [
    { required, message: `请输入${tip}`, trigger: 'blur' },
    {
      min: strLong[0],
      max: strLong[1],
      message: `${tip}长度为2-7个字符`,
      trigger: 'blur',
    },
  ]
}

export const ruleBlur = (tip: String, required = true) => {
  return [
    { required, message: `请输入${tip}`, trigger: 'blur' },
  ]
}

export const rulesChange = (tip: string, msg = '请选择'): Arrayable<FormItemRule> => {
  return [{ required: true, message: `${msg}${tip}`, trigger: 'change' }]
}

const validatePhone = (
  rule: any,
  value: string,
  callback: (arg0?: Error | undefined) => void,
) => {
  if (!/^1[3-9]\d{9}$/.test(value) && !value.includes('****'))
    callback(Error('请输入正确的手机号'))
  else callback()
}

export const rulesPhone = (required = true): Arrayable<FormItemRule> => {
  return [
    { required, message: '请输入手机号', trigger: 'blur' },
    { validator: validatePhone, trigger: 'blur' },
  ]
}

export const rulesIdCard = (): Arrayable<FormItemRule> => {
  return [
    { required: true, message: '请输入身份证号', trigger: 'blur' },
    {
      required: true,
      message: '请输入正确的身份证号',
      trigger: 'blur',
      pattern:
        /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    },
  ]
}

export const rulesEmail = (required = false): Arrayable<FormItemRule> => {
  return [
    { required, message: '请输入邮箱', trigger: 'blur' },
    {
      type: 'email',
      message: '请输入正确的邮箱',
      trigger: ['blur', 'change'],
    },
  ]
}
