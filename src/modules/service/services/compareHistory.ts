import axios from '@/modules/service/axios'

// 新增
export const add = (searchInfo: any) =>
  axios.post('/compareHistory/add', searchInfo)

// 删除
export const delById = (searchInfo: any) =>
  axios.post('/compareHistory/delById', searchInfo)

// 查询
export const getList = (searchInfo: any) =>
  axios.post('/compareHistory/getList', searchInfo)

// // 下载
// export const download = (fileId: any) =>
//   axios.get(`/file/download?fileId=${fileId}`)
