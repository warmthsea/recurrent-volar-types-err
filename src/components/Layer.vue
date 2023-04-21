<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    show: boolean
    title?: string
    width?: string
    btn?: boolean
    draggable?: boolean
  }>(),
  {
    title: '弹框',
    width: '500px',
    btn: false,
    draggable: false,
  },
)

const emit = defineEmits(['update:show', 'confirm'])
const _show = useVModel(props, 'show', emit)

const confirm = () => {
  emit('confirm')
}
const close = () => {
  _show.value = false
}
</script>

<template>
  <div>
    <el-dialog
      v-model="_show"
      :title="props.title"
      :width="props.width"
      :close-on-click-modal="false"
      :draggable="draggable"
      class="!rounded"
    >
      <slot />
      <template v-if="props.btn" #footer>
        <div>
          <el-button @click="close()">
            取消
          </el-button>
          <el-button type="primary" @click="confirm()">
            确认
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
</style>
