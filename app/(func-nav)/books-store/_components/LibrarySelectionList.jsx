'use client'
import { useRecoilValue } from 'recoil'
import { bookTypeState } from '../stores'
const books = [
  {
    title: 'nodejs实战',
    poster: 'https://',
    intro: '我是一条介绍我是一条介绍我是一条介绍'
  },
  {
    title: '222',
    poster: 'https://',
    intro: 'intro222'
  },
  {
    title: '333',
    poster: 'https://',
    intro: 'intro333'
  },
  {
    title: '444',
    poster: 'https://',
    intro: 'intro444'
  },
  {
    title: '555',
    poster: 'https://',
    intro: 'intro555'
  },
  {
    title: '666',
    poster: 'https://',
    intro: 'intro666'
  }
]
const LibrarySelectionList = ({}) => {
  //
  const bookType = useRecoilValue(bookTypeState)
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
  }
  return (
    <>
      <div
        className=" w-[100%] h-[100%] border-2 box-border p-1 flex 
        justify-evenly flex-wrap items-baseline
        overflow-y-scroll  bg-orange mb-[100px]"
      >
        <div className="flex flex-wrap w-full justify-evenly">
          {books.map((book, index) => {
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
                  <p className=" overflow-hidden whitespace-nowrap text-ellipsis ">
                    {book.intro} + {bookType}
                  </p>
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
