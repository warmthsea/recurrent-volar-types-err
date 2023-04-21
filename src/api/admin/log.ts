import service from '../request'

export function getLogPageApi(params: Object) {
  return service({
    url: '/admin/log/page',
    method: 'get',
    params,
  })
}

export function delObjApi(id: string) {
  return service({
    url: `/admin/log/${id}`,
    method: 'delete',
  })
}

export function delObjsApi(ids: any[]) {
  return service({
    url: '/admin/log/',
    method: 'delete',
    data: ids,
  })
}
