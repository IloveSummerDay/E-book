import TopNav from '../../_components_global/TopNav'
import ReadChoices from './_components/ReadChoices'
import Reader from './_components/reader/Reader'
function reader() {
  return (
    <>
      <TopNav navIndex={1} />
      <div className=" h-[90%] flex">
        <div className=" w-[15%] h-full">
          <ReadChoices />
        </div>
        <Reader />
      </div>
    </>
  )
}

export default reader
