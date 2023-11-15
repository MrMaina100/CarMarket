import { Button } from "@/components/ui/button"
import Link from "next/link"
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import SignOut from "./(auth)/SignOut"
export default async function page() {

  //create an instance to supabase 
    const cookieStore = cookies()
     const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )

  const {data : {session}} = await supabase.auth.getSession()

 

   
  return (
    <div>
      <h1>Welcome to auto barn</h1>

      {session ? (
        <div>
          <p>hello, {session.user.email}</p>
          {/* display our log out btn  */}
          <SignOut/>
        </div>
      ):(
        <p>not logged in</p>
      )}

      <div className="flex space-x-4">
        <Button asChild  >
          <Link href='/signup'>
            SignUp
            
             </Link>
        </Button>
         <Button asChild variant='secondary'>
          <Link href='/signin'>
            login
            
            </Link>
        </Button>

      </div>

     

    </div>
  )
}