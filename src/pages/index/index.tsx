import { useState } from 'react'
import { View } from '@tarojs/components'
import { useShareAppMessage, useShareTimeline } from '@tarojs/taro'
import { clsx } from 'clsx'
import { Button, Cell } from '@nutui/nutui-react-taro'
import Icon from '@/components/icon'
import './index.scss'

const SHARE_TITLE = 'Taro + React + Tailwind + NutUI 模板'

const Index = () => {
  const [flag, setFlag] = useState(true)

  useShareAppMessage(() => ({
    title: SHARE_TITLE,
    path: '/pages/index/index',
  }))

  useShareTimeline(() => ({
    title: SHARE_TITLE,
  }))

  const className = clsx(
    flag ? 'bg-[#123456]' : 'bg-[#654321]',
    'text-white',
    "after:content-['click_here_to_switch_bg_className']",
    'p-[7px]',
    'rounded-[10086px]',
  )
  const logoClass = clsx(
    'bg-[url(https://pic1.zhimg.com/v2-3ee20468f54bbfefcd0027283b21aaa8_720w.jpg)] bg-[length:100%_100%] bg-no-repeat w-screen h-[41.54vw]',
  )

  return (
    <View className='min-h-screen box-border pb-custom-tab-bar'>
      <View className={logoClass} />
      <View className='[&_.u-count-down\_\_text]:!text-sky-400'>
        <View />
        <View>
          <View className="u-count-down__text text-[20px] text-center before:content-['taro-react-tailwind-template']" />
        </View>
      </View>

      <View className='px-3 py-4'>
        <Cell.Group title='NutUI React（Taro）'>
          <Cell title='说明' description='与 Tailwind 混用：布局可用 Tailwind，表单/弹层等可用 NutUI' />
          <Cell
            title='分享'
            description='右上角可转发好友 / 朋友圈（本页已开启）'
          />
        </Cell.Group>
        <View className='mt-3 flex flex-col gap-2'>
          <Button type='primary' block onClick={() => setFlag(!flag)}>
            NutUI 按钮：切换下方色块
          </Button>
          <Button type='default' block openType='share'>
            邀请好友（openType=share）
          </Button>
        </View>
      </View>

      <View className='flex flex-col items-center gap-4 px-3'>
        <View className="after:mx-auto after:text-center after:block after:content-['Tailwind_示例区'] after:text-lime-700 after:text-sm" />
        <View
          className="rounded-lg p-1 bg-gray-100 dark:bg-zinc-800 h-10 w-36 after:text-xs after:content-['hover_试试']"
          hoverClass='bg-red-500 text-[#fff] dark:bg-green-500'
        />
        <View
          className={className}
          onClick={() => {
            setFlag(!flag)
          }}
        />
        <View className='test' />
        <View className='w-full flex flex-row justify-center items-center gap-2'>
          <Icon name='bell' className='w-6 h-6 text-blue-500' />
          <Icon name='home' className='w-6 h-6 text-red-500' />
          <Icon name='user' className='w-8 h-8 text-gray-400 active:text-blue-500' />
        </View>
      </View>
    </View>
  )
}

export default Index
