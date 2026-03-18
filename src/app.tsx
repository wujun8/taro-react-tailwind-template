import { Fragment, PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import { View, Button as TaroButton, Text } from '@tarojs/components'
import '@nutui/nutui-react-taro/dist/style.css'
import { initWeappPrivacyAuthorization } from '@/utils/privacy-weapp'
import './app.scss'

function App({ children }: PropsWithChildren) {
  useLaunch(() => {
    console.log('App launched.')
    initWeappPrivacyAuthorization()
  })

  return (
    <Fragment>
      {/*
        占位：让微信小程序端生成原生 button 等模板，避免 NutUI 与按需编译组合时出现 tmpl_0_xx not found
      */}
      <View
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          overflow: 'hidden',
          opacity: 0,
          pointerEvents: 'none',
        }}
        aria-hidden
      >
        <TaroButton size='mini' plain>
          <Text>.</Text>
        </TaroButton>
      </View>
      {children}
    </Fragment>
  )
}

export default App
