import Form from "@/app/createpost/Form"
import FormB from "./FormB"
import FormC from "./FormC"
import FormD from "./FormD"
import supabaseServer from "@/lib/utilities/supabaseServer"
import { redirect } from "next/navigation"

export default async function CreatepPostpage() {

  const {data: {session}} = await supabaseServer.auth.getSession()
  if(!session){
    redirect('/signin')
  }
  return (
    <div>
      <h1>Create your own listing, let people bid on your car</h1>
      <Form/>    

    </div>
  )
}