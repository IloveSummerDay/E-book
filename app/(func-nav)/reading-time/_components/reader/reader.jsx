'use client'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import Button from '../../../../_components_global/Button'
function Reader() {
  const getPageContent = () => {
    alert('获取上/下页内容')
    // fetch('/api/getBookCOntent?bookid=xxx&admin-user=xxxuserxxx')
  }

  return (
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

      <div className=" absolute bottom-[5%] w-full flex justify-evenly items-center ">
        {[
          { content: '上一页', icon: <LeftOutlined /> },
          { content: '下一页', icon: <RightOutlined /> }
        ].map((btn, index) => (
          <Button
            key={index}
            onClick={() => {
              getPageContent()
            }}
            content={btn.content}
            type="primary"
            shape="round"
            size="large"
            icon={btn.icon}
            className="font-bold"
          />
        ))}
      </div>
    </div>
  )
}

export default Reader
