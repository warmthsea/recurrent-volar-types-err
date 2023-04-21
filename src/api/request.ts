import axios from 'axios'
import { useUserStore } from '~/store'
import router from '@/router'

const url = 'http://172.19.11.157:9999'

const service = axios.create({
  baseURL: import.meta.env.MODE === 'development' ? '/api' : `${url}`,
  timeout: 8000,
  headers: {
    Authorization: '',
  },
})

service.interceptors.request.use((config) => {
  const isToken = (config.headers || {}).isToken === false

  const userStore = useUserStore()
  const token = userStore.tokenData?.access_token

  if (token && !isToken)
    config.headers.Authorization = `Bearer ${token}`

  // if (config.method === 'get') {
  //   config.paramsSerializer = function (params) {
  //     return qs.stringify(params, { arrayFormat: 'repeat' })
  //   }
  // }

  return config
})

service.interceptors.response.use(
  (response) => {
    // console.log(response.data)
    if (response.data.code === 1) {
      ElNotification({
        type: 'warning',
        title: '警告',
        message: response.data.msg,
        position: 'bottom-right',
      })

      return Promise.reject(response.data)
    }

    return response.data
  },
  (error) => {
    console.log(error)
    const errorCode = error.response?.status

    error.response && ElNotification({
      type: 'warning',
      title: '警告',
      message: errorCode === 424 ? '登录过期' : error.response?.data?.msg,
      position: 'bottom-right',
    })

    if (errorCode === 424 || error.config.url === '/admin/menu') {
      const userStore = useUserStore()
      userStore.resetUserToken()
      router.push('/login')
    }

    return Promise.reject(error)
  },
)

export default service
