import service from '../request'
import type { InventoryDetailStateType, InventoryDyFormType, InventoryStateType, TableItemType } from '~/pages/inventory/type'

export function getListApi(params: InventoryStateType) {
  return service({
    url: '/zhqx-project-manage-biz/manifest/page',
    method: 'get',
    params,
  })
}

export function delItemApi(id: string) {
  return service({
    url: `/zhqx-project-manage-biz/manifest/${id}`,
    method: 'delete',
  })
}

export function addItemApi(data: InventoryDyFormType) {
  if (!data.id)
    data.id = undefined
  return service({
    url: '/zhqx-project-manage-biz/manifest',
    method: 'post',
    data: utilFormData(data),
  })
}

export function editItemApi(data: InventoryDyFormType) {
  return service({
    url: '/zhqx-project-manage-biz/manifest',
    method: 'put',
    data: utilFormData(data),
  })
}

export function editItemStatusApi(status: '0' | '1', id: TableItemType['id'], type: TableItemType['type']) {
  return service({
    url: '/zhqx-project-manage-biz/manifest',
    method: 'put',
    data: utilFormData({
      status,
      id,
      type,
    }),
  })
}

export function downLoadItemFileApi(manifestId: TableItemType['id']) {
  return service({
    url: '/zhqx-project-manage-biz/manifestDetails/export',
    method: 'get',
    responseType: 'blob',
    params: { manifestId },
  })
}

export function getDetailListApi(params: InventoryDetailStateType) {
  return service({
    url: '/zhqx-project-manage-biz/manifestDetails/page',
    method: 'get',
    params,
  })
}
