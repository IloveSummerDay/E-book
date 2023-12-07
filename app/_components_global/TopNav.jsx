'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const navs = ['首页', '阅读', '书库', '我的']
const navsRouter = ['home', 'reading-time', 'books-store', 'user-center']

function comp({ navIndex }) {
  const router = useRouter()
  //
  useEffect(() => {
    console.log('【我在顶部导航栏 渲染提交后执行了一次】')
    return () => {
      console.log('【我是一个清理函数】')
    }
  }, [])
  //
  const handleNav = index => {
    console.log('【导航去' + navs[index] + '】')
    router.push(`/${navsRouter[index]}`)
  }

  return (
    <>
      <div className="w-full h-[10%] flex items-center justify-evenly bg-mainHoverColor relative">
        <div className=" flex items-center justify-between h-full w-[40%]">
          {navs.map((el, index) => {
            return (
              <div
                key={index}
                // style={props.navIndex}
                className={`w-auto h-60 flex justify-center 
              items-center pl-[30px] pr-[30px] text-red-600 font-bold 
              cursor-pointer rounded-md 
              ${
                navIndex == index
                  ? 'bg-white text-mainColor'
                  : 'text-white bg-mainColor hover:bg-white hover:text-mainColor'
              }`}
                onClick={() => {
                  handleNav(index)
                }}
              >
                {el}
              </div>
            )
          })}
        </div>
        <div className=" w-[20%] h-full absolute right-[0] flex items-center justify-evenly">
          <a className=" w-[50px] h-[50px] rounded-[25px] cursor-pointer overflow-hidden block">
            <img
              src="/none.png"
              alt=""
              className="w-[50px] h-[50px]"
            />
          </a>
          <div
            className=" w-[40%] h-full flex items-center justify-evenly cursor-pointer text-mainColor font-bold
           hover:text-white"
          >
            登录 | 注册
          </div>
        </div>
      </div>
    </>
  )
}

export default comp
