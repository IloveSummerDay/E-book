'use client'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import { ConfigProvider, Menu } from 'antd'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { bookTypeState } from '../stores'

// menu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3']
export default function BooksClassificationItem() {
  const [openKeys, setOpenKeys] = useState(['sub1'])
  const [_bookTypeState, set_bookTypeState] = useRecoilState(bookTypeState)
  // 点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。
  // @param key [v1, v2] --- v1:要关闭的菜单 v2：要打开的菜单
  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }
  // 更新 LibrarySelList组件内 的图书列表，实现书库书籍对应分类查找
  const handleUpdataBookLib = ({ key, keyPath, selectedKeys, domEvent }) => {
    // key -> 唯一标识，可以拿来做接口param
    console.log(key)
    set_bookTypeState(key)
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemSelectedColor: '#105A9D',
            itemSelectedBg: '#6AA1D2',
            iconSize: 20
          }
        }
      }}
    >
      <Menu
        className="h-full"
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onSelect={handleUpdataBookLib}
        style={{
          width: '100%'
        }}
        items={classifications}
      />
    </ConfigProvider>
  )
}

const classifications = [
  getItem('图书种类一', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4')
  ]),
  getItem('图书种类二', 'sub2', <AppstoreOutlined />, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
  getItem('图书种类三', 'sub3', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12')
  ])
]
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  }
}
