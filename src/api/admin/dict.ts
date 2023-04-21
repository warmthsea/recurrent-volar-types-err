import service from '../request'

export function getDictApi(type: string) {
  return service({
    url: `/admin/dict/type/${type}`,
    method: 'get',
  })
}

export function getDictPageApi(params: Object) {
  return service({
    url: '/admin/dict/page',
    method: 'get',
    params,
  })
}

export function delObjApi(id: string) {
  return service({
    url: `/admin/dict/${id}`,
    method: 'delete',
  })
}

export function addItemObjApi(obj: any) {
  if (!obj.id)
    obj.id = undefined
  return service({
    url: '/admin/dict/',
    method: 'post',
    data: obj,
  })
}

export function putItemObjApi(obj: Object) {
  return service({
    url: '/admin/dict/',
    method: 'put',
    data: obj,
  })
}

export function fetchItemListApi(query: Object) {
  return service({
    url: '/admin/dict/item/page',
    method: 'get',
    params: query,
  })
}

export function delItemObjApi(id: string) {
  return service({
    url: `/admin/dict/item/${id}`,
    method: 'delete',
  })
}

export function addItemItemObjApi(obj: any) {
  if (!obj.id)
    obj.id = undefined
  return service({
    url: '/admin/dict/item',
    method: 'post',
    data: obj,
  })
}

export function putItemItemObjApi(obj: Object) {
  return service({
    url: '/admin/dict/item',
    method: 'put',
    data: obj,
  })
}
