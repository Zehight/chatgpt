<script setup lang="ts">
import { useRouter } from 'vue-router'
import userIcon from '@/assets/image/科技.svg'
import asstIcon from '@/assets/image/观演人.svg'


const router = useRouter()
const speakList:any=ref([])
const questionNow = ref('')
// ,{role:'assistant',content:'你好呀'}


const chat = (question: any) => axios.post('https://api.miragari.com/fast/fastChat', question)

const disabled = ref(false)
async function sendMessage(){
  disabled.value = true
  speakList.value.push({role:'user',content:questionNow.value})
  questionNow.value = ''
  const res: any = await chat({ question: speakList.value })
  speakList.value.push({role:'assistant',content:res.data.choices[0].message.content})
  disabled.value = false
}


</script>

<template>
  <TheContainer>
    <div class="main">
      <el-scrollbar style="height:100vh;">
        <div class="allDialog">
          <div v-for="(item,index) in speakList" :key="index">
            <el-card shadow="never" body-style="display:flex;max-width:800px;margin:auto" style="border-radius: 0;border: unset;border-bottom: 1px solid rgba(0,0,0,0.1);">
              <div class="iconArea">
                <el-image v-if="item.role==='assistant'" style="width: 32px;background-color: #e7e7e7" :src="asstIcon"/>
                <el-image v-else style="width: 32px;background-color: #6698fa" :src="userIcon"/>
              </div>
              <div class="contentArea">
                {{item.content}}
              </div>
            </el-card>
          </div>
          <div style="height: 80px">

          </div>
        </div>
        <div class="bottomArea">
          <el-input :disabled="disabled" v-model="questionNow" @keydown.enter="sendMessage"/>
        </div>
      </el-scrollbar>
    </div>
  </TheContainer>
</template>

<style scoped>

:deep(.el-input) {
  box-shadow: 0px 4px 10px 0px rgba(20, 106, 255, 0.1);
  font-size: 16px;
  padding-left: 0;
  width: 50%;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.1);
}
:deep(.el-input__wrapper) {
  padding: 8px;
  box-shadow: unset;
}

.main{
  position: relative;
}



.allDialog{
  padding: 16px 16px 0 16px;
}

.oneDialog{
  padding-top: 16px;
}

.iconArea{
  width: 100px;
}

.contentArea{
  white-space: pre-wrap;
  flex: 1;
}

.bottomArea{
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 80px;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
