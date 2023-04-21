<script lang="ts" setup>
withDefaults(
  defineProps<{
    title?: string
    linkName?: string
    path?: string
    center?: boolean
    col?: boolean
  }>(),
  {
    title: 'card',
    linkName: '更多',
    center: false,
    col: false,
  },
)
</script>

<template>
  <div class="bg-white dark:bg-stone-800 rounded select-none">
    <div class="h-12 px-4 flex items-center border-b dark:border-stone-600">
      {{ title }}

      <span v-if="path" class="ml-auto go-link opacity-75 scale-95" @click="$router.push(path as string)">{{ linkName }}</span>
    </div>
    <div style="height: calc(100% - 3rem);" class="p-8" :class="{ 'flex items-center justify-center': center, 'flex-col': col }">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
