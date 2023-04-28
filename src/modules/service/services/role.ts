import axios from '@/modules/service/axios'

export const getList = (data: any) => axios.post('/role/getList', data)

export const getInfo = (code: any) => axios.post('/role/getInfo', code)

export const addRole = (code: any) => axios.post('/role/addRole', code)

export const updateRole = (code: any) => axios.post('/role/updateRole', code)

export const getRoleUserList = (code: any) =>
  axios.post('/role/getUserByRole', code)

export const delRoleUser = (code: any) => axios.post('/role/delUserRole', code)
export const saveRoleUser = (code: any) => axios.post('/role/addUserRole', code)

export const delRole = (code: string) =>
  axios.post('/role/delRole', { key: code })
