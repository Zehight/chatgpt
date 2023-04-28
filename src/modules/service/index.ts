/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from '@/modules/service/axios'

export function updateToken(token: string) {
  // @ts-ignore
  axios.defaults.headers.Authorization = `Bearer ${token}`
}

interface UserInfo {
  userCode: string
  realName: string
  roleList?: string[]
  code: number
}

export function setUserInfo(data: UserInfo) {
  console.log(data)
  if (data) {
    sessionStorage.setItem('userName', data.realName)
    sessionStorage.setItem('userCode', data.userCode)
  }
  // if (data) {
  //   const a = <any>[]
  //   data.roleList.forEach((item: any) => {
  //     if (item.roleCode === 'superAdmin') {
  //       console.log('superAdmin')
  //       sessionStorage.setItem('role', item.roleCode)
  //     } else if (sessionStorage.getItem('role') !== 'superAdmin') {
  //       a.push(item.roleCode)
  //     }
  //   })
  //   if (a.length !== 0 && sessionStorage.getItem('role') !== 'superAdmin') {
  //     sessionStorage.setItem('role', a)
  //   }
  // }
  // sessionStorage.setItem('userName', data.realName)
  // sessionStorage.setItem('userCode', data.userCode)
  // // @ts-ignore
  // axios.defaults.headers.user_id = data.userCode
  // sessionStorage.setItem('userInfo', JSON.stringify(data))
}

export function getUserInfo() {
  return JSON.parse(sessionStorage.getItem('userInfo') || '')
}

// 接口
export * as Auth from './services/auth'
export * as Dept from './services/dept'
export * as Search from './services/search'
export * as Role from './services/role'
export * as User from './services/user'
export * as Detail from './services/detail'
export * as Violation from './services/violation'
export * as Compare from './services/compare'
export * as CompareHistory from './services/compareHistory'
export * as CompanyReport from './services/companyReport'

// 类型
export { ResponseCode } from '@/@types/http.d'
