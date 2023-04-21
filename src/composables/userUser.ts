import type { Router } from 'vue-router'
import { getUserInfoApi } from '~/api/user'
import type { UseUserStoreType } from '~/store'
import type { UserInfoDataType } from '~/types'

export const useUser = (userStore: UseUserStoreType) => {
  const getUserInfo = (): Promise<UserInfoDataType> => {
    return new Promise((resolve) => {
      getUserInfoApi().then((res) => {
        const resData = res.data as UserInfoDataType
        userStore.setUserInfoData(resData)
        resolve(resData)
      })
    })
  }

  const logOut = (router?: Router) => {
    userStore.resetUserToken()
    userStore.resetUserInfoData()
    router && router.push('/login')
  }

  return { getUserInfo, logOut }
}
