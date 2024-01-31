import { createClient } from "@/lib/utilities/supabaseServer"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import CreatePostForm from "./CreatePostForm"


export default async function CreatepPostpage() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {data: {session}} = await supabase.auth.getSession()
  if(!session){
    redirect('/signin')
    
  }
  return (
    <div className="p-2">
      <h1>Post your car, let people bid on it</h1>
      <CreatePostForm session={session}/>            

    </div>
  )
}