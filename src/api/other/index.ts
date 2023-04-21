import service from '../request'
import type { PagemsStateType, ParamsDyFormType } from '~/pages/other/params/type'

export function getListApi(params: PagemsStateType) {
  return service({
    url: '/zhqx-project-manage-biz/other/business-params',
    method: 'get',
    params,
  })
}

export function addItemApi(data: ParamsDyFormType) {
  if (!data.oid)
    data.oid = undefined
  return service({
    url: '/zhqx-project-manage-biz/other/business-params',
    method: 'post',
    data,
  })
}

export function delItemApi(oid: string) {
  return service({
    url: `/zhqx-project-manage-biz/other/business-params/${oid}`,
    method: 'delete',
  })
}

export function putItemApi(obj: ParamsDyFormType) {
  return service({
    url: `/zhqx-project-manage-biz/other/business-params/${obj.oid}`,
    method: 'put',
    data: obj,
  })
}

// 根据部门获取用户
export function getUserlistByDeptApi(deptIds: string) {
  return service({
    url: '/admin/user/listByDept',
    method: 'get',
    params: {
      deptIds,
    },
  })
}
