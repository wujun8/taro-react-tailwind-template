import { View, Text } from "@tarojs/components";

const My = () => {
  return (
    <View className='flex flex-col items-center justify-center min-h-screen bg-gray-50'>
      <Text className='text-2xl font-bold text-gray-800 mt-[20vh]'>我的 页面</Text>
      <Text className='text-sm mt-4 text-gray-500'>这是个人中心示例页面</Text>
    </View>
  );
};

export default My;
