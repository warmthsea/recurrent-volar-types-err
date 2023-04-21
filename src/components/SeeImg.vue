<script lang="ts" setup>
defineProps<{
  url?: string
  zoomRate?: number
}>()

const imageUrl = ref('')
const see = async (_url: string) => {
  imageUrl.value = _url
  await nextTick()
  document.getElementById('el-image-id')?.click()
}

defineExpose({ see })
</script>

<template>
  <div class="select-none" :class="{ 'h-0 w-0 p-0 m-0': !url }">
    <el-image
      v-if="url || imageUrl"
      id="el-image-id"
      :class="{ 'h-0 w-0': !url, 'h-full w-full': url }"
      :src="url || imageUrl"
      :zoom-rate="zoomRate || 1"
      :preview-src-list="[url || imageUrl]"
      fit="cover"
    />
  </div>
</template>
