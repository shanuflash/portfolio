import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';

export async function middleware(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Check if user is signed in and is an admin
  if (!session || session.user.role !== 'admin') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  runtime: 'nodejs',
  matcher: ['/area51'],
};
