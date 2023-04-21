<script lang="ts" setup>
import type { MenuType } from '~/types'

defineProps<{
  list: MenuType[]
  changeIndex: string
  sub?: boolean
}>()
</script>

<template>
  <template v-for="item in list" :key="item.path">
    <el-menu-item
      v-if="!item.children"
      v-show="item.visible === '1'"
      :index="item.path"
    >
      <DyIcon v-if="!sub" :name="item.icon" />

      <template #title>
        {{ item.label }}
      </template>
      <div
        v-show="changeIndex === item.path"
        class="absolute h-[var(--el-menu-item-height)] w-[3px] duration-300 bg-main left-0 top-0"
        :class="{ 'h-[var(--el-menu-sub-item-height)]': sub }"
      />
    </el-menu-item>

    <el-sub-menu v-else v-show="item.visible === '1'" :index="item.path">
      <template #title>
        <DyIcon :name="item.icon" />
        <span> {{ item.label }}</span>
      </template>
      <SidebarItem
        sub
        :list="item.children || []"
        :change-index="changeIndex"
      />
    </el-sub-menu>
  </template>
</template>

<style lang="scss" scoped></style>
