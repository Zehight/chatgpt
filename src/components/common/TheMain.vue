<script lang="ts" setup>

</script>

<template>
    <el-main class="main-container">
      <slot/>
    </el-main>
</template>

<style scoped>
.main-container {
  background-color: #f2f6fc;
  padding: 0;
}
:deep(.el-main){
  padding: 0;
}

</style>
