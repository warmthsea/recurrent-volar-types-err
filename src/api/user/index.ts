import service from '../request'

export function getUserInfoApi() {
  return service.get('/admin/user/info')
}

export function editUserInfoApi(obj: any) {
  return service({
    url: '/admin/user/edit',
    method: 'put',
    data: obj,
  })
}
