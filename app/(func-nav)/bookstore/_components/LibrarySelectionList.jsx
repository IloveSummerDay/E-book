'use client'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { bookTypeState, booksStoreListState } from '../../stores'
const LibrarySelectionList = ({}) => {
  //
  const [booksStoreList, setBbooksStoreList] = useRecoilState(booksStoreListState)
  const bookType = useRecoilValue(bookTypeState)
  useEffect(() => {
    console.log('【需要更新书库列表了】')
    getBooksStoreList()
    return () => {
      console.log('【我是一个清理函数 --- 】')
    }
  }, [bookType])
  const getBooksStoreList = async () => {
    const res = await fetch(`/api/getBooksStoreList?bookType=${bookType}`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => {
        console.log('【设置新得到的书籍们】', res)
        setBbooksStoreList(res.data)
      })
  }

  return (
    <>
      <div
        className=" w-[100%] h-[100%] border-2 box-border p-1 flex 
        justify-evenly flex-wrap items-baseline
        overflow-y-scroll  bg-orange mb-[100px]"
      >
        <div className="flex flex-wrap w-full justify-evenly">
          {booksStoreList.map((book, index) => {
            return (
              <div
                key={index}
                className=" bg-white w-[400px] h-[125px] flex mb-2 rounded-lg
                cursor-pointer"
              >
                <img
                  src="/none.png"
                  className=" w-[100px] h-[100%] rounded-lg"
                  onClick={() => {
                    alert('点击添加封面海报')
                  }}
                  alt=""
                />
                <div
                  className=" flex-1 flex justify-evenly flex-col overflow-hidden p-[10px]"
                  onClick={() => {
                    alert('点击阅读此书')
                  }}
                >
                  <span className=" font-bold text-mainColor">{book.title}</span>
                  <p className=" overflow-hidden whitespace-nowrap text-ellipsis ">{book.intro}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default LibrarySelectionList
