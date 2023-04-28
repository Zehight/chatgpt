import axios from '@/modules/service/axios'

// eslint-disable-next-line import/prefer-default-export
export const getAllUser = (code: any) => axios.post('user/getList', code)
