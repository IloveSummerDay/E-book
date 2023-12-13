import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: '' },
        password: { label: 'Password', type: 'password' }
      },

      async authorize(credentials, req) {
        // 在此处做数据库查询
        console.log(credentials.username, credentials.password)
        const user = { id: '1', username: 'J Smith', password: '111', email: 'jsmith@example.com', avater: '/none.png' }
        // const user = null

        //
        if (user) {
          console.log('user ', user)
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          console.log('user null')
          // If you return null then an error will be displayed advising the user to check their details.
          return null
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    }),
    GithubProvider({
      httpOptions: {
        timeout: 30000 // 等待响应时间
      },
      id: 'github',
      name: 'GitHub',
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
      // authorization: {},
      // userinfo: { request: () => {} }
    })
  ],
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     const isAllowedToSignIn = true
  //     if (isAllowedToSignIn) {
  //       return true
  //     } else {
  //       // Return false to display a default error message
  //       return false
  //       // Or you can return a URL to redirect to:
  //       // return '/unauthorized'
  //     }
  //   }
  // },
  session: { strategy: 'jwt' }
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
