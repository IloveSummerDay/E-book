export const metadata = {
  title: 'E-Book Reading',
  description: '尽情使用E-Book吧'
}

/**
 * 与 Pages 不同，Layout 组件不接收 searchParams prop
 * @param {ReactNode} children
 * @param {Object} params
 */
export default function PageLayout({ children, params }) {
  return <div className="h-full">{children}</div>
}
