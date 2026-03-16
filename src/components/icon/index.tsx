import './index.scss'
import {View} from "@tarojs/components";

function getSvgUrl(mod: string | { default?: string }): string {
  if (typeof mod === 'string') return mod
  return (mod?.default ?? '') as string
}

// 1. 导入 SVG（assets/icons 下所有图标）
const svgAlertCircle = getSvgUrl(require('@/assets/icons/alert-circle.svg'))
const svgBattery = getSvgUrl(require('@/assets/icons/battery.svg'))
const svgBatteryWarning = getSvgUrl(require('@/assets/icons/battery-warning.svg'))
const svgBell = getSvgUrl(require('@/assets/icons/bell.svg'))
const svgBellRing = getSvgUrl(require('@/assets/icons/bell-ring.svg'))
const svgCamera = getSvgUrl(require('@/assets/icons/camera.svg'))
const svgCheck = getSvgUrl(require('@/assets/icons/check.svg'))
const svgCheckCircle2 = getSvgUrl(require('@/assets/icons/check-circle-2.svg'))
const svgCheckSquare = getSvgUrl(require('@/assets/icons/check-square.svg'))
const svgChevronLeft = getSvgUrl(require('@/assets/icons/chevron-left.svg'))
const svgChevronRight = getSvgUrl(require('@/assets/icons/chevron-right.svg'))
const svgClipboardList = getSvgUrl(require('@/assets/icons/clipboard-list.svg'))
const svgClock = getSvgUrl(require('@/assets/icons/clock.svg'))
const svgCreditCard = getSvgUrl(require('@/assets/icons/credit-card.svg'))
const svgDownload = getSvgUrl(require('@/assets/icons/download.svg'))
const svgFingerprint = getSvgUrl(require('@/assets/icons/fingerprint.svg'))
const svgHeart = getSvgUrl(require('@/assets/icons/heart.svg'))
const svgHelpCircle = getSvgUrl(require('@/assets/icons/help-circle.svg'))
const svgHistory = getSvgUrl(require('@/assets/icons/history.svg'))
const svgHome = getSvgUrl(require('@/assets/icons/home.svg'))
const svgImage = getSvgUrl(require('@/assets/icons/image.svg'))
const svgInfo = getSvgUrl(require('@/assets/icons/info.svg'))
const svgKeyRound = getSvgUrl(require('@/assets/icons/key-round.svg'))
const svgLock = getSvgUrl(require('@/assets/icons/lock.svg'))
const svgLogOut = getSvgUrl(require('@/assets/icons/log-out.svg'))
const svgMapPin = getSvgUrl(require('@/assets/icons/map-pin.svg'))
const svgMessageCircle = getSvgUrl(require('@/assets/icons/message-circle.svg'))
const svgMic = getSvgUrl(require('@/assets/icons/mic.svg'))
const svgMoreHorizontal = getSvgUrl(require('@/assets/icons/more-horizontal.svg'))
const svgPhone = getSvgUrl(require('@/assets/icons/phone.svg'))
const svgPlus = getSvgUrl(require('@/assets/icons/plus.svg'))
const svgQrCode = getSvgUrl(require('@/assets/icons/qr-code.svg'))
const svgSearch = getSvgUrl(require('@/assets/icons/search.svg'))
const svgSettings = getSvgUrl(require('@/assets/icons/settings.svg'))
const svgShare2 = getSvgUrl(require('@/assets/icons/share-2.svg'))
const svgShield = getSvgUrl(require('@/assets/icons/shield.svg'))
const svgShieldAlert = getSvgUrl(require('@/assets/icons/shield-alert.svg'))
const svgShieldCheck = getSvgUrl(require('@/assets/icons/shield-check.svg'))
const svgShoppingCart = getSvgUrl(require('@/assets/icons/shopping-cart.svg'))
const svgSparkles = getSvgUrl(require('@/assets/icons/sparkles.svg'))
const svgTruck = getSvgUrl(require('@/assets/icons/truck.svg'))
const svgTrendingUp = getSvgUrl(require('@/assets/icons/trending-up.svg'))
const svgUnlock = getSvgUrl(require('@/assets/icons/unlock.svg'))
const svgUser = getSvgUrl(require('@/assets/icons/user.svg'))
const svgUserCog = getSvgUrl(require('@/assets/icons/user-cog.svg'))
const svgWallet = getSvgUrl(require('@/assets/icons/wallet.svg'))
const svgWrench = getSvgUrl(require('@/assets/icons/wrench.svg'))
const svgX = getSvgUrl(require('@/assets/icons/x.svg'))

// 2. 图标名称类型
export type IconName =
  | 'alert-circle'
  | 'battery'
  | 'battery-warning'
  | 'bell'
  | 'bell-ring'
  | 'camera'
  | 'check'
  | 'check-circle-2'
  | 'check-square'
  | 'chevron-left'
  | 'chevron-right'
  | 'clipboard-list'
  | 'clock'
  | 'credit-card'
  | 'download'
  | 'fingerprint'
  | 'heart'
  | 'help-circle'
  | 'history'
  | 'home'
  | 'image'
  | 'info'
  | 'key-round'
  | 'lock'
  | 'log-out'
  | 'map-pin'
  | 'message-circle'
  | 'mic'
  | 'more-horizontal'
  | 'phone'
  | 'plus'
  | 'qr-code'
  | 'search'
  | 'settings'
  | 'share-2'
  | 'shield'
  | 'shield-alert'
  | 'shield-check'
  | 'shopping-cart'
  | 'sparkles'
  | 'truck'
  | 'trending-up'
  | 'unlock'
  | 'user'
  | 'user-cog'
  | 'wallet'
  | 'wrench'
  | 'x'

// 3. 名称到 SVG 的映射
const svgMap: Partial<Record<IconName, string>> = {
  'alert-circle': svgAlertCircle,
  battery: svgBattery,
  'battery-warning': svgBatteryWarning,
  bell: svgBell,
  'bell-ring': svgBellRing,
  camera: svgCamera,
  check: svgCheck,
  'check-circle-2': svgCheckCircle2,
  'check-square': svgCheckSquare,
  'chevron-left': svgChevronLeft,
  'chevron-right': svgChevronRight,
  'clipboard-list': svgClipboardList,
  clock: svgClock,
  'credit-card': svgCreditCard,
  download: svgDownload,
  fingerprint: svgFingerprint,
  heart: svgHeart,
  'help-circle': svgHelpCircle,
  history: svgHistory,
  home: svgHome,
  image: svgImage,
  info: svgInfo,
  'key-round': svgKeyRound,
  lock: svgLock,
  'log-out': svgLogOut,
  'map-pin': svgMapPin,
  'message-circle': svgMessageCircle,
  mic: svgMic,
  'more-horizontal': svgMoreHorizontal,
  phone: svgPhone,
  plus: svgPlus,
  'qr-code': svgQrCode,
  search: svgSearch,
  settings: svgSettings,
  'share-2': svgShare2,
  shield: svgShield,
  'shield-alert': svgShieldAlert,
  'shield-check': svgShieldCheck,
  'shopping-cart': svgShoppingCart,
  sparkles: svgSparkles,
  truck: svgTruck,
  'trending-up': svgTrendingUp,
  unlock: svgUnlock,
  user: svgUser,
  'user-cog': svgUserCog,
  wallet: svgWallet,
  wrench: svgWrench,
  x: svgX
}



export interface IconProps {
  name: IconName
  className?: string
}


const Icon = ({ name, className = '' }: IconProps)=> {
  const src = svgMap[name]

  if (!src) return null;

  return (
    <View
      // 将你的 tailwind 类名拼接到基础类名后面
      className={`mask-icon-base ${className}`}
      style={{
        // 使用 CSS 变量传值。
        // 必须用单引号包裹外层，双引号包裹内层的 Base64，否则小程序可能解析失败
        '--icon-mask': `url("${src}")`,
      } as React.CSSProperties} // 如果是 TS，需要断言一下，因为默认类型不支持自定义变量
    />
  );
}

export default Icon;
