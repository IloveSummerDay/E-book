'use client'

const BooksClassificationItem = ({}) => {
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
  //
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
  }
  return (
    <>
      <div
        className=" w-[40%] h-[500px] border-2 p-1 flex items-start
         flex-col overflow-y-auto  bg-orange mb-[100px]"
      >
        {books.map((book, index) => {
          return (
            <div
              key={index}
              className=" bg-white w-full h-[125px] flex mb-1 rounded-lg"
            >
              <img
                src="/none.png"
                className=" w-[100px] h-[100%] cursor-pointer rounded-lg"
                onClick={() => {
                  console.log('【点击添加封面海报】')
                }}
                alt=""
              />
              <div className=" flex-1 flex justify-evenly flex-col overflow-hidden p-[10px]">
                <span className=" font-bold cursor-pointer text-mainColor">{book.title}</span>
                <p className=" overflow-hidden whitespace-nowrap text-ellipsis ">{book.intro}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default BooksClassificationItem
