<script setup>
import { RouterView } from 'vue-router'
import {ref} from 'vue'
import Layout from './layout/Layout.vue';
const isMicroapp = ref(window.__MICRO_APP_ENVIRONMENT__)
</script>

<template>
  <RouterView v-if="isMicroapp" />
  <Layout v-else>
    <RouterView />
  </Layout>
  
</template>

<style scoped></style>
