<script lang="ts" setup>
const list = ref([
  '如何使用PR',
  '如何使用AE',
  '如何使用AE',
  '如何使用AE',
  '如何使用AE',
  '如何使用AE',
  '如何使用AE',
  '如何使用AE',
  '如何使用AE',
  '如何使用AE',
  '如何使用AE',
  '如何使用AE',
  '如何使用AE',
  '如何使用AE',
  '如何使用AE',
  '如何使用AE画出小星星对的对的'
])
</script>

<template>
  <el-scrollbar class="scroll-bar">
    <div class="menu">
      <el-card v-for="(item,index) in list"
               :key="index"
               shadow="never"
               style="cursor: pointer;border: unset"
               body-style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;border-radius: 8px;margin :8px 16px;border: solid 1px #e4e7ed">
        {{item}}
      </el-card>
    </div>
  </el-scrollbar>
</template>

<style scoped>
.menu {
  height: 100vh;
  border-right: none;
  background-color: #FFF;
}

.scroll-bar {
  border-right: 1px solid var(--el-menu-border-color);
}

.oneLine{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
