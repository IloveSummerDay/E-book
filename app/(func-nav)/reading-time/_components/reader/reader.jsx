'use client'
import { LeftOutlined, RightOutlined, UnorderedListOutlined, createFromIconfontCN } from '@ant-design/icons'
import { Drawer } from 'antd'
import { useState } from 'react'
import Button from '../../../../_components_global/Button'
function Reader() {
  const [open, setOpen] = useState(false)
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_4366447_gy28t8uk3wp.js '
  })
  const getPageContent = () => {
    alert('获取上/下页内容')
    // fetch('/api/getBookCOntent?bookid=xxx&admin-user=xxxuserxxx')
  }
  const handleChangeCatalog = () => {
    alert('切换目录，书籍内容变化')
  }

  return (
    <>
      <div className=" w-full h-full flex justify-center  bg-yellow relative">
        {/* reader-box：内容真正显示的地方，相当于书本的左右两页 */}
        <div
          className=" w-[90%] h-[80%] bg-mainHoverColor absolute top-[5%] flex"
          style={{ boxShadow: '5px 5px 10px #ccc' }}
        >
          {[1, 2].map((el, index) => {
            return (
              <div
                key={index}
                className=" w-[50%] h-full bg-white p-1 box-border whitespace-normal"
                style={{ borderRight: index == 0 ? '2px solid #ccc' : '0' }} // 左右两页分界线
              >
                <p
                  className=" break-words pt-[10px] max-h-[100%] overflow-hidden"
                  style={{ textIndent: '2em' }}
                >
                  我我我我我我我我我我我我我我我我
                </p>
              </div>
            )
          })}
        </div>

        <div className=" absolute bottom-[5%] w-full flex justify-evenly items-center">
          {[
            { content: '上一页', icon: <LeftOutlined /> },
            { content: '目录', icon: <UnorderedListOutlined /> },
            { content: '下一页', icon: <RightOutlined /> }
          ].map((btn, index) => (
            <Button
              key={index}
              onClick={
                index !== 1
                  ? () => {
                      getPageContent()
                    }
                  : () => {
                      setOpen(true)
                    }
              }
              content={btn.content}
              type="primary"
              shape="round"
              size="large"
              icon={btn.icon}
              className={`font-bold ${index == 2 ? '' : ''}`}
            />
          ))}
        </div>
      </div>
      <Drawer
        title="目录"
        placement="left"
        closable={false}
        onClose={() => {
          setOpen(false)
        }}
        width={300}
        open={open}
      >
        {[
          {
            _id: 1,
            bookMark: 'Node基础知识介绍',
            checked: true
          },
          {
            _id: 2,
            bookMark: 'Node基础知识介绍基础知识介绍基础知识介绍基础知识介绍',
            checked: false
          },
          {
            _id: 3,
            bookMark: 'Node基础知识介绍',
            checked: false
          }
        ].map((catalogs, index) => {
          return (
            <p
              key={catalogs._id}
              className={`mb-1 text-[1rem] cursor-pointer hover:bg-yellow p-[5px] rounded-md 
              ${catalogs.checked ? ' bg-yellow' : ''}`}
              onClick={handleChangeCatalog}
            >
              {' '}
              <IconFont
                type="icon-bookmark"
                className=" mr-[10px]"
              />
              {catalogs.bookMark}
            </p>
          )
        })}
      </Drawer>
    </>
  )
}

export default Reader
