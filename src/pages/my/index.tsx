import { View } from '@tarojs/components'
import { Button, Cell } from '@nutui/nutui-react-taro'
import { useUserStore } from '@/store'
import { checkForUpdate, randomUUID } from '@/utils'

const My = () => {
  // 不可写成 useUserStore(s => ({ ... }))：每次返回新对象会触发无限更新（React #185）
  const userInfo = useUserStore((s) => s.userInfo)
  const isLoggedIn = useUserStore((s) => s.isLoggedIn)
  const login = useUserStore((s) => s.login)
  const logout = useUserStore((s) => s.logout)

  const handleDemoLogin = () => {
    login(`token_${randomUUID()}`, {
      id: randomUUID().slice(0, 8),
      nickname: '演示用户',
      mobile: '',
      avatar: '',
    })
  }

  return (
    <View className='min-h-screen box-border bg-page pb-custom-tab-bar'>
      <Cell.Group title='账号（Zustand 示例）'>
        <Cell
          title='状态'
          description={isLoggedIn ? `已登录 · ${userInfo?.nickname ?? ''}` : '未登录'}
        />
      </Cell.Group>
      <View className='px-3 mt-3 flex flex-col gap-2'>
        {!isLoggedIn ? (
          <Button type='primary' block onClick={handleDemoLogin}>
            演示登录（非真实鉴权）
          </Button>
        ) : (
          <Button type='default' block onClick={() => logout()}>
            退出登录
          </Button>
        )}
        <Button type='success' plain block onClick={() => checkForUpdate(true)}>
          检查小程序更新
        </Button>
      </View>
    </View>
  )
}

export default My
