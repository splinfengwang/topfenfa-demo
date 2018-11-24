import axios from 'axios'
import { Message } from 'element-ui'
// import route from '@/router'

// 创建axios实例
const service = axios.create({
  // baseURL: 'http://fortest.topfenfa.com/',
  // baseURL: 'http://result.eolinker.com/Ps2CuJ18b41b52825e8597dd5d533fa4b249d2ad7720cb1?uri=/api/',
  timeout: 15000 // 请求超时时间
})

service.interceptors.request.use(config => {
  // if (localStorage.expires_in && localStorage.expires_in > Date.parse(new Date())) {
  return config
  // } else {
  //   console.log(config, Vue)
  //   route.push({
  //     name: 'login'
  //   })
  // }
}, err => {
  Message.error({ message: '请求超时!' })
  return Promise.resolve(err)
})

service.interceptors.response.use(
  data => {
    if (data.status && data.status === 200 && data.data.status === 'error') {
      Message.error({ message: data.data.msg })
      return
    }
    return data
  }, err => {
    if (err.response.status === 504 || err.response.status === 404) {
      Message.error({ message: '服务器被吃了⊙﹏⊙∥' })
    } else if (err.response.status === 403) {
      Message.error({ message: '权限不足,请联系管理员!' })
    } else {
      Message.error({ message: '未知错误!' })
    }
    return Promise.resolve(err)
  }
)

export default service
