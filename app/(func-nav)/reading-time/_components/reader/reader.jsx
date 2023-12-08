'use client'
import { useState } from 'react'
import './style.module.css'

function reader() {
  const [isFlipped, setIsFlipped] = useState(false)
  const flipPage = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <>
      <div className={`book ${isFlipped ? 'flipped' : ''} mx-auto`}>
        <div className="page bg-black absolutee left-[0px] z-10">
          {/* 前一页内容 */}
          <h1>Page</h1>
        </div>
        <div className="page front-page origin-left bg-yellow">
          {/* 前一页内容 */}
          <h1>Front Page</h1>
        </div>
        <div className="page back-page origin-left bg-purple">
          {/* 后一页内容 */}
          <h1>Back Page</h1>
        </div>
        <div className="page back-page origin-left bg-white">
          {/* 后一页内容 */}
          <h1>End Page</h1>
        </div>
      </div>
      <button
        onClick={flipPage}
        className=" w-[100px] h-[100px] mx-auto block"
      >
        翻页
      </button>
    </>

    // <div className=" w-80 h-[500px] bg-purple mx-auto flex justify-center">
    //   <div
    //     onClick={handleTurn}
    //     className={` origin-left ${
    //       turn ? 'rotate-180 bg-mainHoverColor w-[40%] h-full ' : ' w-[40%] h-full bg-mainColor'
    //     }  cursor-pointer`}
    //   ></div>
    // </div>
  )
}

export default reader
