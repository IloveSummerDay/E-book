'use client'
import { useEffect, useState } from 'react'

function UesrInfo(params) {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('/api/getUserInfo')
      .then(res => res.json())
      .then(res => setData(res.data))
  }, [])
  console.log(data)
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          {' '}
          {item.account} --- {item.password}
        </div>
      ))}
    </div>
  )
}

export default UesrInfo
