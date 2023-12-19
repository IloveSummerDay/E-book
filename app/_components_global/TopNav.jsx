'use client'
import { StarOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons'
import { Menu, Popover } from 'antd'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Button from './Button'
import UploadBookModal from './UploadModal'

const navs = ['首页', '阅读', '书库']
const navsRouter = ['home', 'reading-time', 'books-store']
let avatarTempPath

function TopNav({ navIndex }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const avatarUrl = useRef(session.user.image ? session.user.image : '/none.png')
  const [openUpoladBook, setOpenUpoladBook] = useState(false)

  //
  useEffect(() => {
    console.log('【我在顶部导航栏 渲染提交后执行了一次】')
    console.log('session status ', session, status)

    return () => {
      console.log('【我是一个清理函数】', avatarTempPath)
    }
  }, [])
  //
  const onClickPopoverMenu = e => {
    console.log('【onClickPopoverMenu】', e)
  }

  return (
    <>
      <div className="w-full h-[10%] flex items-center justify-evenly bg-mainHoverColor relative">
        <div className=" flex items-center justify-between h-full w-[40%]">
          {navs.map((el, index) => {
            return (
              <Link
                key={index}
                href={`/${navsRouter[index]}`}
                className={`w-auto h-60 flex justify-center 
              items-center pl-[30px] pr-[30px] font-bold 
              cursor-pointer rounded-md no-underline
              ${
                navIndex == index
                  ? 'bg-white text-mainColor'
                  : 'text-white bg-mainColor hover:bg-white hover:text-mainColor '
              }`}
              >
                {el}
              </Link>
            )
          })}
        </div>

        <div className=" w-[20%] h-full absolute right-[0] flex items-center justify-evenly">
          <a className=" w-[50px] h-[50px] rounded-[25px] cursor-pointer overflow-hidden block">
            <Popover
              placement="bottom"
              title={
                <div className=" font-bold text-mainColor text-center text-[1rem]">
                  <span>姓名：</span>
                  {session.user.name}
                </div>
              }
              content={
                <Menu
                  onClick={onClickPopoverMenu}
                  style={{
                    width: '100%'
                  }}
                  mode="vertical"
                  items={PopoverMenu}
                />
              }
              arrow={false}
            >
              <img
                src={avatarUrl.current}
                alt=""
                className="w-[50px] h-[50px]"
                onClick={() => {
                  alert('此处应该跳转到用户资料路由（/user-center/_id?...）')
                }}
              />
            </Popover>
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
      <UploadBookModal open={openUpoladBook} />
    </>
  )
}
const PopoverMenu = [
  getItem('个人中心', 'sub1', <UserOutlined />, []),
  getItem('图书收藏', 'sub2', <StarOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')])
  ]),
  getItem('个人发布', 'sub4', <UploadOutlined />, [])
]
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  }
}
export default TopNav
