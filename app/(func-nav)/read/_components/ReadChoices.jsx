import { Popover } from 'antd'

function ReadChoices(params) {
  return (
    <div className=" w-full h-full overflow-y-scroll bg-white flex flex-col items-center">
      {[
        '这是一个描述',
        '这是一个描述',
        '这是一个描述',
        '这是一个描述',
        '这是一个描述',
        '这是一个描述',
        '这是一个描述'
      ].map((book, index) => {
        return (
          <Popover
            placement="right"
            content={
              <div className=" text-white">
                <p>Content</p>
                <p>Content</p>
              </div>
            }
            color="#6AA1D2"
            title={<span className=" text-white">NodeJS实战</span>}
          >
            <img
              src="/none.png"
              alt=""
              // title="This is a tooltip message"
              className=" w-[80%] mt-1"
            />
          </Popover>
        )
      })}
    </div>
  )
}

export default ReadChoices
