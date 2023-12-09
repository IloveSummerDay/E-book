import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
export const POST = async (req: NextRequest) => {
  const { username, password, remember } = await req.json()
  let res: boolean = false
  let avater: any
  console.log(username, password, remember) // admin 111 bool
  // 查询用户数据库，校验是否能登录
  // 获得用户信息...（nickName，  avater...）
  res = true

  // 是否留下cookie --- admin-token | user-avater
  if (remember) {
    cookies().set({
      name: 'admin-token',
      value: username,
      path: '/',
      maxAge: 1 * 24 * 60 * 60
    })
    cookies().set({
      name: 'user-avater',
      value: avater ? avater : '/none.png',
      path: '/',
      maxAge: 1 * 24 * 60 * 60
    })
  }
  // 是否登录成功，NextResponse返回
  if (!res) {
    return NextResponse.json({
      success: false,
      errMessage: '用户或密码不正确'
    })
  }

  return NextResponse.json({
    success: true,
    errMessage: '登录成功'
  })
}
