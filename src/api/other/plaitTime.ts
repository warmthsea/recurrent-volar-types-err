import service from '../request'
import type { PlaitDyFormType, PlaitStateType } from '~/pages/other/plaitTime/type'

export function getListApi(data: PlaitStateType) {
  return service({
    url: '/zhqx-project-manage-biz/serial/page',
    method: 'post',
    data,
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
