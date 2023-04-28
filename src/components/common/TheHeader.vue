<script lang="ts" setup>
import { SwitchButton } from '@element-plus/icons-vue'

const userName = sessionStorage.getItem('userName')
// 控制对比页面开关
const isOpenCpmparison = ref(false)

function quit() {
  sessionStorage.clear()
  console.log('哈哈')
}
</script>

<template>
  <div class="the-header flex">
    <div
        class="flex"
        style="cursor: pointer;"
        @click="() => $router.push('/')"
    >
      <img
          class="logo-icon"
          src="../../assets/image/logoLeft.png"
      />
    </div>
    <div class="flex">
      <span @click="quit" style="display: flex;align-items: center">
        <el-icon class="logout-icon">
          <SwitchButton/>
        </el-icon>
        <span
            class="logout-btn"
            @click="quit"
        >退出登录</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.the-header {
  padding: 0 16px;
  height: 59px;
  /*height: var(--header-height);*/
  background: #FFFFFF;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  color: #000;
  cursor: default;
}
.logo-icon {
  margin-right: 4px;
  height: 48px;
  width: 208px;
}
.logo-icon + span {
  position: relative;
  top: 2px;
}
.logout-icon {
  margin: 0 4px 0 32px;
  cursor: pointer;
}
.logout-btn {
  cursor: pointer;
}
.bell-icon {
  font-size: 24px;
}
.popover-item {
  padding: 8px 16px 8px 8px;
  cursor: pointer;
  color: #606266;
  text-decoration: none;
}
.popover-item > span:last-of-type {
  color: #e6a23c;
}
.popover-item:hover {
  background: #f2f6fc;
}
:deep(.el-button--info) {
  --el-button-text-color: #4E5969;
}
</style>
