import TopNav from '../../_components_global/TopNav'
import BooksClassificationItem from './_components/BooksClassificationItem'
function name() {
  return (
    <>
      <TopNav navIndex={2} />
      <div
        className=" w-[100%] flex h-[90%]  mt-[30px]
         flex-wrap p-[10px] justify-evenly overflow-y-scroll
      "
      >
        {[0, 1, 2, 3].map((el, index) => (
          <BooksClassificationItem key={index} />
        ))}
      </div>
    </>
  )
}

export default name
