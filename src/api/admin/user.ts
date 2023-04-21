import service from '../request'

export function fetchListApi(query: Object) {
  return service({
    url: '/admin/user/page',
    method: 'get',
    params: query,
  })
}

export function addObjApi(obj: Object) {
  const dyForm = { ...obj, post: [] }

  return service({
    url: '/admin/user',
    method: 'post',
    data: dyForm,
  })
}

export function getObjApi(id: string) {
  return service({
    url: `/admin/user/${id}`,
    method: 'get',
  })
}

export function delObjApi(id: string) {
  return service({
    url: `/admin/user/${id}`,
    method: 'delete',
  })
}

export function putObjApi(form: any) {
  const dyForm = { ...form, post: [] }
  if (dyForm.phone && dyForm.phone.includes('*'))
    dyForm.phone = undefined as unknown as string
  if (dyForm.password && dyForm.password.includes('******'))
    dyForm.password = undefined as unknown as string

  return service({
    url: '/admin/user',
    method: 'put',
    data: dyForm,
  })
}

export function getDetailsApi(obj: string) {
  return service({
    url: `/admin/user/details/${obj}`,
    method: 'get',
  })
}

export function getDetailsByPhoneApi(obj: string) {
  return service({
    url: `/admin/user/detailsByPhone/${obj}`,
    method: 'get',
  })
}

// 更改个人信息
export function editInfoApi(obj: Object) {
  return service({
    url: '/admin/user/edit',
    method: 'put',
    data: obj,
  })
}

// 添加我的意见
export function updateReviewCommentsApi(data: any[]) {
  return service({
    url: '/admin/user/updateReviewComments',
    method: 'post',
    data,
  })
}

// 获取我的意见
export function reviewCommentsApi() {
  return service({
    url: '/admin/user/reviewComments',
    method: 'get',
  })
}
