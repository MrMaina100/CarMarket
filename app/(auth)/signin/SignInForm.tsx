'use client'
import supabaseClient from "@/lib/utilities/supabaseClient"
import { FormEvent, useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { toast } from "sonner"
import GithubButton from "@/components/ui/GithubButton"

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
      toast.error('something went wrong')
      
      
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

               </div>
                <Button
                  disabled={isLoading}
                  className="mt-2"                
                  >
                      {isLoading &&(
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>

               )}
                     Log in 
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

            
          </form>
    </div>
  )
}