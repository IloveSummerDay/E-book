export const metadata = {
  title: 'E-Book Login',
  description: '请登录'
}

/**
 * 与 Pages 不同，Layout 组件不接收 searchParams prop
 * @param {ReactNode} children
 * @param {Object} params
 */
export default function LoginPageLayout({ children, params }) {
  const list = ['Account', 'Password']
  return (
    <>
      <div className="h-full bg-mainHoverColor flex items-center flex-col justify-evenly">{children}</div>
    </>
  )
}
