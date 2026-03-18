import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { Button } from '@nutui/nutui-react-taro'

const Tab1 = () => {
  return (
    <View className='flex flex-col items-center justify-center min-h-screen box-border bg-gray-50 pb-custom-tab-bar'>
      <Text className='text-2xl font-bold text-gray-800 mt-[20vh]'>Tab 1 页面</Text>
      <Text className='text-sm mt-4 text-gray-500'>这是一个示例页面</Text>

      <View className='mt-8 w-full px-6'>
        <Button
          type='primary'
          block
          onClick={() =>
            Taro.navigateTo({
              url: '/subpackages/form-demo/pages/form-demo/index',
            })
          }
        >
          表单 Demo
        </Button>
      </View>
    </View>
  )
}

export default Tab1
