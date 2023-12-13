'use client'
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'
import BookID from './id'

export default function Book() {
  const router = useRouter()
  const params = useParams() // 读取由当前 URL 填充的路由的动态参数
  const searchParams = useSearchParams() // 读取当前 URL 的查询字符串
  const pathName = usePathname() // 读取当前 URL 的路径名
  console.log('Books:', params)

  return (
    <>
      <h1 onClick={() => router.push('/')}>Book Page {params.bookName}</h1>
      <BookID />
    </>
  )
}
