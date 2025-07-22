<script setup>
import { ElContainer, ElMenu, ElIcon, ElMenuItem, ElAside } from 'element-plus';
import { useRouter, useRoute } from 'vue-router';
import {ref, computed} from 'vue'
const route = useRoute();
const router = useRouter();
const routesList = ref([])
routesList.value = router.options.routes
const defaultActive = computed(() =>{
    return route.path
})
</script>

<template>
  <div class="common-layout">
    <el-container style="height: 100%;">
      <el-aside width="auto">
        <el-menu router  :defaultActive="defaultActive">
          <template v-for="(item, index) in routesList"  :key="item.path + index">
            <el-menu-item :index="item.path">
                <el-icon><setting /></el-icon>
                <span>{{item.meta.title}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <slot>
            main
        </slot>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
    height: 100%;
}
</style>
