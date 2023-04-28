<script setup lang="ts">
import { useCompareComponent } from '@/modules/store'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()

const store = useCompareComponent()

function handleDelete(index: number) {
  store.delCompany(index)
}

function toCompare() {
  if (store.companyList.length < 2) {
    ElMessage.warning('至少添加两家公司')
    return
  }
  let ids = ''
  store.companyList.forEach((item) => {
    if (ids !== '') {
      ids += `,${item.id}`
    } else {
      ids = item.id
    }
  })
  const routerData = router.resolve({name: 'EnterpriseComparison', query: {ids}})
  window.open(routerData.href, '_blank')
}
</script>

<template>
  <div class="cardArea">
    <el-card class="compareCard" v-for="(item,index) in store.companyList" :key="index">
      <div class="info">
        {{ item.name }}
      </div>
      <div class="handle">
        <el-button type="info" @click="handleDelete(index)">删除</el-button>
      </div>
    </el-card>
  </div>
  <div class="toCompare">
    <el-button type="primary" @click="toCompare">开始对比</el-button>
  </div>

</template>

<style scoped>
.cardArea {
  min-height: 90%;
}

.compareCard {
  margin-bottom: 16px;
}

.compareCard :deep(.el-card__body) {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toCompare {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 2;
}
</style>