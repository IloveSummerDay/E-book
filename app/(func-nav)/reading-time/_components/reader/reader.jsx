'use client'
import { LeftOutlined, RightOutlined, UnorderedListOutlined, createFromIconfontCN } from '@ant-design/icons'
import { Drawer, Slider } from 'antd'
import ePub from 'epubjs'
import { useEffect, useRef, useState } from 'react'
import Button from '../../../../_components_global/Button'
let ePubBook = null
let lastChoosed = null

function Reader() {
  const [open, setOpen] = useState(false)
  const [book, setBook] = useState({})
  const [rendition, setRendition] = useState(null)
  const [themes, setThemes] = useState(null)
  const [catalogs, setCatalogs] = useState([])
  const [percentage, setPercentage] = useState(0)
  const [readHref, setReadHref] = useState('') // 用户上次阅读进度 readHref
  const popoverRef = useRef(null)
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_4366447_gy28t8uk3wp.js '
  })

  useEffect(() => {
    showEpub()
    return () => {
      ePubBook.destroy()
      ePubBook = null
      console.log('【清理之后的ePubBook】', ePubBook)
    }
  }, [])

  const showEpub = () => {
    ePubBook = ePub('/nodeJS.epub', { preload: true })

    // readt hook
    ePubBook.ready.then(async res => {
      // 获取书籍的元数据
      const metadata = ePubBook.package.metadata

      // book.rendition
      // 有关渲染结果和控制渲染的操作方法
      const rendition = ePubBook.renderTo('reader', {
        snap: true, // 内容将被自动吸附到容器的边界，使其水平对齐
        flow: 'paginated', // 设置布局模式为分页模式
        width: '100%',
        height: '100%',
        spread: 'none', // none-单栏 both-两栏
        allowScriptedContent: true
        // 单页滚动显示epub，推荐加上下面两个属性
        // manager: 'continuous',
        // flow: 'scrolled'
      })

      // 主题
      const themes = rendition.themes
      themes.register({
        //注册几个主题，使用this.themes.update('night')切换主题
        night: { body: { 'background-color': '#0f1112', color: 'white' } },
        day: { body: { 'background-color': 'rgb(246, 241, 231)', color: '#262626' } }
      })
      themes.fontSize('20px') //设置字体大小
      rendition.themes.select('day')

      // 监听进度变化: 实时保存阅读进度 (已弃用)
      // readingProgressSection的属性: end || start || percentage || index || href
      // rendition.on('locationChanged', readingProgressSection => {
      //   const progress = Math.floor(readingProgressSection.percentage * 100)
      //   console.log('【监听页面位置变化时触发 end - progress】', readingProgressSection.end, progress)
      //   setReadHref(readingProgressSection) // 实时保存阅读进度
      //   // setPercentage(progress) // 更新进度条
      // })

      rendition.on('selected', (cfiRange, contents) => {
        // 获取选中范围
        let chooseRange = contents.window.getSelection().getRangeAt(0)
        const window = contents.window
        const { top, left } = chooseRange.getBoundingClientRect()
        // console.log(popoverRef.current, popoverRef.current.style.width)
        // popoverRef.current.style.top = `${top}px`
        // popoverRef.current.style.left = `${left}px`
        // popoverRef.current.style.display = 'block'
        // popoverRef.current.style.zIndex = '1000'
        console.log(
          '【选中内容 位置 - 内容】',
          cfiRange,
          contents,
          chooseRange,
          chooseRange.getBoundingClientRect(),
          chooseRange.toString()
        )
        if (chooseRange.toString() !== lastChoosed) {
          console.log('【所选内容和上次不同】')
          lastChoosed = chooseRange.toString()
        } else {
          // 提示所选内容和上次一致
          return
        }
        // 创建标记
        // let marker = document.createElement('span')
        // marker.style.backgroundColor = 'yellow' // 设置高亮颜色
        // marker.style.color = '#000'
        // marker.style.cursor = 'pointer'
        // marker.style.fontWeight = 'bold'

        // // 将选中范围用标记包裹起来
        // chooseRange.surroundContents(marker)

        // // highlight
        // rendition.annotations.highlight(
        //   cfiRange,
        //   { test: '测试' }, // 第二个参数可以是个对象比如 {id: id}会添加在dom的自定义属性 data-id="id"
        //   function (e) {
        //     // 点击高亮区域时回调 || 在这可以拿到第二个参数的值
        //     // e.target.dataset // 第二个参数 所添加自定义属性的值 原生附带一个epubcfi
        //     console.log('【点击了高亮选中内容】', e)
        //   },
        //   '', // className: CSS class to assign to annotation
        //   {
        //     color: 'white',
        //     fill: 'red', // // 设置样式，fill更改高亮颜色
        //     cursor: 'pointer'
        //   }
        // )
        // // underline
        // rendition.annotations.underline(cfiRange, {}, function () {}, 'className', {
        //   'background-color': 'rgba(255, 255, 0, 0.5)'
        // })
        // 删除高亮
        // annotations.remove(cfiRange, 'highlight')
        // // 添加
        // rendition.annotations.add(cfiRange, 'highlight|underline|mark')
        // // 取消
        // rendition.annotations.remove(cfiRange, 'highlight|underline|mark')
      })

      // locations 位置标识 获取位置“总表”来【初始化】进度条
      const locations = ePubBook.locations.generate().then(() => {
        if (readHref) {
          const progress = Math.ceil(ePubBook.locations.percentageFromCfi(readHref) * 100)
          console.log('【初始化进度条】', progress)
          rendition.display(readHref) // readingProgressSection.end 定位更准确一点
          setPercentage(progress)
        } else {
          rendition.display()
        }
      })

      setRendition(rendition)
      setBook(ePubBook)
      setThemes(themes)
      setCatalogs(ePubBook.navigation.toc)
      console.log(
        '【ePubBook ready】',
        res,
        ePubBook,
        metadata,
        rendition,
        ePubBook.navigation.length,
        ePubBook.navigation.toc
      )
    })

    // 获取到书籍封面
    // await ePubBook.loaded.cover.then(async function (cover) {
    //   await ePubBook.archive.createUrl(cover).then(url => {
    //     let bookCover = url
    //     console.log(bookCover)
    //   })
    // })
  }

  const handleSaveReadProgress = () => {
    const currentLocation = rendition.currentLocation().end.cfi
    const progress = Math.ceil(book.locations.percentageFromCfi(currentLocation) * 100)
    console.log('【点击切换页后，当前阅读位置 标识CFI和进度条值】', currentLocation, progress)
    setReadHref(currentLocation) // 实时保存阅读进度
    setPercentage(progress)
  }
  const handleChangeCatalog = href => {
    console.log('【切换目录，书籍内容变化】' + href)
    rendition.display(href).then(() => {
      handleSaveReadProgress()
    })
  }

  return (
    <>
      <div className=" w-full h-full flex justify-center  bg-purple relative">
        <div
          id="reader"
          className=" w-[90%] h-[80%] absolute top-[5%] overflow-scroll"
        ></div>
        <div className=" absolute bottom-[10%] w-[90%]">
          <Slider
            min={1}
            max={100}
            className=" w-full"
            value={typeof percentage === 'number' ? percentage : 0}
            tooltip={{
              open: true
            }}
            onChange={value => {
              setPercentage(value)
            }}
            onChangeComplete={value => {
              // 获取当前位置的百分比
              const cfi = book.locations.cfiFromPercentage(value / 100)
              console.log('【Slider onChangeComplete 位置信息start - end】', cfi, value, value / 100)
              rendition.display(cfi)
            }}
          />
        </div>

        <div className=" absolute bottom-[2%] w-full flex justify-evenly items-center">
          {[
            {
              content: '',
              icon: <LeftOutlined />,
              onClick: () => {
                rendition.prev()
                handleSaveReadProgress()
              }
            },
            {
              content: '',
              icon: <RightOutlined />,
              onClick: () => {
                rendition.next()
                handleSaveReadProgress()
              }
            }
          ].map((btn, index) => (
            <Button
              key={index}
              onClick={btn.onClick}
              content={btn.content}
              type="primary"
              shape="round"
              size="large"
              icon={btn.icon}
              className={`font-bold ${index == 2 ? '' : ''}`}
            />
          ))}
          <Button
            onClick={() => setOpen(true)}
            content="目录"
            type="primary"
            shape="round"
            size="large"
            icon={<UnorderedListOutlined />}
            className={`font-bold `}
          />
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
        {catalogs.map((catalog, index) => {
          return (
            <p
              key={catalog.id}
              className={`mb-1 text-[1rem] cursor-pointer hover:bg-yellow p-[5px] rounded-md `}
              // ${catalog.checked ? ' bg-yellow' : ''}
              onClick={() => {
                handleChangeCatalog(catalog.href)
              }}
            >
              <IconFont
                type="icon-bookmark"
                className=" mr-[10px]"
              />
              {catalog.label}
            </p>
          )
        })}
      </Drawer>
    </>
  )
}

export default Reader
