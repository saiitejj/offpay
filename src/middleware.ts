import { NextRequest,NextResponse } from "next/server";
import { decrypt } from "./lib/session";


const protectedRoutes=['/dashboard']
const authRoutes = ['/login', '/signup'];

export default async function middleware(req:NextRequest) {
    const path=req.nextUrl.pathname
    const isProtectedRoute=protectedRoutes.includes(path)
    const isAuthRoute=authRoutes.includes(path)

    const cookie=req.cookies.get('session')?.value
    const session=await decrypt(cookie)

    if (isProtectedRoute && !session){
        return NextResponse.redirect(new URL('/login',req.nextUrl))
    }

    if(isAuthRoute && session){
        return NextResponse.redirect(new URL('/dashboard',req.nextUrl))
    }

    return NextResponse.next()
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}