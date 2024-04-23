import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function GET(req: NextRequest) {
    const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET ?? '',
        secureCookie: process.env.NEXTAUTH_URL?.startsWith('https://') ?? process.env.VERCEL_ENV === 'previe'
    })

    if(!token){
        return NextResponse.json({
            message: 'Unauthorized'
        },{status: 401});
    }

    return NextResponse.json({accessToken: token.accessToken})
}
