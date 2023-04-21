export interface UserType {
  access_token: string
  refresh_token: string
  username: string
}

export interface UserDataType {
  avatar: string
  createBy: string
  createTime: string
  delFlag: string
  deptId: string
  deptName: string | null
  email: string
  giteeLogin: string
  lockFlag: string
  miniOpenid: string
  name: string
  oscId: string
  phone: string
  password: string
  tenantId: string
  nickname: string
  updateBy: string
  updateTime: string
  userId: string
  username: string
  wxOpenid: string
}

export interface UserInfoDataType {
  readonly permissions: string[]
  readonly roles: string[]
  sysUser: UserDataType
}
