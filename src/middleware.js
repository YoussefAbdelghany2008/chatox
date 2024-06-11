export function middleware(request) {
    const userId = request.cookies.get('user_id');
   
    if (userId) {
        if (request.nextUrl.pathname.startsWith('/auth')) {
            return Response.redirect(new URL('/', request.url));
        }
    }else {
        if (!request.nextUrl.pathname.startsWith('/auth')) {
            return Response.redirect(new URL('/auth/sign_in', request.url));
        }
    }
  }
   
  export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  }