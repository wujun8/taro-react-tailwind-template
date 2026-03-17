/**
 * API 模块入口
 *
 * 按业务模块拆分请求函数，统一从此文件导出。
 * 建议按功能创建子文件，如 user.ts、order.ts 等。
 *
 * @example
 * ```ts
 * // src/api/user.ts
 * import { request } from '@/utils/request'
 *
 * interface UserInfo {
 *   id: string
 *   nickname: string
 *   avatar: string
 * }
 *
 * /** 获取用户信息 *\/
 * export function getUserInfo() {
 *   return request<UserInfo>({ url: '/user/info' })
 * }
 *
 * /** 更新用户昵称 *\/
 * export function updateNickname(nickname: string) {
 *   return request({ url: '/user/nickname', method: 'POST', data: { nickname } })
 * }
 *
 * // 然后在 src/api/index.ts 中导出：
 * // export * from './user'
 * ```
 */
