import { NextResponse, type NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log('中间件执行了')
  if (request.nextUrl.pathname.startsWith('/home')) {
    if (request.cookies.get('admin-token')) {
      // 已经登录，有token
    } else {
      // 否则，跳转到登陆页
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
  // return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*'
// }
