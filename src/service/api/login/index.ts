import http from '../../http'
import * as T from './types'
export default {
  /**
   * 登录接口
   * @param params 用户名与密码
   * @returns 用户数据及token
   */
  login: <K extends 'login'>(params: T.IParams[K]) => http.post<T.IResData[K]>('/login', params)
}
