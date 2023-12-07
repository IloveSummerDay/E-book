import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  const loginInfo = await req.json()
  console.log(loginInfo.userName, loginInfo.password) // admin 111

  return NextResponse.json(
    {
      success: true,
      errMessage: '登录成功'
    },
    {
      headers: {
        'Set-Cookie': `admin-token=${loginInfo.userName};Path=/`
      }
    }
  )
}
