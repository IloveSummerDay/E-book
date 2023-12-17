import dynamic from 'next/dynamic'
import TopNav from '../../_components_global/TopNav'
function reader() {
  const Reader = dynamic(() => import('./_components/reader/Reader'), {
    ssr: false
  })
  return (
    <>
      <TopNav navIndex={1} />
      <div className=" h-[90%] flex">
        <Reader />
      </div>
    </>
  )
}

export default reader
