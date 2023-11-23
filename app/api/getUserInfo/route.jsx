import { NextResponse } from 'next/server'

export const GET = async (req, { params }) => {
  const { searchParams } = new URL(req.url)
  console.log(Object.fromEntries(searchParams))

  return NextResponse.json({
    success: true,
    errMessage: '获取数据成功',
    data: [
      {
        account: 'nodeJs实战111 account',
        password: '1111password'
      },
      {
        account: 'nodeJs实战222 account',
        password: '2222password'
      }
    ]
  })
}
