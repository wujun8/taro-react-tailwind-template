/**
 * 微信小程序隐私合规（相册、定位、剪贴板等）。
 *
 * 已开启 `app.config` 中的 `usePrivacyCheck`。接入隐私相关 API 时：
 * 1. 在微信公众平台配置《小程序用户隐私保护指引》
 * 2. 在适当时机调用 `wx.onNeedPrivacyAuthorization`，用户同意后执行
 *    `resolve({ event: 'agree', buttonId: '与后台一致的按钮 id' })`
 *
 * 本模板不默认注册该监听，避免未完成配置时误阻塞接口。
 *
 * @see https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/
 */
export function initWeappPrivacyAuthorization() {
  if (process.env.TARO_ENV !== 'weapp') return
  // 需要时在此调用 wx.onNeedPrivacyAuthorization，见 README
}
