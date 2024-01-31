'use client'

import { Icons } from "@/components/ui/icons"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import GithubButton from "@/components/ui/GithubButton"
import supabaseClient from "@/lib/utilities/supabaseClient"


//react hook form
import {useForm,type FieldValues, } from 'react-hook-form'


export default function AuthForm() {

   const {register, reset, handleSubmit,  formState:{errors, isSubmitting}} = useForm()
   const router = useRouter()

   const onSubmit = async (data:FieldValues)=>{

      try {
      const {error} = await supabaseClient.auth.signUp({
      email:data.email,
      password:data.password,      
      options:{
         emailRedirectTo: `${location.origin}/api/auth/confirm`,
         data:{
            userName: data.userName
         }
              
      }   
      })

      if(error){
         toast.error(error.message)
      }else{
         router.push('/confirmation')
      }
         
      } catch (error) {
         console.log('Something went wrong');        
         
      }finally{
         reset()

      } 
    
   }


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
             <div className="grid items-center gap-2">
               <Label htmlFor="userName">Name</Label>
               <Input
               type="text"
               {...register('userName', {required:"UserName is required"})}               
               />
               {errors.userName&&(<p className="text-xs text-red-500">
                {`${errors.userName.message}`}
               </p>)}

               <Label htmlFor="email">Email</Label>
               <Input
               type="email"
               {...register('email', {required:"Email is required"})}
               placeholder="name@example.com"   
               />
               {errors.email&&(<p className="text-xs text-red-500">
                {`${errors.email.message}`}
               </p>)}

               <Label htmlFor="password">Password</Label>
               <Input
               type="password"
               {...register('password', {required:'Must create a password'})}               
               />
               {errors.password&&(<p className="text-xs text-red-500">
                {`${errors.password.message}`}
               </p>)}

               <Button 
            type="submit"
            disabled={isSubmitting}
            
            >
               {isSubmitting &&(
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