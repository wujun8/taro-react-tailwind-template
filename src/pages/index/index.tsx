import { useState } from "react";
import { View } from "@tarojs/components";
import { clsx } from "clsx";
import Icon from "@/components/icon";
import "./index.scss";


const Index = () => {
  const [flag, setFlag] = useState(true);
  const className = clsx(
    flag ? "bg-[#123456]" : "bg-[#654321]",
    "text-white",
    "after:content-['click_here_to_switch_bg_className']",
    'p-[13.3333333px]',
    'rounded-[10086px]'
  );
  const logoClass = clsx(
    "bg-[url(https://pic1.zhimg.com/v2-3ee20468f54bbfefcd0027283b21aaa8_720w.jpg)] bg-[length:100%_100%] bg-no-repeat w-screen h-[41.54vw]"
  );
  return (
    <>
      <View className={logoClass}></View>
      <View className='[&_.u-count-down\_\_text]:!text-sky-400'>
        <View></View>
        <View>
          <View className="u-count-down__text text-[40px] text-center before:content-['taro-react-tailwind-template']"></View>
        </View>
      </View>
      <View className='flex flex-col items-center gap-4'>

        <View className="after:mx-auto after:text-center after:block after:content-['这是一个小程序taro_react_tailwindcss的模板'] after:text-lime-700"></View>
        <View
          className="rounded-lg p-1 bg-gray-100 dark:bg-zinc-800 h-20 w-40 after:text-xs after:content-['this_is_a_hover_block.have_a_try!']"
          hoverClass='bg-red-500 text-[#fff] dark:bg-green-500'
        ></View>

        <View
          className={className}
          onClick={() => {
            setFlag(!flag);
          }}
        ></View>
        <View className='test'></View>
        <View className='w-full flex flex-row justify-center items-center'>
          {/* 默认黑色，大小为 24px (Tailwind 的 w-6) */}
          <Icon name='bell' className='w-6 h-6 text-blue-500' />

          {/* 变成红色的 32px 大小 */}
          <Icon name='home' className='w-8 h-8 text-red-500' />

          {/* 甚至可以响应按压态 (如果在 Tailwind 中配置了 active 变体) */}
          <Icon name='user' className='w-10 h-10 text-gray-400 active:text-blue-500' />
        </View>
      </View>
    </>
  );
};

export default Index;
