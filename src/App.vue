<template>
  <naive-provider>
    <n-card>
    <div style="width:200px;height:100px">
      <svg-icon name="home" size="1.8em" @click="test"></svg-icon>
    </div>
    </n-card>
  </naive-provider>
</template>
<script lang="ts" setup>
import NaiveProvider from '@/layout/NaiveProvider.vue'
import { switchMode } from '@/utils/switchMode'
const test=()=>{
  switchMode()
  console.log(import.meta.env)
}
</script>

<style scoped>

</style>
