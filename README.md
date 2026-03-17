
# taro-react-tailwind-template

基于 **Taro 4 + React 18 + TailwindCSS** 的微信小程序开发模板，开箱即用。

## ✨ 技术栈

| 技术 | 版本 | 说明 |
|---|---|---|
| [Taro](https://docs.taro.zone/) | 4.x | 跨端开发框架 |
| [React](https://react.dev/) | 18.x | UI 框架 |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | 类型安全 |
| [TailwindCSS](https://tailwindcss.com/) | 3.x | 原子化 CSS |
| [weapp-tailwindcss](https://weapp-tw.icebreaker.top/) | 4.x | 小程序 Tailwind 适配 |
| [Zustand](https://zustand.docs.pmnd.rs/) | 5.x | 轻量状态管理 |
| [pnpm](https://pnpm.io/) | 10.x | 包管理器 |

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
├── utils/        # 公共工具函数
├── app.config.ts # 小程序全局配置
├── app.scss      # 全局样式（TailwindCSS 入口）
└── app.ts        # 应用入口
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
2. 在微信开发者工具中导入项目根目录
3. 关闭开发者工具 IDE 的代码热重载

## 🛠️ 内置能力

### 网络请求

基于 `Taro.request` 封装的统一请求工具，支持拦截器、Token 管理、环境切换：

```ts
import { request } from '@/utils/request'

const data = await request<UserInfo>({ url: '/user/info' })
```

### 状态管理

使用 Zustand 管理全局状态，内置用户 Store 示例：

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

提供 `checkForUpdate()` 工具函数，可在「我的」页面手动触发版本检查。

## 📋 开发规范

- **Git 提交**：使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范（`feat:`, `fix:`, `docs:` 等），由 commitlint 自动校验
- **代码检查**：`git commit` 时自动通过 lint-staged 运行 ESLint 检查
- **路径别名**：使用 `@/` 指向 `src/` 目录

## 🔗 相关文档

- [Taro 官方文档](https://docs.taro.zone/)
- [weapp-tailwindcss 文档](https://weapp-tw.icebreaker.top/)
- [TailwindCSS 文档](https://tailwindcss.com/docs)
- [Zustand 文档](https://zustand.docs.pmnd.rs/)
