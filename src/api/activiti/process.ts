import service from '../request'

interface FetchList {
  descs: String
  current: Number
  size: Number
  category?: String
}

export function fetchListApi(params: FetchList) {
  return service({
    url: '/act/process',
    method: 'get',
    params,
  })
}

export function delObjApi(id: String) {
  return service({
    url: `/act/process/${id}`,
    method: 'delete',
  })
}

export function statusApi(id: String, type: String) {
  return service({
    url: `/act/process/status/${id}/${type}`,
    method: 'put',
  })
}
