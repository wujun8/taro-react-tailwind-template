import { create } from 'zustand'
import Taro from '@tarojs/taro'
import { STORAGE_KEYS } from '@/constants'

/** 用户信息类型 */
interface UserInfo {
  id: string
  nickname: string
  avatar: string
}

/** 用户 Store 状态 */
interface UserState {
  /** 用户 Token */
  token: string
  /** 用户信息 */
  userInfo: UserInfo | null
  /** 是否已登录 */
  isLoggedIn: boolean
  /** 设置 Token */
  setToken: (token: string) => void
  /** 设置用户信息 */
  setUserInfo: (userInfo: UserInfo) => void
  /** 登录（同时保存 Token 和用户信息到本地缓存） */
  login: (token: string, userInfo: UserInfo) => void
  /** 退出登录（清除所有用户数据） */
  logout: () => void
}

/**
 * 用户全局状态管理
 *
 * @example
 * ```tsx
 * import { useUserStore } from '@/store'
 *
 * const MyPage = () => {
 *   const { userInfo, isLoggedIn, login, logout } = useUserStore()
 *
 *   return (
 *     <View>
 *       {isLoggedIn ? <Text>{userInfo?.nickname}</Text> : <Text>未登录</Text>}
 *     </View>
 *   )
 * }
 * ```
 */
export const useUserStore = create<UserState>((set) => ({
  token: Taro.getStorageSync(STORAGE_KEYS.TOKEN) || '',
  userInfo: Taro.getStorageSync(STORAGE_KEYS.USER_INFO) || null,
  isLoggedIn: !!Taro.getStorageSync(STORAGE_KEYS.TOKEN),

  setToken: (token) => {
    Taro.setStorageSync(STORAGE_KEYS.TOKEN, token)
    set({ token, isLoggedIn: !!token })
  },

  setUserInfo: (userInfo) => {
    Taro.setStorageSync(STORAGE_KEYS.USER_INFO, userInfo)
    set({ userInfo })
  },

  login: (token, userInfo) => {
    Taro.setStorageSync(STORAGE_KEYS.TOKEN, token)
    Taro.setStorageSync(STORAGE_KEYS.USER_INFO, userInfo)
    set({ token, userInfo, isLoggedIn: true })
  },

  logout: () => {
    Taro.removeStorageSync(STORAGE_KEYS.TOKEN)
    Taro.removeStorageSync(STORAGE_KEYS.USER_INFO)
    set({ token: '', userInfo: null, isLoggedIn: false })
  },
}))
