'use client'
import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Icons } from "./icons"
import { Button } from "./button"
import { toast } from "sonner"


export default function GithubButton() {
   const [isloading, setIsLoading] = useState<boolean>(false)
   const supabase = createClient()

   const handleOAuth = async ()=>{
      try {
         setIsLoading(true)
         
         await supabase.auth.signInWithOAuth({
            provider:'github',
            options:{
               redirectTo: `${location.origin}/api/auth/confirm`
            }
         })
         
      } catch (error) {
         toast.error('something went wrong')

         
      }finally{
         setIsLoading(false)
      }
   }
  return (
    <div>
      <Button variant='outline' type="button" disabled={isloading} onClick={handleOAuth} className="w-full">
         {
            isloading ?(
               <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ):(
               <Icons.gitHub className="mr-2 h-4 w-4"/>
            )
         }
         Github

      </Button>

    </div>
  )
}