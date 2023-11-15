'use client'
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import {createBrowserClient} from '@supabase/ssr'
import { Input } from "@/components/ui/input"
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

  const {error} = await supabase.auth.signInWithPassword({
   email,
   password,
   
  })

  if(error){
   setErrorSms(error.message)
  }else{
   router.push('/')
  }


  }

  return (
    <div>login page
      
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
          {errorSms &&(
         <p>{errorSms}</p>
      )}
         

      </form>

    </div>
  )
}