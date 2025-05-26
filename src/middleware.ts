// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
  console.log("MIDDLEWARE RUNNING:", req.nextUrl.pathname);
  const token = req.cookies.get("admin_token")?.value;
  console.log(token);

  // Redirect to login if no token
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET!);
    return NextResponse.next(); // allow access
  } catch (err) {
    console.log(err);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

// 👇 Tell Next.js to apply this middleware only to /admin routes
export const config = {
  matcher: ["/admin/:path*"],
};
