import { NextResponse } from 'next/server'

export const GET = async (req, { params }) => {
  const { searchParams } = new URL(req.url)
  console.log(Object.fromEntries(searchParams))

  return NextResponse.json({
    success: true,
    errMessage: '获取数据成功',
    data: [
      {
        bookName: 'nodeJs实战111',
        bookIndex: '1111'
      },
      {
        bookName: 'nodeJs实战111',
        bookIndex: '2222'
      }
    ]
  })
}
