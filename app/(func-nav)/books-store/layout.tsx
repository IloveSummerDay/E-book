export const metadata = {
  title: 'e-book home',
  description: '尽情使用E-Book吧'
}

/**
 * 与 Pages 不同，Layout 组件不接收 searchParams prop
 * @param {ReactNode} children
 * @param {Object} params
 */
export default function LoginPageLayout({ children, params }) {
  return <div className="h-full fl">{children}</div>
}
