import { NextResponse } from 'next/server'
import { prisma } from '/db/prisma'

export const GET = async (req, { params }) => {
  const data = await prisma.user.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return NextResponse.json({
    success: true,
    errMessage: '获取数据成功',
    data
  })
}

export const POST = async req => {
  const { searchParams } = new URL(req.url)
  const data = await req.json()
  let success
  // console.log(Object.fromEntries(searchParams))

  try {
    const newUser = await prisma.user.create({
      data
    })
    success = true
  } catch (error) {
    success = false
    console.log('创建数据时发生错误 --- 错误原因', error)
  }

  return NextResponse.json({
    success,
    errMessage: success ? '创建数据成功' : '创建数据失败'
  })
}
