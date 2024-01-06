import { type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // console.log('中间件执行了')
  // // ->Home - middleware
  // if (
  //   request.nextUrl.pathname.startsWith('/home') ||
  //   request.nextUrl.pathname.startsWith('/bookstore') ||
  //   request.nextUrl.pathname.startsWith('/read') ||
  //   request.nextUrl.pathname.startsWith('/user-center')
  // ) {
  //   if (request.cookies.get('admin-token') && request.cookies.get('user-avater')) {
  //     // 证明已经登录，有token
  //     // 随后，应该拿token再去请求接口无感登录，放行
  //   } else {
  //     // 否则，跳转到登陆页
  //     return NextResponse.redirect(new URL('/login', request.url))
  //   }
  // }
}
