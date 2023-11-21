'use client'

import { Button } from "./button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PersonIcon } from "@radix-ui/react-icons"
import Link from "next/link"

import { createBrowserClient,  } from "@supabase/ssr"
import { useRouter } from "next/navigation"


export default function ProfileComponent() {

  const router = useRouter()

  const handleLogout = async ()=>{
    //create a supabase instance
     const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
   )

   const {error} = await supabase.auth.signOut()
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
        <Button variant='secondary' className="rounded-full">
          <PersonIcon/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* my profile */}
        <DropdownMenuItem>
          <Link href='/createpost'>Create post</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Dark mode
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