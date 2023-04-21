import service from '../request'

export function getMenuApi(id: string) {
  return service({
    url: '/admin/menu',
    params: { parentId: id },
    method: 'get',
  })
}

export function getTopMenuApi() {
  return service({
    url: '/admin/menu',
    params: { type: 'top' },
    method: 'get',
  })
}

export function fetchMenuTreeApi(params?: Object) {
  return service({
    url: '/admin/menu/tree',
    method: 'get',
    params,
  })
}

export function addObjApi(obj: Object) {
  return service({
    url: '/admin/menu',
    method: 'post',
    data: obj,
  })
}

export function getObjApi(id: string) {
  return service({
    url: `/admin/menu/${id}`,
    method: 'get',
  })
}

export function delObjApi(id: string) {
  return service({
    url: `/admin/menu/${id}`,
    method: 'delete',
  })
}

export function putObjApi(obj: string) {
  return service({
    url: '/admin/menu',
    method: 'put',
    data: obj,
  })
}
