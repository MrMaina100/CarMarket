'use client'
import supabaseClient from "@/lib/utilities/supabaseClient"
import { FormEvent, useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"


export default function ForgotpasswordForm() {

   const [email, setEmail] = useState('')
   const [loading, setLoading] = useState(false)

   const handlePasswordReset = async(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault()

      try {
         setLoading(true)
        const {error} =  await supabaseClient.auth.resetPasswordForEmail(email,{
         redirectTo: `${window.location.origin}/resetpassword`
      })
      if(error){
         toast.error('something went wrong')
      }else{
         toast.success('Please check your email and confirm link')
      }
         
      } catch (error) {
         toast.error('Something went wrong')

         
      }finally{
         setLoading(false)
         setEmail('')
      }
    


   }
  return (
    <div>
      <form onSubmit={handlePasswordReset}>
         <div className="grid w-full items-center gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            
            />
              <Button 
            type="submit"
            disabled={loading}
            
            >
               {loading &&(
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>

               )}
               Send Password Reset Email
            </Button>

         </div>
      </form>
    </div>
  )
}