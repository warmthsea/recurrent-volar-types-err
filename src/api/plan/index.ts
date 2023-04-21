import service from '../request'
import type { PlanStateType } from '~/pages/plan/type'

export function getListApi(data: PlanStateType) {
  return service({
    url: '/zhqx-project-manage-biz/plan-manage/page',
    method: 'post',
    data,
  })
}

export function delItemApi(id: string) {
  return service({
    url: '/zhqx-project-manage-biz/plan-manage/batch',
    method: 'delete',
    data: [id],
  })
}

export function delItemListApi(ids: string[]) {
  return service({
    url: '/zhqx-project-manage-biz/plan-manage/batch',
    method: 'delete',
    data: ids,
  })
}
