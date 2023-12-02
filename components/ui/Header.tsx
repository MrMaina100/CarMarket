
import { Button } from "./button"
import Link from "next/link"
import ProfileComponent from "./ProfileComponent"

import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { cookies } from "next/headers"

export default async function Header() {

   const cookieStore = cookies()
   //instance to our supabase 
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
    <>
    <div className=" p-2 flex justify-between relative z-20 ">
      <h1 className="font-bold ">Turbo Trader</h1>

      {session ? (
        <ProfileComponent/>

         ):(
           <div className="flex items-center space-x-5">
         
         <Button asChild variant='outline'>
            <Link href='/signin'>
               Sign in
            
            </Link>

         </Button>

          <Button asChild  className="px-5">
            <Link href='/signup'>
               Join
            
            </Link>

         </Button>




      </div>

         )}

     
    </div>

    </>
  )
}