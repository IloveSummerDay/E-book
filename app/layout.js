import { getServerSession } from 'next-auth'
import { Inter } from 'next/font/google'
import SessionProvider from './_components_global/SessionProvider'
import { authOptions } from './api/auth/[...nextauth]/route'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'hello e-book',
  description: '欢迎你来到e-book'
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  )
}
