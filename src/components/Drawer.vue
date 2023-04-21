<script lang="ts" setup>
import { useVModel } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    show: boolean
    title?: string
    width?: string
    direction?: 'ltr' | 'rtl'
    closeOnClickModal?: boolean
    appendToBody?: boolean
    minWidth?: string
    /** 是否展示 footer slot */
    footer?: boolean
    /** 是否展示 header slot */
    header?: boolean
    /** 是否展示 footer slot 的默认按钮 */
    btn?: boolean
    /** body 是否铺满，无边距 */
    bodyFull?: boolean
    /** slot footer 是否展示到中间 */
    footerCenter?: boolean
  }>(),
  {
    title: 'drawer',
    width: '500px',
    direction: 'rtl',
    closeOnClickModal: true,
    appendToBody: false,
    minWidth: '600px',
    btn: false,
    footer: false,
    header: false,
    bodyFull: false,
    footerCenter: false,
  },
)

const emit = defineEmits(['update:show', 'confirm'])
const _show = useVModel(props, 'show', emit)
</script>

<template>
  <el-drawer
    v-model="_show"
    :title="title"
    :direction="direction"
    :close-on-click-modal="closeOnClickModal"
    :append-to-body="appendToBody"
    class="custom-drawer"
    :class="{ 'dy-custom-drawer': bodyFull }"
    :size="width"
    :style="{ minWidth }"
  >
    <template v-if="header" #header>
      <div>
        <slot name="header" />
      </div>
    </template>
    <slot />
    <template v-if="footer" #footer>
      <div
        class="flex items-center px-5 h-16 border-t"
        :class="{ 'justify-center': footerCenter }"
      >
        <div v-if="btn">
          <el-button @click="_show = false">
            &nbsp; 取消 &nbsp;
          </el-button>
          <el-button type="primary" @click="emit('confirm')">
            &nbsp; 确认 &nbsp;
          </el-button>
        </div>
        <slot v-else name="footer" />
      </div>
    </template>
  </el-drawer>
</template>

<style lang="scss">
.custom-drawer {
  .el-drawer__header {
    height: 50px;
    margin-bottom: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    border-bottom: 1px solid gainsboro;
    span {
      color: #000;
    }
  }
  .el-drawer__footer {
    padding: 0px;
  }
}

.dark {
  .custom-drawer {
    .el-drawer__header {
      border-bottom: 1px solid rgba($color: #fff, $alpha: 0.3);
      span {
        color: rgba($color: #fff, $alpha: 0.7);
      }
    }
  }
}

.dy-custom-drawer {
  .el-drawer__body {
    padding: 0px;
  }
}
</style>
