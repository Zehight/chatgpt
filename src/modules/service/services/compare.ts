import axios from '@/modules/service/axios'
// 企业信息
export const getCompare = (searchInfo: any) =>
  axios.post('/business/getCompare', searchInfo)

// 企业背景（主要人员）
export const getPrincipal = (searchInfo: any) =>
  axios.post('/background/getPrincipal', searchInfo)

// 企业背景（股东信息）
export const getShareholder = (searchInfo: any) =>
  axios.post('/background/getShareholder', searchInfo)

// 企业背景（最终受益人）
export const getFinal = (searchInfo: any) =>
  axios.post('/background/getFinal', searchInfo)

// 企业背景（建筑资质）
export const getQualification = (searchInfo: any) =>
  axios.post('/background/getQualification', searchInfo)

// 企业背景（资质详情）
export const getConstructionDetail = (key: any) =>
  axios.post('/background/getConstructionDetail', key)

// 司法信息（被执行人）
export const getExecutedByCompany = (searchInfo: any) =>
  axios.post('/justiceInfo/getExecutedByCompany', searchInfo)

// 司法信息（历史被执行人）
export const getHistoryExecutedByCompany = (searchInfo: any) =>
  axios.post('/justiceInfo/getHistoryExecutedByCompany', searchInfo)

// 司法信息（历史失信）
export const getHistoryNoCreditByCompany = (searchInfo: any) =>
  axios.post('/justiceInfo/getHistoryNoCreditByCompany', searchInfo)

// 司法信息（失信被执行人）
export const getNoCreditByCompany = (searchInfo: any) =>
  axios.post('/justiceInfo/getNoCreditByCompany', searchInfo)

// 司法信息（限制消费令）
export const getStopPay = (searchInfo: any) =>
  axios.post('/justiceInfo/getStopPay', searchInfo)

// 经营状况（行政许可）
export const getAdministrativeLicensing = (searchInfo: any) =>
  axios.post('/manage/getAdministrativeLicensing', searchInfo)

// 经营状况（资质证书）
export const getQualificationCertificate = (searchInfo: any) =>
  axios.post('/manage/getQualificationCertificate', searchInfo)

// 经营风险（行政处罚）
export const getAdministrativePenalty = (searchInfo: any) =>
  axios.post('/manage/getAdministrativePenalty', searchInfo)

// 经营风险（财产抵押>动产抵押）
export const getChattelMortgage = (searchInfo: any) =>
  axios.post('/manage/getChattelMortgage', searchInfo)

// 经营风险（财产抵押>土地抵押）
export const getLandMortgage = (searchInfo: any) =>
  axios.post('/manage/getLandMortgage', searchInfo)
