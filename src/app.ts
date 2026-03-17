import { PropsWithChildren } from 'react';
import { useLaunch } from '@tarojs/taro';
import { useUserStore } from "@/store";
import { randomUUID } from "@/utils";
import './app.scss';

function App({ children }: PropsWithChildren) {
  const userInfo = useUserStore((state) => state.userInfo)
  const login = useUserStore((state) => state.login)

  useLaunch(() => {
    console.log('App launched.')
    login('token' + randomUUID(), {
      id: '123456', nickname: 'demoname',
      mobile: "",
      avatar: ""
    })
    console.log('userInfo', userInfo)
  })

  // children 是将要会渲染的页面
  return children
}

export default App
