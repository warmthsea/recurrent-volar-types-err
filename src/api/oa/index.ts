import service from '../request'

// 新增业务流程模型
export function bizBillApi(data: any) {
  return service({
    url: '/act/biz-bill',
    method: 'post',
    data,
  })
}

// 提交流程
export function bizBillSubmitApi(data: any) {
  return service({
    url: '/act/biz-bill/submit',
    method: 'post',
    data,
  })
}

// 通过
export function taskAgreeApi(data: any) {
  return service({
    url: '/act/task/agree',
    method: 'post',
    data,
  })
}

// 驳回
export function taskOverruleApi(data: any) {
  return service({
    url: '/act/task/overrule',
    method: 'post',
    data,
  })
}

// 转审
export function taskReferralApi(data: any) {
  return service({
    url: '/act/task/referral',
    method: 'post',
    data,
  })
}

// 撤回
export function taskWithdrawApi(data: any) {
  return service({
    url: '/act/task/withdraw',
    method: 'post',
    data,
  })
}

// 获取待办列表
export function taskTodoApi(params: any) {
  return service({
    url: '/act/task/todo',
    method: 'get',
    params,
  })
}

// 获取已经完成列表
export function taskGetFinishTaskApi(params: any) {
  return service({
    url: '/act/task/getFinishTask',
    method: 'get',
    params,
  })
}

// 获取已处理列表
export function taskGetDoneTaskApi(params: any) {
  return service({
    url: '/act/task/getDoneTask',
    method: 'get',
    params,
  })
}

// 查根据流程实例id获取任务信息
export function taskGetTaskByInstanceId(instanceId: string) {
  return service({
    url: '/act/task/getTaskByInstanceId',
    method: 'get',
    params: {
      instanceId,
    },
  })
}
