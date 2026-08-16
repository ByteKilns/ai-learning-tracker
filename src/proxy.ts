import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE_NAME, isValidSession } from "@/lib/auth";

export async function proxy(request: NextRequest) {
  const cookieValue = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const authenticated = await isValidSession(cookieValue);

  if (!authenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!login|_next/static|_next/image|favicon.ico).*)"],
};
