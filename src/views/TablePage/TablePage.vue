<template>
  <div>
    <LBWTable
      v-model:queryParams="queryParams"
      v-model:staticQueryParams="staticQueryParams"
      :columns="columns"
      :loadApi="getRoomList"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import LBWTable from '@common/components/LBWTable/LBWTable.vue'
import { getRoomList } from '@/api/baseApi'

const queryParams = ref({})
const staticQueryParams = ref({})

const columns = ref([
  { label: '楼栋名称', prop: 'buildingName', search: true },
  { label: '所属企业', prop: 'enterpriseName' },
])
</script>
<style lang="scss" scoped></style>
