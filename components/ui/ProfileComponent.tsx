'use client'

import { Button } from "./button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PersonIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { useRouter } from "next/navigation"
import supabaseClient from "@/lib/utilities/supabaseClient"



export default function ProfileComponent() {

  const router = useRouter()
  const handleLogout = async ()=>{
    //create a supabase instance  

   const {error} = await supabaseClient.auth.signOut()
   if(error){
    alert('something went wrong')
   }else{
    
    router.push('/signin')
    router.refresh()

   }
  }

  

  
  return (
    <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button  className="rounded-full">
          <PersonIcon/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <Link href='/profile'>
            Visit profile
          </Link>
        </DropdownMenuItem>
        {/* my profile */}
        <DropdownMenuItem>
          <Link href='/createpost'>Create post</Link>
        </DropdownMenuItem>
       
        <DropdownMenuSeparator/>
        <DropdownMenuItem>
          
          <Button variant='outline' className="text-red-600" onClick={handleLogout}>
          log out
          </Button>
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>

    </>
  )
}