import Link from 'next/link'
/**
 * 与 Pages 不同，Layout 组件不接收 searchParams prop
 * @param {ReactNode} children
 * @param {Object} params
 */
export default function LoginPageLayout({ children, params }) {
  const list = ['账号', '密码']
  const loginInput = list.map((item, index) => (
    <div key={index}>
      <Link href={'/'}>
        {item} + {index}
      </Link>
    </div>
  ))
  console.log(params)
  return (
    <div>
      {loginInput} {children}
    </div>
  )
}
