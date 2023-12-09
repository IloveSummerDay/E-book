import TopNav from '../../_components_global/TopNav'
const welcomeMessage = [
  '欢迎来到我们的电子书网站E-Book！在这里，您可以畅游于无尽的文字世界，尽情探寻各种题材的精彩书籍。',
  '无论您是对小说、科幻、历史、自助成长还是其他类型的书籍感兴趣，我们都努力为您提供最丰富、多样的选择。不论您是学习知识、放松娱乐，还是追寻灵感和冒险，我们希望能成为您信赖的阅读伙伴。',
  '我们的使命是为您提供高质量的电子书籍，为您打开一扇通向知识、乐趣和启迪的大门。我们希望您能在我们的网站上找到那些您一直梦寐以求的故事、知识和见解，激发您的思考和想象力。',
  '感谢您选择我们的电子书网站，我们期待为您带来愉快和丰富的阅读体验！如果您有任何疑问或需要帮助，请随时与我们的团队联系。祝您阅读愉快！'
]
function name() {
  return (
    <>
      <TopNav navIndex={0} />

      <div className=" w-60 mx-auto h-[600px]  flex justify-between flex-col">
        <p className=" text-center text-[60px] font-bold mt-[50px] mb-[50px] text-mainColor cursor-pointer hover:text-yellow">
          你好，我的朋友！
        </p>
        {welcomeMessage.map((text, index) => {
          return (
            <p
              key={index}
              className="indent-2 text-mainHoverColor hover:text-yellow cursor-pointer"
            >
              {text}
            </p>
          )
        })}
      </div>
    </>
  )
}

export default name
