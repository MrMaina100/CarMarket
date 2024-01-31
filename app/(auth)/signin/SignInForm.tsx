'use client'
import supabaseClient from "@/lib/utilities/supabaseClient"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { toast } from "sonner"
import GithubButton from "@/components/ui/GithubButton"
import {useForm,type FieldValues, } from 'react-hook-form'


export default function SignInForm() {

  const {register, handleSubmit, reset, formState:{errors, isSubmitting}} = useForm()   
   const router = useRouter()

   
   const onSubmit = async(data:FieldValues)=>{
     try {

     const {error}= await supabaseClient.auth.signInWithPassword({
        email:data.email,
        password:data.password
      })

      if(error){
        toast.error('Wrong login Credentials')
      }else{
        router.push('/')
      router.refresh()
      }
     
     } catch (error) {
      toast.error('Wrong login Credentials')
      
     }
     finally{
      reset()
     } 
   }

  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-2">
               <Label htmlFor="email">Email</Label>
               <Input
               type="text"
               {...register('email',{required:'Name is required'})}        
               
               />
               {errors.email&&(<p className="text-xs text-red-500">
                {`${errors.email.message}`}
               </p>)}

               <Label htmlFor="password">Password</Label>
               <Input
               type="password"
               {...register('password', {required:'Password is required'})}
                            
               />
                {errors.password&&(<p className="text-xs text-red-500">
                {`${errors.password.message}`}
               </p>)}

               <div className="flex justify-between items-center">
                  <Link href='forgotpassword'>
                     <p className="text-xs">
                        Forgot password? Reset
                     </p>
                  </Link>                 

               </div>
                <Button
                  disabled={isSubmitting}
                  className="mt-2"                
                  >
                      {isSubmitting &&(
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