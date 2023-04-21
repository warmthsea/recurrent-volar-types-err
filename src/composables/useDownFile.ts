import type { AxiosResponse } from 'axios'
import service from '~/api/request'

/**
 *
 * @param url 目标下载接口/地址 tip: 如果是接口,responseType: blob
 * @param query 查询参数
 * @param fileName 文件名称
 * @returns {*}
 */
export const useDownBlobFile = async <T>(url: string | Promise<AxiosResponse<any, any>>, fileName: string, query?: T): Promise<any> => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise<void>(async (resolve) => {
    let response
    if (typeof url === 'string') {
      response = await service({
        url,
        method: 'get',
        responseType: 'blob',
        params: query || {},
      })
    }
    else {
      response = await url
    }

    // 处理返回的文件流
    const blob = response as unknown as Blob
    if (blob && blob.size === 0)
      return

    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    window.setTimeout(() => {
      window.URL.revokeObjectURL(blob as unknown as string)
      document.body.removeChild(link)
    }, 0)

    resolve()
  })
}
