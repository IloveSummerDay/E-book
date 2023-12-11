import { randomUUID } from 'crypto'
import dayjs from 'dayjs'
import fs from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'

export const GET = async (req: NextRequest) => {
  console.log('【是谁请求到我了0.0】')
  const { bookType } = Object.fromEntries(req.nextUrl.searchParams)
  // 带着 查询字符串参数 去查询数据库 找到对应书籍
  // ... db
  // const res = [...]
  return NextResponse.json({
    success: true,
    errMessage: '获取数据成功',
    data: [
      {
        title: 'nodejs实战',
        poster: 'https://',
        intro: '我是一条介绍我是一条介绍我是一条介绍'
      },
      {
        title: '222',
        poster: 'https://',
        intro: 'intro222'
      },
      {
        title: '333',
        poster: 'https://',
        intro: 'intro333'
      },
      {
        title: '444',
        poster: 'https://',
        intro: 'intro444'
      },
      {
        title: '555',
        poster: 'https://',
        intro: 'intro555'
      },
      {
        title: '666',
        poster: 'https://',
        intro: 'intro666'
      }
    ]
  })
}

const saveFile = async (blob: any) => {
  const dirName = '/uploads/' + dayjs().format('YYYY-MM-DD')
  const uploadDir = path.join(process.cwd(), 'public' + dirName)
  fs.mkdirSync(uploadDir, {
    recursive: true
  }) // 创建目录
  const fileName = randomUUID() + '.png'
  const arrayBuffer = await blob.arrayBuffer()
  fs.writeFileSync(uploadDir + '/' + fileName, new DataView(arrayBuffer))
  return dirName + '/' + fileName
}
export const POST = async (req: NextRequest, { params }) => {
  const data = await req.formData()
  const fileName = await saveFile(data.get('file'))
  return NextResponse.json({
    success: true,
    errMessage: '上传文件成功',
    data: fileName
  })
}
