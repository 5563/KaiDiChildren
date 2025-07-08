<script setup>
import { onMounted, onUnmounted } from 'vue'
import { myCesium } from './cesiumClass'

let cesiumInstance = null

onMounted(() => {
  try {
    console.log('Initializing Cesium...')
    // 创建Cesium实例
    cesiumInstance = new myCesium('cesiumContainer', { useTian: true })
    console.log('Cesium initialized successfully')
  } catch (error) {
    console.error('Error initializing Cesium:', error)
  }
})

onUnmounted(() => {
  // 清理资源
  if (cesiumInstance && cesiumInstance.viewer) {
    try {
      cesiumInstance.viewer.destroy()
      cesiumInstance = null
      console.log('Cesium instance destroyed')
    } catch (error) {
      console.error('Error destroying Cesium instance:', error)
    }
  }
})
</script>
<template>
  <div id="cesiumContainer" class="cesium-container"></div>
</template>
<style lang="scss" scoped>
.cesium-container {
}
</style>
