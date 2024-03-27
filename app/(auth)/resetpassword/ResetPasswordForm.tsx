'use client'
import supabaseClient from "@/lib/utilities/supabaseClient"
import { FormEvent, useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/ui/icons"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
export default function ResetPasswordForm() {

   const [passwordReset, setPasswordReset] = useState('')
   const [loading, setLoading] = useState(false)
   const route = useRouter()

   const handleResetPassword = async(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault()

      try {
         setLoading(true)
          await supabaseClient.auth.updateUser({
            password: passwordReset
         })


      } catch (error) {
         toast.error('could not update password')
         
      }finally{
         setLoading(false)
         toast.success('password successfully reset')
         route.push('/signin')
      }

   }
  return (
    <div>
      <form onSubmit={handleResetPassword}>
         <div className="grid w-full items-center gap-2">
            <Label htmlFor="password">
               New Password
            </Label>

            <Input
            id="password"
            type="password"
            value={passwordReset}
            onChange={(e)=>setPasswordReset(e.target.value)}            
            />

            <Button 
            type="submit"
            disabled={loading}
            
            >
               {loading &&(
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>

               )}
               Reset password
            </Button>

         </div>

      </form>
    </div>
  )
}