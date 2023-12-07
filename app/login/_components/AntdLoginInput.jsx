'use client'
import { Button, Card, Form, Input } from 'antd'
import { useRouter } from 'next/navigation'

function AntdLoginInput() {
  const router = useRouter()

  return (
    <div className="login-form h-full flex justify-center items-center">
      <Card
        title="E-Book - 网站登录"
        className="mx-auto w-1/5 h-auto"
      >
        <Form
          labelCol={{ span: 3 }}
          onFinish={async v => {
            const res = await fetch('/api/login', {
              method: 'POST',
              body: JSON.stringify(v)
            }).then(res => res.json())
            console.log(res)
            router.push('/home')
          }}
        >
          <Form.Item
            name="userName"
            label="用户名"
          >
            <Input placeholder="请输入用户名"></Input>
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
          >
            <Input placeholder="请输入密码"></Input>
          </Form.Item>
          <Form.Item className="w-40 mx-auto ">
            <Button
              block
              type="primary"
              htmlType="submit"
            >
              登录
            </Button>
          </Form.Item>
          <Form.Item className="w-40 mx-auto ">
            <Button
              block
              type="default"
              htmlType="submit"
            >
              注册
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default AntdLoginInput
