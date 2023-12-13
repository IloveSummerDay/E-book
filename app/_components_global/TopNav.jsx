'use client'
import { UploadOutlined } from '@ant-design/icons'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Button from './Button'
import UploadModal from './UploadModal'

const navs = ['首页', '阅读', '书库', '我的']
const navsRouter = ['home', 'reading-time', 'books-store', 'user-center']
let avatarTempPath

function TopNav({ navIndex }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [avatarUrl, setAvatar] = useState('')
  const [openUpoladBook, setOpenUpoladBook] = useState(false)
  //
  useEffect(() => {
    console.log('【我在顶部导航栏 渲染提交后执行了一次】')
    if (session) {
      console.log('session', session)
    }
    try {
      avatarTempPath = session.user.image ? session.user.image : '/none.png'
    } catch (e) {
      avatarTempPath = '/none.png'
    }
    setAvatar(avatarTempPath)
    return () => {
      console.log('【我是一个清理函数】', avatarTempPath)
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
              src={avatarUrl}
              alt=""
              className="w-[50px] h-[50px]"
              onClick={() => {
                alert('此处应该跳转到用户资料路由（/user-center/_id?...）')
              }}
            />
          </a>
          <Button
            type="primary"
            shape="round"
            className=" font-bold "
            icon={<UploadOutlined className="" />}
            size="large"
            content="上传图书"
            onClick={() => {
              setOpenUpoladBook(!openUpoladBook)
            }}
          />
        </div>
      </div>
      <UploadModal open={openUpoladBook} />
    </>
  )
}

export default TopNav
