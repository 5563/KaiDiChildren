<template>
  <ElDialog v-model="visible" :autoLoad="false" :title="computedTitle" width="800px" @close="cancal">
    <LBWTable
      v-model:queryParams="queryParams"
      v-model:staticQueryParams="staticQueryParams"
      :columns="columns"
      :loadApi="getRoomList"
      ref="LBWTableRef"
      :autoLoad="false"
    >
      <template #searchButtonRight>
        <!-- <el-button type="primary" @click="$refs.AddEditModalRef.showModal()">新增</el-button> -->
      </template>
      <template #action="{ row, deleteRow }">
        <!-- <el-button type="primary" text size="small" @click="() => $refs.AddEditModalRef.showModal(row)">编辑</el-button>
                <el-button type="primary" text size="small" @click="() => $refs.AddEditModalRef.showModal(row, 'add')">复制</el-button>
                <el-button type="danger" text size="small" @click="deleteRow(deleteRoom, row)">删除</el-button> -->
      </template>
    </LBWTable>
  </ElDialog>
</template>
<script setup>
import { ref, computed, nextTick } from 'vue'
import { ElDialog } from 'element-plus'
import LBWTable from '@common/components/LBWTable/LBWTable.vue'
import { getRoomList, deleteRoom } from '@/api/baseApi'

const visible = ref(false)
const queryParams = ref({})
const staticQueryParams = ref({})
const LBWTableRef = ref(null)

const columns = ref([
  { label: '角色名称', prop: 'roleName', search: true },
  { label: '角色描述', prop: 'roleDesc' },
  { label: '操作', prop: 'action', width: '200', align: 'center' },
])

const computedTitle = computed(() => {
  return '弹框列表'
})
const showModal = (row) => {
  staticQueryParams.value.enterpriseId = 1
  visible.value = true
  nextTick(() => {
    LBWTableRef.value.loadData()
  })
}

const cancal = () => {
  visible.value = false
}

defineExpose({
  showModal,
})
</script>
<style lang="scss" scoped></style>
