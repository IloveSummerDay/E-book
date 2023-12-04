import { randomUUID } from 'crypto'
import dayjs from 'dayjs'
import fs from 'fs'
import { NextResponse } from 'next/server'
import path from 'path'

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

const saveFile = async blob => {
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
export const POST = async (req, { params }) => {
  const data = await req.formData()
  const fileName = await saveFile(data.get('file'))
  return NextResponse.json({
    success: true,
    errMessage: '上传文件成功',
    data: fileName
  })
}
