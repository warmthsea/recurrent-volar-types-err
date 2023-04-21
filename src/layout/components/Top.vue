<script lang="ts" setup>
import { ArrowDown, Bell, Expand, Fold, Moon, RefreshRight, Sunny } from '@element-plus/icons-vue'
import { useSettingEventStore, useSettingStore, useUserStore } from '~/store'
import { layoutConst } from '@/const'

const router = useRouter()
const userStore = useUserStore()
const settingStore = useSettingStore()
const settingEventStore = useSettingEventStore()

const { logOut } = useUser(userStore)

const noticeNum = ref(0)
const { seeImgRef, seeImg } = useSeeImg()
</script>

<template>
  <div
    class="bg-white dark:bg-stone-800 dark:text-white flex items-center justify-between pr-5 shadow-sm duration-200"
    :style="{
      height: `${layoutConst.topHeight}px`,
      paddingLeft: `${settingStore.isCollapse ? layoutConst.sideBarCollapseWidth : layoutConst.sideBarWidth}px`,
    }"
  >
    <div class="pl-4 h-full flex items-center">
      <div class="items-box mr-2" @click="settingStore.isCollapse = !settingStore.isCollapse">
        <el-icon v-show="settingStore.isCollapse">
          <Expand />
        </el-icon>
        <el-icon v-show="!settingStore.isCollapse">
          <Fold />
        </el-icon>
      </div>
      <Bread />
    </div>
    <div class="header-r-box flex items-center h-full">
      <div class="item-box" @click="settingEventStore.startRefresh()">
        <el-icon
          class="animate-spin"
          :style="{ 'animation-play-state': settingEventStore.isRefresh }"
        >
          <RefreshRight />
        </el-icon>
      </div>
      <div class="item-box select-none mr-1" @click="noticeNum++">
        <BadgeBtn :is-slot="true" :value="noticeNum" class="mt-1 mx-[3px]">
          <el-icon>
            <Bell />
          </el-icon>
        </BadgeBtn>
      </div>
      <div>
        <div class="w-7 h-7 bg-gray-300 overflow-hidden rounded-full mr-3 flex items-center justify-center">
          <img
            :src="utilPreviewFile(userStore.userInfoData?.sysUser.avatar)"
            @click="seeImg(utilPreviewFile(userStore.userInfoData?.sysUser.avatar))"
          >
        </div>
        <el-dropdown>
          <span class="dark:text-white">
            {{ userStore.userInfoData?.sysUser.username || '测试数据' }}
            <el-icon class="el-icon--right">
              <ArrowDown />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item divided @click="toggleDark()">
                <el-switch
                  :model-value="isDark"
                  inline-prompt
                  width="50"
                  class="-my-1"
                  :active-icon="Moon"
                  :inactive-icon="Sunny"
                />
              </el-dropdown-item>
              <el-dropdown-item divided @click="$router.push('/')">
                首页
              </el-dropdown-item>
              <el-dropdown-item divided @click="$router.push('/admin/info')">
                个人信息
              </el-dropdown-item>
              <el-dropdown-item divided @click="logOut(router)">
                退出系统
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <SeeImg ref="seeImgRef" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.items-box {
    @apply select-none h-full px-4 flex items-center cursor-pointer duration-150 hover:bg-gray-100 dark:hover:bg-stone-700;
  }
.header-r-box {
  & > div,
  .item-box {
    @extend .items-box;
  }
}
</style>
