<template>
  <ElDialog v-model="visible" title="新增" width="50%" @close="cancal">
    <ElForm ref="formRef" :rules="rules" :model="ruleFrom">    
        <ElRow :gutter="20">
            <FormItem v-model="ruleFrom.buildingName" label="楼栋名称" :span="12" prop="buildingName" />
            <FormItem v-model="ruleFrom.buildingName" label="楼栋名称" :span="12" prop="buildingName" />
            <FormItem v-model="ruleFrom.buildingName" label="楼栋名称" :span="12" prop="buildingName" />
            <FormItem v-model="ruleFrom.buildingName" label="楼栋名称" :span="12" prop="buildingName" />
        </ElRow>
        <!-- 确认取消 -->
         <div style="text-align: right;">
          <ElButton @click="cancal">取消</ElButton>
          <ElButton type="primary" @click="submit">确定</ElButton>
         </div>
    </ElForm>
  </ElDialog>
</template>
<script setup>
import { ref } from 'vue'
import { ElDialog, ElForm, ElRow } from 'element-plus'
import FormItem from '@common/components/LBWFormItem/index.vue'
const formRef = ref(null)
const visible = ref(false)
const source = ref('add')
const ruleFrom = ref({
  buildingName: undefined,
})
const rules = ref({
  buildingName: [
    { required: true, message: '请输入楼栋名称', trigger: 'change' },
  ],
})
const showModal = (row = undefined, tempSource) => {
  source.value = tempSource || (row ? 'edit' : 'add');
  if (row) {
    ruleFrom.value = { ...ruleFrom.value, ...row };
  }
  visible.value = true;
};


const cancal = () => {
  visible.value = false
  formRef.value.resetFields()
}
const submit = () => {
  formRef.value.validate(valid => {
    if (valid) {
      visible.value = false
      console.log(ruleFrom.value)
    }
  })
}
defineExpose({
  showModal,
})
</script>
<style lang="scss" scoped>
</style>