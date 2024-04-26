'use client'

import { Button } from "./button"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

export default function LogoutButton() {

   const supabase = createClient()
   const router = useRouter()
   const handleLogout = async ()=>{
      const {error} = await supabase.auth.signOut()
   if(error){
    alert('something went wrong')
   }else{
    
    router.push('/signin')
    router.refresh()

   }
   }
  return <Button variant='outline' className="text-red-600" onClick={handleLogout}>Log out </Button>
}