import axios from 'axios'
import NProgress from 'nprogress'
import SYSTEM from '@/utils/enum'
/**
 * 创建axios实例
 */
const service = axios.create({
  baseURL: '/',
  timeout: 10 * 1000
})

/**
 * 设置请求拦截器，获取Token并写入请求头
 */
service.interceptors.request.use(
  (config) => {
    // TODO: Token 传递
    if (config.headers) {
      const token = ''
      config.headers.token = token
    }

    return config
  },
  (error) => Promise.reject(error)
)

/**
 * 设置响应拦截器 处理
 */
service.interceptors.response.use(
  (res) => {
    const code = res.data.code
    if (code === SYSTEM.TOKEN_INVALID_CODE) {
      // TODO: 超时或未登录，跳转到登录页
    }
    return res
  },
  (error) => Promise.reject(error)
)

/**
 * 定义后端响应数据类型
 */
interface ResType<T> {
  code: number
  data?: T
  msg: string
}

export interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>
  post<T>(url: string, params?: unknown): Promise<ResType<T>>
}

const http: Http = {
  // GET请求
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      service
        .get(url, { params })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((error) => {
          NProgress.done()
          reject(error.data)
        })
    })
  },
  // POST请求
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      service
        .post(url, params)
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((error) => {
          NProgress.done()
          reject(error.data)
        })
    })
  }
}

export default http
