'use client'
import supabaseClient from "@/lib/utilities/supabaseClient"
import { FormEvent, useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

export default function SignInForm() {
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const router = useRouter()

   
   const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault()

    try {
      setIsLoading(true)
      const {error} = await supabaseClient.auth.signInWithPassword(
      {
         email,
         password,
      }
    )

    if(error){
      alert(error.message)
    }else{
    
      router.push('/')
      router.refresh()

    }
      
    } catch (error) {
      console.log('something went wrong');
      
      
    }finally{
      setIsLoading(false)
    }
    


   }

  return (
    <div>
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
               type="password"
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

                  <Button
                  disabled={isLoading}                 
                  >
                      {isLoading &&(
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>

               )}
                     Log in 
                  </Button>

               </div>
            </div>

            
          </form>
    </div>
  )
}