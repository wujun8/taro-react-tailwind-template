export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/tab1/index',
    'pages/my/index'
  ],
  lazyCodeLoading: 'requiredComponents',
  /** 隐私检测请在微信公众平台后台开启；部分开发者工具会报 app.json 非法字段，故不写 usePrivacyCheck */
  darkmode: true,
  themeLocation: 'theme.json',
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#999999',
    selectedColor: '#333333',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/tab1/index',
        text: 'Tab1'
      },
      {
        pagePath: 'pages/my/index',
        text: '我的'
      }
    ]
  }
})
