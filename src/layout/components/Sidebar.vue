<script lang="ts" setup>
import SidebarItem from './SidebarItem.vue'
import { layoutConst } from '@/const'
import { useMenuStore, useSettingStore } from '~/store'

const route = useRoute()
const menuStore = useMenuStore()
const settingStore = useSettingStore()

const sideBarCollapseWidth = `${layoutConst.sideBarCollapseWidth}px`
const isClose = ref(false)

const changeIndex = computed(() => {
  return route.meta?.fatherPath as string || route.path || settingStore.changeIndex
})
</script>

<template>
  <div
    class="sidebar shadow-sm fixed left-0 top-0 h-full bg-white dark:bg-stone-800 duration-200"
    :style="{ width: `${settingStore.isCollapse ? layoutConst.sideBarCollapseWidth : layoutConst.sideBarWidth}px` }"
  >
    <div
      class="flex text-center items-center justify-center bg-[var(--main-color)] text-white"
      :style="{ height: `${layoutConst.topHeight}px` }"
    >
      <span class="duration-200 leading-5" :class="{ 'scale-75': settingStore.isCollapse }" />
    </div>
    <div class="menu-box pt-1" :class="{ 'close-sub': isClose, 'dark-menu': isDark }">
      <el-scrollbar height="100%">
        <el-menu
          :default-active="changeIndex"
          :collapse="settingStore.isCollapse"
          :collapse-transition="false"
          unique-opened
          class="w-full"
          router
          @close="isClose = true"
          @open="isClose = false"
        >
          <el-menu-item index="/index">
            概览
            <div v-show="changeIndex === '/index'" class="absolute h-[var(--el-menu-item-height)] w-[3px] duration-300 bg-main left-0 top-0" />
          </el-menu-item>
          <SidebarItem :list="menuStore.menuList" :change-index="changeIndex" />
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-menu) {
  border: none;
  .el-menu-item,
  .el-sub-menu {
    width: 100%;
  }
  .el-menu-item.is-active {
    background-color: rgba($color: #e9f2f2, $alpha: 0.5);
    &:hover {
      background-color: rgba($color: #e9f2f2, $alpha: 1);
    }
  }
}

:deep(.el-menu--collapse) {
  .el-menu-item,
  .el-sub-menu {
    width: v-bind('sideBarCollapseWidth');
  }
}

.close-sub {
  :deep(.el-menu) {
    .el-sub-menu.is-active .el-sub-menu__title {
      background-color: rgba($color: #e9f2f2, $alpha: 1);
    }
  }
}

.sidebar {
  // box-shadow: 2px 0 6px rgb(0 21 41 / 15%);
  .menu-box {
    height: calc(100% - 65px);
  }
}

.dark-menu {
  :deep(.el-menu) {
    .el-menu-item.is-active {
      background-color: rgb(68 64 60 / var(--tw-bg-opacity)) !important;
    }
  }
}

.close-sub.dark-menu {
    :deep(.el-menu) {
      .el-sub-menu.is-active .el-sub-menu__title {
        background-color: rgb(68 64 60 / var(--tw-bg-opacity)) !important;
      }
    }
  }
</style>
