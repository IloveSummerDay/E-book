'use client'
import { useParams, usePathname, useSearchParams } from 'next/navigation'

const BooksID = () => {
  const params = useParams() // 读取由当前 URL 填充的路由的动态参数
  const searchParams = useSearchParams() // 读取当前 URL 的查询字符串
  const pathName = usePathname() // 读取当前 URL 的路径名

  console.log('BooksID:', params)
  return (
    <div>
      book id: {params.bookName} - {params.id}
    </div>
  )
}

export default BooksID
