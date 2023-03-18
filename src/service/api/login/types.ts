/**
 * login接口参数类型
 */
interface ILoginParams {
  userName: string
  passWord: string | number
}

/**
 * 接口参数类型定义
 */
export interface IParams {
  login: ILoginParams
}

/**
 * login接口返回数据类型
 */
interface ILoginResData {
  userName: string
  avatar: string
  age: number
  gender: 0 | 1
}

/**
 * 接口返回值类型定义
 */
export interface IResData {
  login: ILoginResData
}
