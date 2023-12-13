'use client'
import { GithubOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, Spin } from 'antd'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
function AntdLoginInput() {
  const router = useRouter()
  const [logining, setLoginIng] = useState(false)
  //
  // 使用 Username 和 Password 进行登录
  const handleNormalSubmit = async formData => {
    console.log(formData)
    setLoginIng(true)
    signIn('credentials', {
      ...formData,
      redirect: false
    }).then(res => {
      console.log(res)
      setTimeout(() => {
        setLoginIng(false)
        if (res.ok) {
          router.push('/home')
        } else {
          handleLoginErr('【用户不存在，需要注册】')
        }
      }, 1000)
    })
  }
  // 使用 GitHub 进行授权登录
  // const handleGitHubAuth = () => {
  //   console.log('github')
  //   signIn('github', {
  //     callbackUrl: '/home'
  //   })
  // }

  const handleLoginErr = res => {
    console.log(res)
    alert(res)
  }
  const handleRegister = () => {
    alert('注册功能目前无法使用')
  }

  // retuen
  return (
    <>
      <Spin
        spinning={logining}
        fullscreen
      />
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
          onFinish={handleNormalSubmit}
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
          {/* <Form.Item className="pl-[5px]"> */}
          <div className="pl-[5px] w-full h-2">
            <GithubOutlined
              style={{ fontSize: '1.2rem' }}
              className=" cursor-pointer"
              onClick={handleGitHubAuth}
            />
            <a
              className=" float-right"
              // href=""
            >
              Forgot password
            </a>
          </div>
          {/* </Form.Item> */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
            >
              Log in
            </Button>
            Or <a onClick={handleRegister}>register now!</a>
            {/* href="/register" */}
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}

export default AntdLoginInput
