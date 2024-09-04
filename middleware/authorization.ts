import { NextResponse } from 'next/server';

export function middleware(req) {
  const role = req.cookies['user-role'];
  if (role !== 'admin') {
    return NextResponse.redirect('/unauthorized');
  }
  return NextResponse.next();
}
