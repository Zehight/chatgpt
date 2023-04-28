import { defineStore } from 'pinia'

export const useCompanyTag = defineStore('companyTag', {
  state: () => ({
    companyTitle: '',
    isRevocation: false, // 吊销
    isTrustBreaking: false, // 失信被执行人
    isStopPay: false,
    // is,
  }),
  getters: {},
  actions: {
    setCompanyTitle(title: string) {
      this.companyTitle = title
    },
    judgRevocation(str: string) {
      // console.log(str, str.indexOf('吊销'), 'pinia')
      if (str.indexOf('吊销') !== -1) {
        this.isRevocation = true
      }
    },
    judgTrustBreaking(num: number) {
      if (num > 0) {
        this.isTrustBreaking = true
      }
    },
    judgStopPay(num: number) {
      console.log(num)
      if (num > 0) {
        this.isStopPay = true
      }
    },
  },
})
