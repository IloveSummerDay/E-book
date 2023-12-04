'use client'
import { Button, Card, Form, Input } from 'antd'
import { useRouter } from 'next/navigation'

function LoginInput() {
  const router = useRouter()

  return (
    <div className="login-form pt-20">
      <Card
        title="E-Book网站登录"
        className="mx-auto w-4/5"
      >
        <Form
          labelCol={{ span: 3 }}
          onFinish={async v => {
            const res = await fetch('/api/login', {
              method: 'POST',
              body: JSON.stringify(v)
            }).then(res => res.json())
            console.log(res)
            router.push('/')
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
          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default LoginInput
