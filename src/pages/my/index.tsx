import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { Button, Cell } from '@nutui/nutui-react-taro'
import { useUserStore } from '@/store'
import { checkForUpdate, randomUUID } from '@/utils'
import Icon from '@/components/icon'

const My = () => {
  // 不可写成 useUserStore(s => ({ ... }))：每次返回新对象会触发无限更新（React #185）
  const userInfo = useUserStore((s) => s.userInfo)
  const isLoggedIn = useUserStore((s) => s.isLoggedIn)
  const login = useUserStore((s) => s.login)
  const logout = useUserStore((s) => s.logout)

  // @ts-ignore - 由 defineConstants 注入
  const appVersion = typeof APP_VERSION !== 'undefined' ? APP_VERSION : ''

  const cellTitle = (iconName: Parameters<typeof Icon>[0]['name'], label: string) => (
    <View className='flex flex-row items-center gap-2'>
      <Icon name={iconName} className='w-5 h-5 text-gray-400' />
      <View>{label}</View>
    </View>
  )

  const cellExtra = (text?: string) => (
    <View className='flex flex-row items-center gap-1 text-gray-400'>
      {text ? <View className='text-xs'>{text}</View> : null}
      <Icon name='chevron-right' className='w-4 h-4 text-gray-300' />
    </View>
  )

  const handleDemoLogin = () => {
    login(`token_${randomUUID()}`, {
      id: randomUUID().slice(0, 8),
      nickname: '演示用户',
      mobile: '',
      avatar: '',
    })
  }

  return (
    <View className='min-h-screen box-border bg-page pb-custom-tab-bar flex flex-col'>
      <View className='flex-1'>
        <Cell.Group title='账号（Zustand 示例）'>
          <Cell
            title='状态'
            description={isLoggedIn ? `已登录 · ${userInfo?.nickname ?? ''}` : '未登录'}
          />
        </Cell.Group>

        <View className='px-3'>
          <Cell.Group title='菜单示例'>
            <Cell
              align='center'
              title={cellTitle('clipboard-list', '菜单 1')}
              description='示例菜单项'
              extra={cellExtra()}
              clickable
              onClick={() => Taro.showToast({ title: '点击了菜单 1', icon: 'none' })}
            />
            <Cell
              align='center'
              title={cellTitle('sparkles', '菜单 2')}
              description='示例菜单项'
              extra={cellExtra()}
              clickable
              onClick={() => Taro.showToast({ title: '点击了菜单 2', icon: 'none' })}
            />
            <Cell
              align='center'
              title={cellTitle('settings', '检查小程序更新')}
              extra={cellExtra(appVersion ? `v${appVersion}` : '')}
              clickable
              onClick={() => checkForUpdate(true)}
            />
          </Cell.Group>
        </View>
      </View>

      <View className='px-3 pb-3 mt-auto flex flex-col gap-2'>
        {!isLoggedIn ? (
          <Button type='primary' block onClick={handleDemoLogin}>
            演示登录（非真实鉴权）
          </Button>
        ) : (
          <Button type='default' block onClick={() => logout()}>
            退出登录
          </Button>
        )}
      </View>
    </View>
  )
}

export default My
