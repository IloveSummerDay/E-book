import { NextResponse } from 'next/server'

export const POST = req => {
  return NextResponse.json(
    {
      success: true,
      errMessage: '登录成功'
    },
    {
      headers: {
        'Set-Cookie': 'admin-token=123;Path=/'
      }
    }
  )
}
