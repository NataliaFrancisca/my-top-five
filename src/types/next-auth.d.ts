import NextAuth from "next-auth"
import { Session } from "inspector"

declare module 'next-auth' {
  interface Session extends DefaultSession {
    accessToken?: string,
    refreshToken?: string,
    error?: string
  }
  interface Account extends NextAuthAccount {
    expires_at: number
  }
}


declare module 'next-auth/jwt' {
  interface JWT extends NextAuthJWT {
    accessToken?: string
    refreshToken?: string
    accessTokenExpires?: number
    error?: string
    user?: Session['user']
  }
}