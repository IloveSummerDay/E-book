export const metadata = {
  title: 'E-Book Store',
  description: '尽情使用E-Book吧'
}
import RecoilRootZL from '../../_components_global/RecoilRootZL'
/**
 * 与 Pages 不同，Layout 组件不接收 searchParams prop
 * @param {ReactNode} children
 * @param {Object} params
 */
export default function Layout({ children, params }: { children: any; params: any }): JSX.Element {
  return (
    <RecoilRootZL>
      <div className="h-full fl">{children}</div>
    </RecoilRootZL>
  )
}
