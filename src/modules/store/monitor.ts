import { defineStore } from 'pinia'

interface Row {
  cloud_app_key: string
  cloud_secret: string
  serial_code: string
  video_data: Video[]
}

interface Video {
  video_channel: string
  video_name: string
  video_url: string
  video_control: boolean
}

export default defineStore('monitorInfo', {
  state: () => ({
    monitorList: <Row[]>[],
  }),
  actions: {
    setMonitorList(data: any) {
      if (!data.video_data || data.video_data.length === 0) {
        this.monitorList.push({
          video_data: [],
          cloud_app_key: data.cloud_app_key,
          cloud_secret: data.cloud_secret,
          serial_code: data.serial_code,
        })
      } else {
        this.monitorList.push({
          video_data: data.video_data,
          cloud_app_key: data.cloud_app_key,
          cloud_secret: data.cloud_secret,
          serial_code: data.serial_code,
        })
      }
    },
    editMonitorInfo(index: number, data: any) {
      this.monitorList[index] = {
        video_data: this.monitorList[index].video_data,
        cloud_app_key: data.cloud_app_key,
        cloud_secret: data.cloud_secret,
        serial_code: data.serial_code,
      }
    },
    delMonitorInfo(index: number) {
      this.monitorList.splice(index, 1)
    },
    setMonitorListNULL() {
      this.monitorList = []
    },
    setVideoInfo(index: number, data: Video) {
      this.monitorList[index].video_data.push({
        video_channel: data.video_channel,
        video_control: data.video_control,
        video_name: data.video_name,
        video_url: data.video_url,
      })
    },
    editVideInfo(monitorIndex: number, videoIndex: number, data: any) {
      this.monitorList[monitorIndex].video_data[videoIndex] = {
        video_channel: data.video_channel,
        video_control: data.video_control,
        video_name: data.video_name,
        video_url: data.video_url,
      }
    },
    delVideoInfo(monitorIndex: number, videoIndex: number) {
      this.monitorList[monitorIndex].video_data.splice(videoIndex, 1)
    },
    getVideoInfo(index: number) {
      return this.monitorList[index].video_data
    },
  },
})
