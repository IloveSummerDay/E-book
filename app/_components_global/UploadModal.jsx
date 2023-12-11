'use client'
import { EditOutlined, InboxOutlined } from '@ant-design/icons'
import { Cascader, Input, Modal, Space, Spin, Upload, message } from 'antd'
import { useEffect, useState } from 'react'
const { Dragger } = Upload
const { SHOW_CHILD } = Cascader

function UploadModal({ open = false }) {
  const [openUp, setOpenUp] = useState(false)
  const [initRender, setInitRende] = useState(true)
  const [bookName, setBookName] = useState('')
  const [bookType, setBookType] = useState('')
  const [bookDesc, setBookDesc] = useState('')
  const [fileList, setFileList] = useState([])
  const [uploading, setUploading] = useState(false) // 显示上传图书加载过渡
  useEffect(() => {
    initRender ? setInitRende(false) : setOpenUp(true)
  }, [open])
  //
  const handleUpload = () => {
    console.log('【图书信息】', bookName, bookType, bookDesc)
    console.log('【上传之前选择的文件，文件数组】', fileList)
    if (!(bookName && bookType.length > 0 && bookDesc)) {
      message.info('请完善图书信息后再进行上传')
      return
    }
    if (!fileList.length) {
      message.info('请选择要上传的图书')
      return
    }
    // ！！！要核对图书文件类型 上传图书和用户所选图书是否类型一致！！！
    //
    //
    const formData = new FormData()
    fileList.forEach(file => {
      formData.append('files[]', file)
    })
    // Loading '上传中，请耐心等待'
    setUploading(true)
    setOpenUp(false)
    fetch('https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188', {
      method: 'POST',
      body: formData
      // 携带cookie 以验证用户信息
    })
      .then(res => res.json())
      .then(() => {
        setFileList([])
        setUploading(false)
        message.success('上传成功')
      })
      .catch(() => {
        setOpenUp(true)
        setUploading(false)
        message.error('上传失败，请稍后重试')
      })
      .finally(() => {})
  }
  const DraggerProps = {
    // multiple: true, // 根据应用场景，上传图书一次只能传一本
    fileList, // 已经上传的文件列表（受控）
    // 上传文件之前的钩子, 若返回 false 则停止上传
    beforeUpload(file, chooseFileList) {
      setFileList([...fileList, ...chooseFileList])
      return false // 手动上传时，上传文件都会在此被拦截，需手动调用handleUpload
    },
    // 当文件被拖入上传区域时执行的回调功能
    onDrop(e) {
      console.log('【拖拽上传文件数组】', e.dataTransfer.files)
    },
    onRemove(file) {
      const index = fileList.indexOf(file)
      const newFileList = fileList.slice()
      newFileList.splice(index, 1)
      setFileList(newFileList)
      message.success(`移除 ${file.name} 成功`)
    }
  }
  const inputProps = [
    {
      name: 'bookName',
      addonBefore: '图书名',
      placeholder: '请尽填量写图书全名',
      allowClear: true,
      onChange: e => {
        setBookName(e.target.value)
      }
    },
    {
      name: 'bookDesc',
      addonBefore: <EditOutlined />,
      placeholder: '写一句话介绍自己的图书吧~',
      suffix: '^_^',
      allowClear: true,
      onChange: e => {
        setBookDesc(e.target.value)
      }
    }
  ]
  return (
    <>
      <Modal
        title="请上传您的图书"
        centered
        width={800}
        open={openUp}
        maskClosable={false}
        okText="上传"
        cancelText="取消"
        onOk={() => {
          handleUpload()
        }}
        onCancel={() => {
          setFileList([]) // 关闭对话框时，清空上传文件数组
          setOpenUp(false)
        }}
        afterClose={() => {
          console.log('【Modal 完全关闭后的回调】')
        }}
      >
        <Space
          direction="vertical"
          size={'middle'}
          className=" mt-[10px] mb-1"
        >
          {inputProps.map((props, index) => {
            return (
              <Input
                key={index}
                {...props}
              />
            )
          })}
          <Cascader
            placeholder="请选择图书类型"
            style={{
              width: '100%'
            }}
            options={bookTypeOptions}
            onChange={e => {
              setBookType(e)
            }}
            multiple
            maxTagCount="responsive"
            showCheckedStrategy={SHOW_CHILD}
          />
        </Space>
        <Dragger {...DraggerProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">单击或拖动图书到此区域进行上传</p>
          <p className="ant-upload-hint">仅支持单次上传。严禁上传非法或其他被禁止的图书。</p>
        </Dragger>
      </Modal>
      <Spin
        spinning={uploading}
        fullscreen
      />
    </>
  )
}
const bookTypeOptions = [
  {
    label: '1',
    value: '种类1',
    // children 示范
    children: new Array(20).fill(null).map((_, index) => ({
      label: `Number ${index}`,
      value: index
    }))
  },
  {
    label: '2',
    value: '种类2',
    children: [
      {
        label: '2-1',
        value: '细分种类1',
        children: [
          {
            label: '2-1-1',
            value: '细分种类 1-1'
          },
          {
            label: '2-1-2',
            value: '细分种类 1-2'
          },
          {
            label: '2-1-3',
            value: '细分种类 1-3'
          }
        ]
      }
    ]
  }
]
export default UploadModal
