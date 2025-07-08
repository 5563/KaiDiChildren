<template>
  <div>
    <Table1 :columns="columns">
      <template #buttonBox>
        <el-button type="primary" @click="$refs.AddEditModalRef.showModal()">新增</el-button>
      </template>
      <template #action="{row}">
        <el-button type="primary" @click="() => $refs.AddEditModalRef.showModal(row)">编辑</el-button>
        <el-button type="danger" @click="Table1Api.deleteRow(deleteRoom, row)">删除</el-button>
      </template>
    </Table1>
    <AddEditModal ref="AddEditModalRef" />
  </div>
</template>

<script setup>
import { getRoomList, deleteRoom } from '@/api/baseApi'
import { ref } from 'vue'
import AddEditModal from './AddEditModal.vue'
import { useLBWTable } from '@common/components/LBWTable/LBWTable.jsx'
const [Table1, Table1Api] = useLBWTable(getRoomList, {
  defLoadData: true,
  defQueryParams: {},
  pagesize: 999,
})
const columns = ref([
  { 
    label: '楼栋名称', 
    prop: 'buildingName', 
    search: true,
    type: 'datePicker',
    nativeType: 'date',
  },
  { label: '所属企业', prop: 'enterpriseName' },
  { label: '房间名', prop: 'name' },
  {
    label: '操作',
    prop: 'action',
  }
])
</script>
