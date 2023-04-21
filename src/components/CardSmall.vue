<script lang="ts" setup>
withDefaults(
  defineProps<{
    title?: string
    val?: string
    type?: keyof typeof Color
  }>(),
  {
    type: 'Info',
  },
)

enum Color {
  Info = 'var(--text-main-color)',
  Cyan = 'rgb(133,210,217)',
  Blue = '#60A5FA',
  Purple = '#A78BFA',
  Yellow = '#FCD34D',
}
</script>

<template>
  <div
    class="shadow-md rounded-md overflow-hidden w-44 h-32 flex flex-col duration-150 hover:scale-105"
  >
    <div
      class="flex-1 flex items-center justify-center text-white dark:bg-stone-900"
      :style="{ background: Color[type] }"
    >
      {{ title }}
    </div>
    <div
      class="flex-1 flex items-center justify-center dark:bg-stone-700"
      :style="{ color: Color[type] }"
    >
      <slot />

      <span v-if="val">{{ val }}</span>
    </div>
  </div>
</template>
