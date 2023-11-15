'use client'
import { Input } from "@/components/ui/input"
import { FormEvent, useState } from "react"
import {createBrowserClient} from '@supabase/ssr'
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function page() {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [errorSms, setErrorSms] = useState('')
   const router = useRouter()

 
  const handleSubmit = async (e:FormEvent<HTMLFormElement>)=>{
   e.preventDefault()
     //supabase instance 
    const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const {error} = await supabase.auth.signUp({
   email,
   password,
   options:{
      emailRedirectTo: 'http://localhost:3000/api/auth/callback'
   }
  })

  if(error){
   setErrorSms(error.message)
  }else{
   router.push('/authorized')
  }

  


  }

  return (
    <div>
      <h1>please sign up to continue</h1>
      <form onSubmit={handleSubmit}>

         <Input
          type="email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="email"
         
         /> <br />
          <Input
          type="password"
          name="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}   
          placeholder="password"      
         /> 

         <Button type="submit">
            submit

         </Button>
         

      </form>

      {errorSms &&(
         <p>{errorSms}</p>
      )}
    </div>
  )
}