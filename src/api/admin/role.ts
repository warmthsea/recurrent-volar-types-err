import service from '../request'

export function roleListApi() {
  return service({
    url: '/admin/role/roleList',
    method: 'get',
  })
}

export function fetchListApi(query: Object) {
  return service({
    url: '/admin/role/page',
    method: 'get',
    params: query,
  })
}

export function deptRoleListApi() {
  return service({
    url: '/admin/role/list',
    method: 'get',
  })
}

export function getObjApi(id: string) {
  return service({
    url: `/admin/role/${id}`,
    method: 'get',
  })
}

export function getObjByCodeApi(code: string) {
  return service({
    url: `/admin/role/code/${code}`,
    method: 'get',
  })
}

export function addObjApi(obj: Object) {
  return service({
    url: '/admin/role',
    method: 'post',
    data: obj,
  })
}

export function putObjApi(obj: Object) {
  return service({
    url: '/admin/role',
    method: 'put',
    data: obj,
  })
}

export function delObjApi(id: string) {
  return service({
    url: `/admin/role/${id}`,
    method: 'delete',
  })
}

export function permissionUpdApi(roleId: string, menuIds: string) {
  return service({
    url: '/admin/role/menu',
    method: 'put',
    data: {
      roleId,
      menuIds,
    },
  })
}

export function fetchRoleTreeApi(roleId: string) {
  return service({
    url: `/admin/menu/tree/${roleId}`,
    method: 'get',
  })
}
