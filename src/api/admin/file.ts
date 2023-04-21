import service from '../request'

export function getFilePageApi(params: Object) {
  return service({
    url: '/admin/sys-file/page',
    method: 'get',
    params,
  })
}

export function delFileItemApi(id: string) {
  return service({
    url: `/admin/sys-file/${id}`,
    method: 'delete',
  })
}
