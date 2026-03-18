
# taro-react-tailwind-template

基于 **Taro 4 + React 18 + TailwindCSS + NutUI React（Taro）** 的微信小程序开发模板，开箱即用。

## ✨ 技术栈

| 技术 | 版本 | 说明 |
|---|---|---|
| [Taro](https://docs.taro.zone/) | 4.x | 跨端开发框架 |
| [React](https://react.dev/) | 18.x | UI 框架 |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | 类型安全 |
| [TailwindCSS](https://tailwindcss.com/) | 3.x | 原子化 CSS |
| [weapp-tailwindcss](https://weapp-tw.icebreaker.top/) | 4.x | 小程序 Tailwind 适配 |
| [NutUI React Taro](https://nutui.jd.com/taro/react.html) | 2.x | 京东风格移动端组件（小程序 + H5） |
| [@tarojs/plugin-html](https://docs.taro.zone/docs/use-h5) | 4.x | 小程序端 HTML 标签支持（NutUI 依赖） |
| [Zustand](https://zustand.docs.pmnd.rs/) | 5.x | 轻量状态管理 |
| [pnpm](https://pnpm.io/) | 10.x | 包管理器 |

## 📐 设计稿宽度

为与 **NutUI** 一致，小程序端 `designWidth` 为 **375**（见 `config/index.ts`）。自写样式时建议多用 **rpx** 或相对单位，避免与 NutUI 组件比例不一致。

## 📱 自定义 TabBar 与页面底部

使用 **自定义 TabBar** 时，页面不会自动预留底部高度。所有 **tabBar 页面** 根容器需加全局类名 **`pb-custom-tab-bar`**（已在 `app.scss` 定义，含安全区），否则底部内容会被遮挡。

## 📁 目录结构

```
src/
├── api/          # 网络请求模块（按业务拆分）
├── assets/       # 静态资源（图标等）
├── components/   # 公共组件
├── constants/    # 全局常量 / 枚举
├── hooks/        # 自定义 React Hooks
├── pages/        # 页面
├── store/        # Zustand 状态管理
├── utils/        # 公共工具（含 privacy-weapp 隐私说明占位）
├── theme.json    # 微信深色模式主题（随 app.config 生效）
├── app.config.ts # 全局配置（含 usePrivacyCheck、分享相关由页面开启）
├── app.scss      # 全局样式（TailwindCSS 入口）
└── app.tsx       # 应用入口（引入 NutUI 全局样式；含原生 Button 占位避免 WXML 模板缺失）
```

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
# 微信小程序
pnpm dev:weapp

# H5
pnpm dev:h5
```

### 生产构建

```bash
# 微信小程序
pnpm build:weapp

# H5
pnpm build:h5
```

### 微信开发者工具预览

1. 将 `project.config.json` 中的 `appid` 替换为你自己的
2. 在微信公众平台配置 **request 合法域名**、**uploadFile/downloadFile 域名**（与 `BASE_URL`、静态资源一致）
3. 在微信开发者工具中导入项目根目录
4. 关闭开发者工具 IDE 的代码热重载

## 🛠️ 内置能力

### NutUI 组件

全局样式已在 `app.ts` 引入。页面内按需引入组件即可：

```tsx
import { Button, Cell } from '@nutui/nutui-react-taro'

<Button type="primary" onClick={() => {}}>主按钮</Button>
```

完整列表见 [NutUI React Taro 文档](https://nutui.jd.com/taro/react.html)。

### 分享

首页已配置 `enableShareAppMessage` / `enableShareTimeline`，并使用 `useShareAppMessage`、`useShareTimeline` 设置标题与路径；提供 `openType="share"` 的邀请按钮示例。

### 隐私合规

不在 `app.json` 中写 `usePrivacyCheck`（部分开发者工具会报非法字段）；请在**微信公众平台 → 设置 → 基本设置 → 用户隐私保护指引**中按规范配置。若使用相册、定位、剪贴板等能力，还需在 `src/utils/privacy-weapp.ts` 中按需注册 `wx.onNeedPrivacyAuthorization`。

详见 [用户隐私保护指引](https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/)。

### 深色模式

`app.config` 中开启 `darkmode`，`theme.json` 定义亮/暗导航栏与背景色，可在系统深色模式下跟随切换。

### 网络请求

基于 `Taro.request` 封装的统一请求工具，支持拦截器、Token 管理、环境切换：

```ts
import { request } from '@/utils/request'

const data = await request<UserInfo>({ url: '/user/info' })
```

### 状态管理

「我的」页提供 **演示登录 / 退出**（非真实鉴权），与 Zustand 持久化示例一致：

```ts
import { useUserStore } from '@/store'

const userInfo = useUserStore((state) => state.userInfo)
const isLoggedIn = useUserStore((state) => state.isLoggedIn)
const login = useUserStore((state) => state.login)
const logout = useUserStore((state) => state.logout)
```

### 环境变量

通过 `defineConstants` 注入，在 `config/dev.ts` 和 `config/prod.ts` 中独立配置 `BASE_URL`。

### 版本更新检查

提供 `checkForUpdate()` 工具函数，「我的」页已挂载「检查小程序更新」按钮，也可在任意页面调用。

## 📦 包体说明

默认引入 NutUI **全量样式**，首次构建小程序主包 wxss 可能超过 200KB 提示；业务稳定后可按官方文档改为 **按需引入样式** 以减小体积。

## 📋 开发规范

- **Git 提交**：使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范（`feat:`, `fix:`, `docs:` 等），由 commitlint 自动校验
- **代码检查**：`git commit` 时自动通过 lint-staged 运行 ESLint 检查
- **路径别名**：使用 `@/` 指向 `src/` 目录

## 🔗 相关文档

- [Taro 官方文档](https://docs.taro.zone/)
- [NutUI React Taro](https://nutui.jd.com/taro/react.html)
- [weapp-tailwindcss 文档](https://weapp-tw.icebreaker.top/)
- [TailwindCSS 文档](https://tailwindcss.com/docs)
- [Zustand 文档](https://zustand.docs.pmnd.rs/)
