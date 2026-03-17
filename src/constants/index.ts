/**
 * 全局常量定义
 * 在此处定义业务中常用的常量、枚举值、缓存 Key 等
 */

/** 本地缓存 Key */
export const STORAGE_KEYS = {
  /** 用户 Token */
  TOKEN: 'token',
  /** 用户信息 */
  USER_INFO: 'userInfo',
} as const

/** 通用业务状态码 */
export const BIZ_CODE = {
  /** 成功 */
  SUCCESS: 200,
  /** 未授权 / Token 失效 */
  UNAUTHORIZED: 401,
} as const
