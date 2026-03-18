export type CascaderOption = {
  label: string
  value: string
  children?: CascaderOption[]
}

export const REGION_OPTIONS: CascaderOption[] = [
  {
    label: '浙江省',
    value: 'zj',
    children: [
      {
        label: '杭州市',
        value: 'hz',
        children: [
          { label: '西湖区', value: 'xh' },
          { label: '滨江区', value: 'bj' },
          { label: '余杭区', value: 'yh' },
        ],
      },
      {
        label: '宁波市',
        value: 'nb',
        children: [
          { label: '海曙区', value: 'hs' },
          { label: '鄞州区', value: 'yz' },
        ],
      },
    ],
  },
  {
    label: '广东省',
    value: 'gd',
    children: [
      {
        label: '广州市',
        value: 'gz',
        children: [
          { label: '天河区', value: 'th' },
          { label: '越秀区', value: 'yx' },
        ],
      },
      {
        label: '深圳市',
        value: 'sz',
        children: [
          { label: '南山区', value: 'ns' },
          { label: '福田区', value: 'ft' },
        ],
      },
    ],
  },
]

