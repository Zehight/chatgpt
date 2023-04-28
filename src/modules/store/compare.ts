import { defineStore } from 'pinia'

interface CompareInfo {
  id: string
  name: string
}

export const useCompareComponent = defineStore('compareComponent', {
  state: () => ({
    companyList: [] as CompareInfo[],
  }),
  getters: {},
  actions: {
    addCompany(id: string, name: string) {
      let flag = false
      this.companyList.forEach((item) => {
        if (item.id === id) {
          flag = true
        }
      })
      if (flag) return
      if (this.companyList.length === 5) return
      this.companyList.push({ id, name })
    },
    delCompany(index: number) {
      this.companyList.splice(index, 1)
    },
  },
})
