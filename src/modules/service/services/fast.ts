import axios from '@/modules/service/axios'

export const chat = (question: any) => axios.post('/streamChat', question)

export const getTokenNum = (question: any) =>
  axios.post('/getTokenNum', question)

export const toSave = (saveData: any) => axios.post('/toSave', saveData)
