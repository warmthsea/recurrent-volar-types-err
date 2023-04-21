import service from '../request'

export function getMenuApi(id?: any) {
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

export function fetchMenuTreeApi(params: any) {
  return service({
    url: '/admin/menu/tree',
    method: 'get',
    params,
  })
}

export function addObjApi(obj: any) {
  return service({
    url: '/admin/menu',
    method: 'post',
    data: obj,
  })
}

export function getObjApi(id: any) {
  return service({
    url: `/admin/menu/${id}`,
    method: 'get',
  })
}

export function delObjApi(id: any) {
  return service({
    url: `/admin/menu/${id}`,
    method: 'delete',
  })
}

export function putObjApi(obj: any) {
  return service({
    url: '/admin/menu',
    method: 'put',
    data: obj,
  })
}
