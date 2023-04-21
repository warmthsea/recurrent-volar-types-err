import service from '../request'

export const uploadUrl = '/api/admin/sys-file/upload'

// 获取储备库列表
export function getListApi(data: any) {
  return service({
    url: '/zhqx-project-manage-biz/requirement-repository/page',
    method: 'post',
    data,
  })
}

// 新增储备库
export function addApi(data: any) {
  return service({
    url: '/zhqx-project-manage-biz/requirement-repository',
    method: 'post',
    data,
  })
}

// 查询详情
export function infoApi(oid: string) {
  return service({
    url: `/zhqx-project-manage-biz/requirement-repository/${oid}`,
    method: 'get',
  })
}

// 修改储备库
export function editApi(oid: string, data: any) {
  return service({
    url: `/zhqx-project-manage-biz/requirement-repository/${oid}`,
    method: 'put',
    data,
  })
}

// 删除储备库
export function deleteApi(data: Array<string>) {
  return service({
    url: '/zhqx-project-manage-biz/requirement-repository/batch',
    method: 'delete',
    data,
  })
}

// 获取清单信息及详情
export function getManifestDetailsApi(params: Record<string, any>) {
  return service({
    url: '/zhqx-project-manage-biz/manifest/getManifestDetails',
    method: 'get',
    params,
  })
}
