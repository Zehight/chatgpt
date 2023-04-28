import axios from '@/modules/service/axios'

// 获取部门
export const getDept = () => axios.post('/dept/getTree')

// 通过部门获取人员信息
export const getDeptPerson = (key: string) =>
  axios.post('/dept/getDeptPerson', { key })

export const addDept = (postData: any) => axios.post('/dept/addDept', postData)

export const updateDept = (postData: any) =>
  axios.post('/dept/update', postData)

export const getOutTree = () => axios.post('/dept/getOutTree')

export const getInfo = (postData: any) => axios.post('/dept/getInfo', postData)

export const delDept = (postData: any) => axios.post('/dept/delById', postData)

export const getList = (code: any) => axios.post('/dept/getList', code)

export const getAllTree = () => axios.post('/dept/getAllTree')


