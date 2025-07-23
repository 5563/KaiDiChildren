<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import LayoutBox from './layout/LayoutBox.vue'
const isMicroapp = ref(window.__MICRO_APP_ENVIRONMENT__)
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>

<template>
  <el-config-provider :locale="zhCn">
    <RouterView v-if="isMicroapp" />
    <LayoutBox v-else>
      <RouterView />
    </LayoutBox>
  </el-config-provider>
</template>

<style scoped>
body {
  background-color: #f5f5f5;
}
</style>
