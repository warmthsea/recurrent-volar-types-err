import type { UploadRequestOptions } from 'element-plus'
import service from '../request'
import type { ContactStateType, TableItemType } from '~/pages/contacts/type'
import type { ContactListStateType } from '~/pages/contacts/list/type'

export function getPagesListApi(data: ContactListStateType) {
  return service({
    url: '/zhqx-project-manage-biz/document/page',
    method: 'post',
    data,
  })
}

export function downLoadPagesApi(list: string[]) {
  return service({
    url: '/zhqx-project-manage-biz/document/download',
    method: 'post',
    responseType: 'blob',
    data: list,
  })
}

export function getListApi(data: ContactStateType) {
  return service({
    url: '/zhqx-project-manage-biz/contacts/page',
    method: 'post',
    data,
  })
}

export function delItemApi(id: string) {
  return service({
    url: '/zhqx-project-manage-biz/contacts',
    method: 'delete',
    data: [id],
  })
}

export function delItemListApi(ids: string[]) {
  return service({
    url: '/zhqx-project-manage-biz/contacts',
    method: 'delete',
    data: ids,
  })
}

export function addItemApi(obj: ContactStateType & { oid?: TableItemType['oid'] }) {
  if (!obj.oid)
    obj.oid = undefined
  return service({
    url: '/zhqx-project-manage-biz/contacts',
    method: 'post',
    data: obj,
  })
}

export function putItemApi(obj: ContactStateType & { oid: TableItemType['oid'] }) {
  return service({
    url: `/zhqx-project-manage-biz/contacts/${obj.oid}`,
    method: 'put',
    data: obj,
  })
}

export function downLoadItemApi(obj: ContactStateType) {
  return service({
    url: '/zhqx-project-manage-biz/contacts/export',
    method: 'post',
    responseType: 'blob',
    data: obj,
  })
}

export function uploadItemApi(options: UploadRequestOptions) {
  const file = new FormData()
  file.append('file', options.file)
  return service.post('/zhqx-project-manage-biz/contacts/import', file)
}
