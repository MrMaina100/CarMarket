'use client'

import { FormEvent, useState } from "react"

import { Icons } from "@/components/ui/icons"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import GithubButton from "@/components/ui/GithubButton"

import supabaseClient from "@/lib/utilities/supabaseClient"

export default function AuthForm() {

   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [userName, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const router = useRouter()

   const handleSubmit = async (e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault()

      try {

         setIsLoading(true)
         const { error} = await supabaseClient.auth.signUp(
      {
         email,
         password,
         options:{
            emailRedirectTo:`${location.origin}/api/auth/confirm`,
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
         
   } catch (error) {
         toast.error('something went wrong');
         


         
      }finally{
         setIsLoading(false)
      }
    

    
   }
  return (
    <div>
      <form onSubmit={handleSubmit}>
             <div className="grid items-center gap-2">
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
               placeholder="name@example.com"
               type="email"
               autoCapitalize="none"
               autoComplete="email"
               autoCorrect="off"
               disabled={isLoading}
               onChange={(e)=>setEmail(e.target.value)}
               
               />
               <Label htmlFor="password">Password</Label>
               <Input
               type="password"
               id="password"
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
               
               />

               <Button 
            type="submit"
            disabled={isLoading}
            
            >
               {isLoading &&(
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>

               )}
               Sign up
            </Button>

             <div className="relative mt-2">
               <div className="absolute inset-0 flex items-center">
               <span className="w-full border-t" />
               </div>
               <div className="relative flex justify-center text-xs  uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                Or continue with
                </span>
                </div>
             </div>

             <GithubButton/>

             </div>

            <div className="flex justify-between mt-2 items-center">
            <Link href='/signin'>
            <p className="text-xs ">Already have an Account? Login</p>
            </Link>         

            </div>
           

              


         </form>
    </div>
  )
}