import { useEffect } from 'react'

import { Button, ConfigProvider } from 'antd'
function CustomButton(props) {
  useEffect(() => {}, [])
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimaryHover: '#6AA1D2', // 链接按钮悬浮态背景色
          colorPrimary: '#105A9D'
        }
      }}
    >
      <Button {...props}>{props.content}</Button>
    </ConfigProvider>
  )
}

export default CustomButton
