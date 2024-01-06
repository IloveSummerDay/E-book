import TopNav from '../../_components_global/TopNav'
import BooksClassificationItem from './_components/BooksClassificationItem'
import LibrarySelectionList from './_components/LibrarySelectionList'
async function page() {
  return (
    <>
      <TopNav navIndex={2} />
      <div
        className=" w-[100%] flex h-[90%]
        overflow-hidden
          bg-orange
      "
      >
        <div className=" h-full w-[15%]">
          <BooksClassificationItem />
        </div>
        <div className=" bg-purple w-[85%] h-[100%] justify-center items-center overflow-hidden">
          {[0].map((el, index) => (
            <LibrarySelectionList key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default page
