import axios from '@/modules/service/axios'
// 企业背景 股东信息
export const getShareHolderList = (code: any) =>
  axios.post('/backDrop/getShareHolderList', code)
// 企业背景 受益人信息
export const getBeneficiaryList = (code: any) =>
  axios.post('/backDrop/getBeneficiaryList', code)
// 企业背景 建筑资质
export const getBuildCertList = (code: any) =>
  axios.post('/backDrop/getBuildCertList', code)
// 工商信息
export const getBaseInfo = (key: any) =>
  axios.post('/business/getDetail', { key })
// 司法信息 被执行人
export const getExecutedByCompany = (code: any) =>
  axios.post('/justiceInfo/getExecutedByCompany', code)
// 司法信息 历史被执行人
export const getHistoryExecutedByCompany = (code: any) =>
  axios.post('/justiceInfo/getHistoryExecutedByCompany', code)
// 司法信息 失信被执行人
export const getNoCreditByCompany = (code: any) =>
  axios.post('/justiceInfo/getNoCreditByCompany', code)
// 司法信息 历史失信被执行人
export const getHistoryNoCreditByCompany = (code: any) =>
  axios.post('/justiceInfo/getHistoryNoCreditByCompany', code)
// 司法信息 限制消费令
export const getStopPay = (code: any) =>
  axios.post('/justiceInfo/getStopPay', code)
// // 司法信息 历史限制消费令
export const getHistoryStopPay = (code: any) =>
  axios.post('/justiceInfo/getHistoryStopPay', code)
// 司法信息 终本案件
export const getEndCase = (code: any) =>
  axios.post('/justiceInfo/getEndCase', code)
// 经营状况 资质证书
export const getQualificationCertificate = (code: any) =>
  axios.post('/manage/getQualificationCertificate', code)
// 经营状况 行政许可
export const getAdministrativeLicensing = (code: any) =>
  axios.post('/manage/getAdministrativeLicensing', code)
// 知识产权 商标专利
export const getBrand = (code: any) => axios.post('/knowledge/getBrand', code)
export const getPatent = (code: any) => axios.post('/knowledge/getPatent', code)
// 经营风险 行政处罚
export const getAdministrativePenalty = (code: any) =>
  axios.post('/manage/getAdministrativePenalty', code)
// 历史违规记录
export const getViolationList = (code: any) =>
  axios.post('/violation/getList', code)

// 导出报告
export const addReport = (code: any) => axios.post('/companyReport/add', code)

// 获取历史报告
export const getHistoryReport = (code: any) =>
  axios.post('/companyReport/getList', code)

// 删除报告
export const delHistoryReport = (code: any) =>
  axios.post('/companyReport/delById', code)
