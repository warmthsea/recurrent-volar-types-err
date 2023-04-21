<script lang="ts" setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<template>
  <div>
    <el-config-provider :locale="zhCn">
      <RouterView />
    </el-config-provider>
  </div>
</template>

<style lang="scss">
@import url('./assets/font/regular.css');

* {
  font-family: 'HarmonyOS_Regular';
}
</style>
