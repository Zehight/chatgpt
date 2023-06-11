<script lang="ts" setup>
const username = ref()
const password = ref()
const loginInfo = ref({ username: '', password: '' })
const signInfo = ref({ username: '', password: '' })

function submitLogin() {
  console.log({ username: username.value, password: password.value })
}

function submitSign() {
  console.log({ username: username.value, password: password.value })
}

const isLogin = ref(true)
</script>

<template>
  <div class="login">
    <Transition mode="out-in">
      <div v-if="isLogin" class="form">
        <div class="isLogin">
          <h2 style="font-size: 32px">登录</h2>
          <div class="form-group">
            <label for="username">用户名</label>
            <el-input
              id="username"
              v-model="loginInfo.username"
              class="userInfo"
              name="username"
              type="text"
            />
          </div>
          <div class="form-group">
            <label for="password">密码</label>
            <el-input
              id="password"
              v-model="loginInfo.password"
              class="userInfo"
              name="password"
              type="password"
            />
          </div>
          <div class="buttonArea">
            <el-button type="primary" @click="submitLogin">登录</el-button>
            <el-button type="info" @click="isLogin = false">前往注册</el-button>
          </div>
        </div>
      </div>
      <div v-else class="form">
        <div class="isSignin">
          <h2 style="font-size: 32px">注册</h2>
          <div class="form-group">
            <label for="username">用户名</label>
            <el-input
              id="username"
              v-model="signInfo.username"
              class="userInfo"
              name="username"
              type="text"
            />
          </div>
          <div class="form-group">
            <label for="password">密码</label>
            <el-input
              v-model="signInfo.password"
              class="userInfo"
              name="password"
              type="password"
            />
          </div>
          <div class="buttonArea">
            <el-button type="primary" @click="submitSign">注册</el-button>
            <el-button type="info" @click="isLogin = true">前往登录</el-button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
}

.form {
  background-color: #fff;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
}

h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
}

.userInfo {
  margin-top: 0.25rem;
}

.buttonArea {
  display: flex;
  padding: 0 8px;
  justify-content: space-between;
}

.v-enter-active,
.v-enter-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: rotateY(40deg);
}
</style>