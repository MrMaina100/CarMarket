import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import CreatePostForm from "./CreatePostForm"


export default async function CreatepPostpage() {
  
  const supabase = createClient()

  const {data: {user}} = await supabase.auth.getUser()
  if(!user){
    redirect('/signin')
    
  }
  return (
    <div className="p-2">
    
      <CreatePostForm user={user}/>            

    </div>
  )
}