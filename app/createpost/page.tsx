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
    <div>
      <h1>Create your own listing, let people bid on your car</h1>
      <Form session={session}/>            

    </div>
  )
}