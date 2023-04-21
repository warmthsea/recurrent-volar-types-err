import service from '../request'

export function fetchTreeApi(query?: any) {
  return service({
    url: '/admin/dept/tree',
    method: 'get',
    params: query,
  })
}

export function addObjApi(obj: any) {
  return service({
    url: '/admin/dept/',
    method: 'post',
    data: obj,
  })
}

export function getObjApi(id: string) {
  return service({
    url: `/admin/dept/${id}`,
    method: 'get',
  })
}

export function delObjApi(id: string) {
  return service({
    url: `/admin/dept/${id}`,
    method: 'delete',
  })
}

export function putObjApi(obj: any) {
  return service({
    url: '/admin/dept/',
    method: 'put',
    data: obj,
  })
}

export function syncUserApi() {
  return service({
    url: '/admin/connect/sync/ding/user',
    method: 'post',
  })
}

export function syncDeptApi() {
  return service({
    url: '/admin/connect/sync/ding/dept',
    method: 'post',
  })
}

export function syncCpUserApi() {
  return service({
    url: '/admin/connect/sync/cp/user',
    method: 'post',
  })
}

export function syncCpDeptApi() {
  return service({
    url: '/admin/connect/sync/cp/dept',
    method: 'post',
  })
}
