import Taro from '@tarojs/taro'

/**
 * 检查小程序版本更新
 *
 * 建议在「我的 → 查看版本」页面中，由用户手动触发调用。
 * 其它情况交给微信客户端自身的更新机制处理。
 *
 * @example
 * ```tsx
 * import { checkForUpdate } from '@/utils'
 *
 * const handleCheckUpdate = () => {
 *   checkForUpdate()
 * }
 * ```
 */
export function checkForUpdate(fromClick = false): void {
  if (!Taro.canIUse('getUpdateManager')) {
    return
  }

  const updateManager = Taro.getUpdateManager()

  updateManager.onCheckForUpdate((res) => {
    if (fromClick && !res.hasUpdate) {
      Taro.showToast({ title: '当前已是最新版本', icon: 'success' })
    }
  })

  updateManager.onUpdateReady(() => {
    Taro.showModal({
      title: '更新提示',
      content: '新版本已准备好，是否立即重启应用？',
      success: (res) => {
        if (res.confirm) {
          updateManager.applyUpdate()
        }
      },
    })
  })

  updateManager.onUpdateFailed(() => {
    Taro.showToast({ title: '更新失败，请稍后重试', icon: 'none' })
  })
}
