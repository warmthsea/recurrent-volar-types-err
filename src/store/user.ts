import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import type { UserInfoDataType, UserType } from '~/types'

export const useUserStore = defineStore('user', {
  state: () => {
    const tokenData = ref<UserType>()
    const setUserToken = (data: UserType) => {
      tokenData.value = data || undefined
      Cookies.set('token', tokenData.value?.access_token || '')
      const obj = {
        content: tokenData.value?.access_token || '',
      }
      sessionStorage.setItem('zhqx-access_token', JSON.stringify(obj))
    }
    const resetUserToken = () => {
      tokenData.value = undefined
      Cookies.remove('token')
      sessionStorage.clear()
    }

    const userInfoData = ref<UserInfoDataType>()
    const setUserInfoData = (data: UserInfoDataType) =>
      (userInfoData.value = data || undefined)
    const resetUserInfoData = () => (userInfoData.value = undefined)

    return {
      tokenData,
      setUserToken,
      resetUserToken,
      userInfoData,
      setUserInfoData,
      resetUserInfoData,
    }
  },
  persist: true,
})

export type UseUserStoreType = ReturnType<typeof useUserStore>
