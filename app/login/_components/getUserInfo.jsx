'use client'
import { useEffect, useState } from 'react'

function UesrInfo(params) {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('/api/user')
      .then(res => {
        console.log('res ', res)
        return res.json()
      })
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
  }, [])

  return (
    <div>
      用户如下：
      {data.map((item, index) => (
        <div key={index}>
          账号：{item.account} --- 密码：{item.password}
        </div>
      ))}
    </div>
  )
}

export default UesrInfo
