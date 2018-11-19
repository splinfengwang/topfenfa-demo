import axios from 'axios'
import store from '@/store'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://result.eolinker.com/Ps2CuJ18b41b52825e8597dd5d533fa4b249d2ad7720cb1?uri=/api/',
  timeout: 15000 // 请求超时时间
})

service.interceptors.response.use(
  function (response) {
    // 请求正常则返回
    return Promise.resolve(response)
  },
  function (error) {
    // 请求错误则向store commit这个状态变化
    const httpError = {
      hasError: true,
      status: error.response.status,
      statusText: error.response.statusText
    }
    store.commit('ON_HTTP_ERROR', httpError)
    return Promise.reject(error)
  }
)

export default service
