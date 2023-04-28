import axios from '@/modules/service/axios'

// 搜索获取天眼查列表

export const getList = (searchInfo: any) => axios.post('/search/getList', searchInfo)

// 获得热词
export const getHot = () => axios.post('/search/getHot')
