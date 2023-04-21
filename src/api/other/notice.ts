import service from '../request'
import type { PlaitDyFormType } from '~/pages/other/plaitTime/type'
import type { NoticeStateType } from '~/pages/other/notice/type'

export function getListApi(params: NoticeStateType) {
  return service({
    url: '/admin/syssms/page',
    method: 'get',
    params: utilObjectFilter(params),
  })
}

export function addItemApi(data: PlaitDyFormType) {
  if (!data.oid)
    data.oid = undefined
  return service({
    url: '/zhqx-project-manage-biz/serial',
    method: 'post',
    data,
  })
}

export function delItemApi(oid: string) {
  return service({
    url: `/zhqx-project-manage-biz/serial/${oid}`,
    method: 'delete',
  })
}

export function putItemApi(obj: PlaitDyFormType) {
  return service({
    url: `/zhqx-project-manage-biz/serial/${obj.oid}`,
    method: 'put',
    data: obj,
  })
}
