/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // 🎨 颜色系统：高度契合移动端与微信生态
      colors: {
        primary: '#1989fa',    // 品牌主色 (Vant 蓝)
        success: '#07c160',    // 成功色 (微信生态经典绿)
        warning: '#ff976a',    // 警告色
        danger: '#ee0a24',     // 危险/错误色
        // 结构背景色
        page: '#f7f8fa',       // 小程序页面常用浅灰底色
        card: '#ffffff',       // 卡片/模块背景色
        // 文本色系
        main: '#323233',       // 主标题/核心正文
        regular: '#666666',    // 常规正文
        secondary: '#969799',  // 次要/辅助说明文本
        disabled: '#c8c9cc',   // 禁用态/占位符文本
      },

      // 🌫️ 阴影：适合移动端卡片的轻量级阴影 (避免过重)
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'dialog': '0 4px 16px rgba(0, 0, 0, 0.08)',
      },

      // 📏 间距补充：增加移动端特有的属性
      spacing: {
        'safe-bottom': 'env(safe-area-inset-bottom)', // 适配全面屏底部安全区
        'safe-top': 'env(safe-area-inset-top)',       // 适配全面屏顶部安全区 (刘海屏)
      }
    }
  },
  plugins: [],
  // v3 版本的 tailwindcss 有些不同
  corePlugins: {
    preflight: false
  }
};
