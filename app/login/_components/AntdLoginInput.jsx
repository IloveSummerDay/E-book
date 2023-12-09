'use client'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Checkbox, Form, Input } from 'antd'
import { useRouter } from 'next/navigation'

function AntdLoginInput() {
  const router = useRouter()
  //
  const handleLoginErr = res => {
    console.log(res)
    alert(res.errMessage)
  }
  const handleRegister = () => {
    alert('注册功能目前无法使用')
  }
  const onFinish = async v => {
    console.log('【登录请求body】', v)
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(v)
    }).then(res => res.json())
    res.success ? router.push('/home') : handleLoginErr(res)
  }

  // retuen
  return (
    <Card
      title="E-Book - 网站登录"
      className="mx-auto w-[30%] h-auto  "
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!'
            }
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!'
            }
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            noStyle
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a
            className=" float-right"
            // href=""
          >
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full"
          >
            Log in
          </Button>
          Or <a>register now!</a>
          {/* href="/register" */}
        </Form.Item>
      </Form>
    </Card>
  )
}

export default AntdLoginInput
