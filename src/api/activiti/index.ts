import service from '../request'

// 获取模型管理列表
export function fetchListApi(params: any) {
  return service({
    url: '/act/model',
    method: 'get',
    params,
  })
}

export function delObjApi(id: String) {
  return service({
    url: `/act/model/${id}`,
    method: 'delete',
  })
}

export function deployApi(id: String) {
  return service({
    url: `/act/model/deploy/${id}`,
    method: 'post',
  })
}

export function addObjApi(data: any) {
  return service({
    url: '/act/model/insert',
    method: 'post',
    data,
  })
}
