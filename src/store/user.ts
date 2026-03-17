import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import Taro from '@tarojs/taro'
/** 用户信息类型 */
interface UserInfo {
  id: string
  mobile: string
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
 * 用户全局状态管理 (使用 persist 中间件自动持久化)
 */
export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      token: '',
      userInfo: null,
      isLoggedIn: false,

      setToken: (token) => {
        set({ token, isLoggedIn: !!token })
      },

      setUserInfo: (userInfo) => {
        set({ userInfo })
      },

      login: (token, userInfo) => {
        set({ token, userInfo, isLoggedIn: true })
      },

      logout: () => {
        set({ token: '', userInfo: null, isLoggedIn: false })
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => ({
        getItem: (name) => Taro.getStorageSync(name),
        setItem: (name, value) => Taro.setStorageSync(name, value),
        removeItem: (name) => Taro.removeStorageSync(name),
      })),
    }
  )
)
