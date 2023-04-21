<script lang="ts" setup>
</script>

<template>
  <div class="containers bg-white dark:bg-stone-800 rounded">
    <div v-if="$slots.header" class="py-4 px-8 border-b mb-5">
      <slot name="header" />
    </div>
    <div class="px-8 py-7 pb-6" :class="{ 'pt-0': $slots.header }">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.containers {
  width: calc(100% - 30px);
  margin: 15px auto;
  min-width: 300px;
}
</style>
