import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const supabase = createClient();
    await supabase.auth.exchangeCodeForSession(code);

    return NextResponse.redirect(`${requestUrl.origin}/resetpassord`);
  }

  return NextResponse.redirect(`${requestUrl.origin}/signin`);
}

//breaking down the code for future users or code reviewers lol
//here if the code exchange is successful , we are redirecting the user to the resetpassword page otherwise we send them back to signin
