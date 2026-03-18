import { useMemo, useRef } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import {
  Address,
  Button,
  Form,
  Input,
  TextArea,
} from '@nutui/nutui-react-taro'
import type { AddressRef } from '@nutui/nutui-react-taro'
import { REGION_OPTIONS } from './cascader-data'
import './index.scss'

const PHONE_RE = /^1\d{10}$/
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const FormDemo = () => {
  const [form] = Form.useForm()
  const region = (Form.useWatch?.('region', form) ?? []) as [string, string, string] | []

  const addressRef = useRef<AddressRef | null>(null)

  const regionLabel = useMemo(() => {
    if (!region || region.length !== 3) return '请选择'
    const [p, c, d] = region
    const province = REGION_OPTIONS.find((x) => x.value === p)
    const city = province?.children?.find((x) => x.value === c)
    const district = city?.children?.find((x) => x.value === d)
    return [province?.label, city?.label, district?.label].filter(Boolean).join(' / ')
  }, [region])

  const handleReset = () => {
    form.resetFields()
    // NutUI Form 的 resetFields 不会触发 useWatch 的 notifyWatch，这里显式清空以同步页面展示/受控值
    form.setFieldValue('region', [] as any)
    addressRef.current?.close?.()
  }

  return (
    <View className='min-h-screen box-border bg-gray-50 pb-6 form-demo-page'>
      <View className='px-3 pt-3'>
        <Form
          form={form}
          divider
          labelPosition='left'
          starPosition='right'
          onFinish={(values) => {
            Taro.showModal({
              title: '提交成功',
              content: JSON.stringify(values, null, 2),
              showCancel: false,
            })
          }}
          onFinishFailed={(_, errors) => {
            Taro.showToast({ title: errors?.[0]?.message || '请完善表单', icon: 'none' })
          }}
          footer={
            <View className='flex flex-row justify-center w-full gap-3'>
              <Button nativeType='submit' type='primary'>
                提交
              </Button>
              <Button nativeType='reset' onClick={handleReset}>
                重置
              </Button>
            </View>
          }
        >
          <Form.Item
            align='center'
            required
            label='姓名'
            name='name'
            rules={[
              { required: true, message: '请填写姓名' },
              { max: 10, message: '姓名最多 10 个字' },
            ]}
          >
            <Input placeholder='必填，最多 10 个字' type='text' />
          </Form.Item>

          <Form.Item
            align='center'
            required
            label='手机号'
            name='phone'
            rules={[
              { required: true, message: '请填写手机号' },
              { validator: (_: any, v: string) => PHONE_RE.test(v || ''), message: '手机号格式不正确' },
            ]}
          >
            <Input placeholder='必填，11 位手机号' type='number' />
          </Form.Item>

          <Form.Item
            align='center'
            label='邮箱'
            name='email'
            rules={[
              { validator: (_: any, v: string) => !v || EMAIL_RE.test(v), message: '邮箱格式不正确' },
            ]}
          >
            <Input placeholder='选填，邮箱格式' type='text' />
          </Form.Item>

          <Form.Item
            label='备注'
            name='remark'
            rules={[{ max: 50, message: '备注最多 50 字' }]}
          >
            <TextArea className='w-full' placeholder='选填，最多 50 字' maxLength={50} showCount />
          </Form.Item>

          <Form.Item
            align='center'
            label='地区'
            name='region'
            rules={[
              { required: true, message: '请选择省 / 市 / 区' },
              { validator: (_: any, v: any) => Array.isArray(v) && v.length === 3, message: '请选择省 / 市 / 区' },
            ]}
            onClick={() => {
              addressRef.current?.open?.()
            }}
          >
            <View
              className='w-full flex flex-row items-center py-2 text-gray-700'
              onClick={() => {
                addressRef.current?.open?.()
              }}
            >
              <View className={regionLabel === '请选择' ? 'text-gray-400' : ''}>{regionLabel}</View>
            </View>
          </Form.Item>
        </Form>
      </View>

      <Address
        ref={addressRef as any}
        defaultVisible={false}
        type='cascader'
        options={REGION_OPTIONS as any}
        value={region as any}
        optionKey={{
          textKey: 'label',
          valueKey: 'value',
          childrenKey: 'children',
        }}
        onChange={(val: any) => {
          const next = (Array.isArray(val) ? val : []) as any
          form.setFieldValue('region', next)
          // 让错误提示/提交校验即时刷新
          form.validateFields?.(['region'])
          addressRef.current?.close?.()
        }}
      />



    </View>
  )
}

export default FormDemo

