import Taro from '@tarojs/taro'
import { STORAGE_KEYS, BIZ_CODE } from '@/constants'

/** 请求配置选项 */
interface RequestOptions {
  /** 请求路径（相对路径，自动拼接 BASE_URL） */
  url: string
  /** 请求方法，默认 GET */
  method?: keyof Taro.request.Method
  /** 请求数据 */
  data?: Record<string, unknown>
  /** 自定义请求头 */
  header?: Record<string, string>
  /** 是否显示 loading，默认 true */
  showLoading?: boolean
  /** 是否显示错误 toast，默认 true */
  showError?: boolean
}

/** 后端统一响应结构 */
interface ApiResponse<T = unknown> {
  code: number
  message: string
  data: T
}

/**
 * 获取 BASE_URL
 * 通过 Taro 的 defineConstants 注入，在 config/dev.ts 和 config/prod.ts 中配置
 */
function getBaseUrl(): string {
  // @ts-ignore - 由 defineConstants 注入
  return typeof BASE_URL !== 'undefined' ? BASE_URL : ''
}

/**
 * 统一网络请求封装
 *
 * 特性：
 * - 自动拼接 BASE_URL
 * - 自动追加 Token 到 Header
 * - 统一处理业务异常和 401 跳转
 * - 可选的 Loading 和错误 Toast
 *
 * @example
 * ```ts
 * // GET 请求
 * const data = await request<UserInfo>({ url: '/user/info' })
 *
 * // POST 请求
 * const result = await request<LoginResult>({
 *   url: '/auth/login',
 *   method: 'POST',
 *   data: { username: 'test', password: '123456' },
 * })
 * ```
 */
export async function request<T = unknown>(options: RequestOptions): Promise<T> {
  const {
    url,
    method = 'GET',
    data,
    header = {},
    showLoading = true,
    showError = true,
  } = options

  // 请求拦截：追加 Token
  const token = Taro.getStorageSync(STORAGE_KEYS.TOKEN)
  if (token) {
    header['Authorization'] = `Bearer ${token}`
  }

  if (showLoading) {
    Taro.showLoading({ title: '加载中...', mask: true })
  }

  try {
    const response = await Taro.request<ApiResponse<T>>({
      url: `${getBaseUrl()}${url}`,
      method,
      data,
      header: {
        'Content-Type': 'application/json',
        ...header,
      },
    })

    if (showLoading) {
      Taro.hideLoading()
    }

    const result = response.data

    // 响应拦截：统一处理业务异常
    if (result.code === BIZ_CODE.SUCCESS) {
      return result.data
    }

    // 401 未授权 → 清除 Token 并跳转登录页
    if (result.code === BIZ_CODE.UNAUTHORIZED) {
      Taro.removeStorageSync(STORAGE_KEYS.TOKEN)
      Taro.removeStorageSync(STORAGE_KEYS.USER_INFO)
      Taro.showToast({ title: '登录已过期，请重新登录', icon: 'none' })
      // 根据实际项目登录页路径修改
      // Taro.redirectTo({ url: '/pages/login/index' })
      return Promise.reject(new Error('登录已过期'))
    }

    // 其它业务异常
    if (showError) {
      Taro.showToast({ title: result.message || '请求失败', icon: 'none' })
    }
    return Promise.reject(new Error(result.message || '请求失败'))
  } catch (error) {
    if (showLoading) {
      Taro.hideLoading()
    }
    if (showError) {
      Taro.showToast({ title: '网络异常，请稍后重试', icon: 'none' })
    }
    return Promise.reject(error)
  }
}
