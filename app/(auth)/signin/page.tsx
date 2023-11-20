'use client'

import { FormEvent, useState } from "react"
import { createBrowserClient } from "@supabase/ssr"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SignInPage() {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const router = useRouter()

   const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      //create supabase instance 
     const supabase = createBrowserClient<Database>(
     process.env.NEXT_PUBLIC_SUPABASE_URL!,
     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const {error} = await supabase.auth.signInWithPassword(
      {
         email,
         password,
      }
    )

    if(error){
      alert(error.message)
    }else{
      router.refresh()
      router.push('/')

    }


   }

  return (
    <>

    <div className="flex justify-center">
      <Card className="w-[450px]">
         <CardHeader>
            <CardTitle> Welcome Back </CardTitle>
         </CardHeader>
         <CardContent>

          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-2">
               <Label htmlFor="email">Email</Label>
               <Input
               id="email"
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
               
               />

               <Label htmlFor="password">Password</Label>
               <Input
               id="password"
               value={password}
               onChange={(e)=>setPassword(e.target.value)}               
               />

               <div className="flex justify-between items-center">
                  <Link href='forgotpassword'>
                     <p className="text-xs">
                        Forgot password? Reset
                     </p>
                  </Link>

                  <Button>
                     Log in 
                  </Button>

               </div>
            </div>

            
          </form>

         </CardContent>
        
      </Card>

    </div>


    </>
  )
}