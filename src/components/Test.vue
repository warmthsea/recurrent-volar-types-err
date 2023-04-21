<script lang="ts" setup>
import { useMenuStore, useTestStore, useUserStore } from '~/store'

const userStore = useUserStore()
const testStore = useTestStore()
const menuStore = useMenuStore()

const test = () => {
  utilThrottle(() => {
    testStore.testNum++
  }, 1000)
}
</script>

<template>
  <Teleport to="body">
    <div class="border bg-white dark:bg-stone-700 dark:border-stone-700 rounded-md p-4 inline-block m-4 fixed bottom-0 right-0">
      <p>test pinia: {{ testStore.testNum }}</p>
      <button
        class="btn dark:dark-btn" @click="test()"
      >
        test test data
      </button>
      <p class="mt-5">
        piniaPluginPersistedstate
      </p>
      <p>
        token: {{ userStore.tokenData?.access_token }}
      </p>
      <button class="btn dark:dark-btn" @click="userStore.resetUserToken()">
        test resetUserToken
      </button>
      <button class="btn dark:dark-btn ml-2 mt-10" @click="$router.push('/login')">
        goBackLogin
      </button>
      <br>

      <button class="btn dark:dark-btn mt-10" @click="menuStore.refreshMenu()">
        refresh get menuList
      </button>

      <button class="btn dark:dark-btn ml-10" @click="$router.push('/index?t=1')">
        test go
      </button>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
</style>
