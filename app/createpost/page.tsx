import Form from "@/app/createpost/Form"
import { createClient } from "@/lib/utilities/supabaseServer"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"


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
      <Form session={session}/>            

    </div>
  )
}