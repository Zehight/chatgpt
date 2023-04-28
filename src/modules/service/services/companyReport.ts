import axios from '@/modules/service/axios'

// 删除
export const delById = (searchInfo: any) =>
  axios.post('/companyReport/delById', searchInfo)

// 查询
export const getList = (searchInfo: any) =>
  axios.post('/companyReport/getList', searchInfo)
