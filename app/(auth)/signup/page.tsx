'use client'

import { FormEvent, useState } from "react"
import { createBrowserClient } from '@supabase/ssr'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"



export default function SignInpage() {

   const [userName, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const router = useRouter()

   const handleSubmit = async (e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      //create a supabase instance 
       const supabase = createBrowserClient(
       process.env.NEXT_PUBLIC_SUPABASE_URL!,
       process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const { error} = await supabase.auth.signUp(
      {
         email,
         password,
         options:{
            emailRedirectTo:'http://localhost:3000/api/auth/confirm',
            data:{
              userName
            }
         }

      }
    )
    if(error){
      alert(error.message)
    }else{
      router.push('/confirmation')

    }




   }
  return (
    <>
      <div className="flex justify-center items-center">
         
      <Card className="w-[500px]">
         <CardHeader>
            <CardTitle> Create an account Today </CardTitle>
         </CardHeader>
         {/* our social buttons will be here */}

         <CardContent>
           
            <form onSubmit={handleSubmit}>
             <div className="grid w-full items-center gap-2">
               <Label htmlFor="userName">Name</Label>
               <Input
               id="userName"
               value={userName}
               onChange={(e)=>setName(e.target.value)}
               
               />
               <Label htmlFor="email">Email</Label>
               <Input
               id="email"
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
               
               />
               <Label htmlFor="password">Password</Label>
               <Input
               type="password"
               id="password"
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
               
               />

             </div>

            <div className="flex justify-between mt-5">
            <Link href='/signin'>
            <p className="text-xs ">Already have an Account? Login</p>
            </Link>

            <Button type="submit">
               Sign up
            </Button>

         </div>

              


            </form>
         </CardContent>

        



      </Card>

      </div>
      


    </>
  )
}