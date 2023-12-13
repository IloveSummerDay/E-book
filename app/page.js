'use client'
import { useRouter } from 'next/navigation'
import Button from './_components_global/Button'

export default function Home() {
  const router = useRouter()

  return (
    <div className="w-full bg-mainHoverColor h-full flex flex-col justify-evenly items-center text-white">
      <div className="text-7xl">Wellcome E-Book</div>
      <Button
        type="primary"
        size="large"
        className="flex items-center justify-center"
        style={{ width: '10%', height: '5%', fontSize: '1rem' }}
        onClick={v => {
          router.push('/login')
        }}
        content="进入体验"
      ></Button>
    </div>
  )
}
