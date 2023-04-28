import axios from '@/modules/service/axios'

// 增加违规信息
export const addRecord = (addInfo: any) =>
  axios.post('/violation/addRecord', addInfo)

// 删除违规信息
export const delById = (delInfo: any) =>
  axios.post('/violation/delById', delInfo)

// 修改违规信息
export const updateRecord = (updateInfo: any) =>
  axios.post('/violation/updateRecord', updateInfo)

// 查看违规信息
export const getList = (searchInfo: any) =>
  axios.post('/violation/getList', searchInfo)
