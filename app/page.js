'use client'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <div className="w-full bg-sky-500 h-full flex flex-col justify-evenly items-center text-white">
      <div className="text-7xl">Wellcome E-Book</div>
      <Button
        type="primary"
        size="large"
        style={{ width: '10%', height: '5%', fontSize: '1rem' }}
        onClick={v => {
          router.push('/login')
        }}
      >
        进入体验
      </Button>
    </div>
  )
}
