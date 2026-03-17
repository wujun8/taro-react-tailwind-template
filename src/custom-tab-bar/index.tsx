import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'
import Icon, { IconName } from '../components/icon'

const list: { pagePath: string; text: string; icon: IconName }[] = [
  { pagePath: '/pages/index/index', text: '首页', icon: 'home' },
  { pagePath: '/pages/tab1/index', text: 'Tab1', icon: 'sparkles' },
  { pagePath: '/pages/my/index', text: '我的', icon: 'user' }
]

export default function CustomTabBar() {
  // 1. 根据当前页面路由，派生 selectedIndex 状态
  const router = Taro.getCurrentInstance().router
  const currentPath = router?.path || ''
  const pathWithSlash = currentPath.startsWith('/') ? currentPath : `/${currentPath}`
  const selectedIndex = list.findIndex(item => item.pagePath === pathWithSlash)
  const selected = selectedIndex !== -1 ? selectedIndex : 0

  const switchTab = (url: string) => {
    Taro.switchTab({ url })
  }

  // 2. 布局优化：外层 View 去掉定高 `h-[56px]`, 靠内容撑开，并添加 pt-1 和 pb-2
  //    内层包裹每一个 item 的容器，保持一致的高度比如 `h-[112rpx]`
  return (
    <View className='bg-white/90 backdrop-blur-md border-t border-gray-100 pb-2 pt-1 transform-gpu shadow-sm'>
      <View className='flex flex-row justify-around items-center h-[112rpx]'>
        {list.map((item, index) => {
          const isSelected = selected === index
          return (
            <View
              key={item.pagePath}
              className='flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 ease-in-out active:scale-95'
              onClick={() => switchTab(item.pagePath)}
            >
              <View className={`transition-all duration-300 ${isSelected ? '-translate-y-1' : ''}`}>
                <Icon
                  name={item.icon}
                  className={`w-7 h-7 transition-colors duration-300 ${isSelected ? 'text-blue-500' : 'text-gray-400'}`}
                />
              </View>
              <Text
                className={`text-xs mt-1 font-medium transition-colors duration-300 ${isSelected ? 'text-blue-500' : 'text-gray-400'}`}
              >
                {item.text}
              </Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}
