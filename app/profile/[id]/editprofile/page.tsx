import EditForm from "./EditForm"
import { createClient } from "@/lib/supabase/server"

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {

   const supabase = createClient()
   const {data: user} = await supabase.from('profiles').select().match({id}).single()
   if(!user) return <p>error</p>
  return (
    <div>
      <EditForm user={user}/>
    </div>
  )
}