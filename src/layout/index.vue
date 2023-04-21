<script lang="ts" setup>
import Sidebar from './components/Sidebar.vue'
import Top from './components/Top.vue'
import { useSettingEventStore, useSettingStore } from '~/store'
import { layoutConst } from '@/const'

const route = useRoute()
const settingStore = useSettingStore()
const settingEventStore = useSettingEventStore()

const mainRef = ref<HTMLElement>()

watch(
  () => route.path,
  () => {
    if (mainRef.value)
      mainRef.value.scrollTop = 0
  },
)
</script>

<template>
  <div class="bg-[#f0f2f5] dark:bg-stone-900">
    <Sidebar />
    <div>
      <Top />
      <div
        ref="mainRef"
        class="main-box overflow-x-hidden"
        :style="{
          width: `calc(100% - ${settingStore.isCollapse ? layoutConst.sideBarCollapseWidth : layoutConst.sideBarWidth}px)`,
          marginLeft: `${settingStore.isCollapse ? layoutConst.sideBarCollapseWidth : layoutConst.sideBarWidth}px`,
          height: `calc(100vh - ${layoutConst.topHeight}px)`,
        }"
      >
        <router-view v-if="settingEventStore.isRefresh === 'paused'">
          <template #default="{ Component }">
            <transition name="fade-slide" mode="out-in" appear>
              <component :is="Component" :key="route.fullPath" />
            </transition>
          </template>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-box {
  overflow: overlay;
  overflow-x: hidden;

  transition: width 0.2s, margin-left 0.2s;
}
</style>
