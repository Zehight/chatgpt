<script lang="ts" setup>
import { Fast } from '@/modules/service'
import { useRoute, useRouter } from 'vue-router'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/vs.css'
import mdAttrs from 'markdown-it-attrs'
import mdEmoji from 'markdown-it-emoji'
import asstIcon from '@/assets/image/科技.svg'
import userIcon from '@/assets/image/观演人.svg'
import { ElMessage } from 'element-plus'

const md: any = new MarkdownIt({
  html: true,
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${
          hljs.highlight(lang, str, true).value
        }</code></pre>`
        // eslint-disable-next-line no-empty
      } catch (__) {}
    }
    return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`
  },
})
md.use(mdAttrs)
md.use(mdEmoji)

const route = useRoute()

const disabled = ref(false)
const question = ref(route.query.q)
const speakListSend: any = ref([])
const speakListShow: any = ref([])

const text = ref('')
const markdownText: any = ref()

async function search() {
  markdownText.value = ''
  text.value = ''
  disabled.value = true
  speakListSend.value.push(
    JSON.stringify({ role: 'user', content: question.value }),
  )
  speakListShow.value.push({ role: 'user', content: question.value })
  const sse = new EventSource(
    `https://api.miragari.com/fast/streamChatLong?q=${speakListSend.value}`,
  )
  speakListShow.value.push({ role: 'assistant', content: '' })
  speakListSend.value.push('')
  sse.onmessage = (e) => {
    const result = JSON.parse(e.data).choices[0].delta
    if (result.content) {
      text.value += result.content
    }
    markdownText.value = md.render(text.value)
    speakListShow.value[speakListShow.value.length - 1].content =
      markdownText.value
    speakListSend.value[speakListShow.value.length - 1] = JSON.stringify({
      role: 'assistant',
      content: text.value,
    })
  }
  sse.onerror = (e) => {
    sse.close()
    ElMessage.error('服务器出错，请刷新重试')
    question.value = ''
    disabled.value = false
  }
  sse.addEventListener('stop', async (event) => {
    sse.close()
    question.value = ''
    disabled.value = false
    const res = await Fast.getTokenNum({ question: speakListShow.value })
    console.log(res)
  })
}
</script>

<template>
  <TheContainer>
    <div class="main">
      <el-scrollbar style="height: 100vh">
        <div class="allDialog">
          <div v-for="(item, index) in speakListShow" :key="index">
            <el-card
              body-style="display:flex;max-width:800px;margin:auto;min-width:600px"
              shadow="never"
              style="
                border-radius: 0;
                border: unset;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
              "
            >
              <div class="iconArea">
                <el-image
                  v-if="item.role === 'assistant'"
                  :src="asstIcon"
                  style="width: 32px; background-color: #e7e7e7"
                />
                <el-image
                  v-else
                  :src="userIcon"
                  style="width: 32px; background-color: #ffffff"
                />
              </div>
              <div class="markdown" v-html="item.content"></div>
            </el-card>
          </div>
          <div style="height: 80px"></div>
        </div>
        <div class="bottomArea">
          <el-input
            v-model="question"
            :disabled="disabled"
            style="min-width: 600px"
            @keydown.enter="search"
          />
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
  border: 1px solid rgba(0, 0, 0, 0.1);
}

:deep(.el-input__wrapper) {
  padding: 8px;
  box-shadow: unset;
}

.main {
  position: relative;
}

.allDialog {
  padding: 16px 16px 0 16px;
}

.oneDialog {
  padding-top: 16px;
}

.iconArea {
  width: 100px;
}

.bottomArea {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  min-width: 800px;
}

:deep(.markdown) -body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

:deep(.markdown) {
  white-space: pre-wrap;
  flex: 1;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  word-wrap: break-word;
}

:deep(.markdown) h1,
:deep(.markdown) h2,
:deep(.markdown) h3,
:deep(.markdown) h4,
:deep(.markdown) h5,
:deep(.markdown) h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}

:deep(.markdown) h1 {
  font-size: 32px;
}

:deep(.markdown) h2 {
  font-size: 24px;
}

:deep(.markdown) h3 {
  font-size: 20px;
}

:deep(.markdown) h4 {
  font-size: 16px;
}

:deep(.markdown) h5 {
  font-size: 14px;
}

:deep(.markdown) h6 {
  font-size: 12px;
}

:deep(.markdown) a {
  color: #0645ad;
  text-decoration: none;
}

:deep(.markdown) a:hover {
  text-decoration: underline;
}

:deep(.markdown) strong {
  font-weight: 600;
}

:deep(.markdown) img {
  max-width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
}

:deep(.markdown) pre {
  background-color: #f6f8fa;
  border-radius: 3px;
  font-size: 85%;
  line-height: 1.45;
  overflow: auto;
  padding: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
}

:deep(.markdown) code {
  background-color: #98caff;
  border-radius: 3px;
  font-size: 85%;
  margin: 0;
  padding: 0.2em 0.4em;
  margin-top: 8px;
  margin-bottom: 8px;
}

:deep(.markdown) pre > code {
  background-color: transparent;
  border: none;
  font-size: 100%;
  margin: 0;
  padding: 0;
}

:deep(.markdown) blockquote {
  color: #777;
  border-left: 4px solid #ddd;
  padding: 0 15px;
  margin: 0;
}

:deep(.markdown) blockquote > :first-child {
  margin-top: 0;
}

:deep(.markdown) blockquote > :last-child {
  margin-bottom: 0;
}

:deep(.markdown) table {
  display: block;
  width: 100%;
  overflow: auto;
  border-collapse: collapse;
  border-spacing: 0;
  margin-bottom: 16px;
  font-size: 85%;
  line-height: 1.45;
}

:deep(.markdown) table th {
  font-weight: 600;
}

:deep(.markdown) table th,
:deep(.markdown) table td {
  padding: 6px 13px;
  border: 1px solid #dfe2e5;
}
</style>