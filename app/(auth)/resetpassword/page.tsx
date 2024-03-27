import ResetPasswordForm from "./ResetPasswordForm"
import { createClient } from "@/lib/utilities/supabaseServer"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function resetpassword() { 

  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const {data: {session}} = await supabase.auth.getSession()
   if (!session) {
    redirect('/sign-in');
  }
  return (
    <>
    <div className="flex flex-col items-center justify-center p-8">   
      <div className=" space-y-4 justify-center w-96 p-8 md:shadow-2xl">
      <h1 className="text-xl font-semibold tracking-tight">
                Reset Password
      </h1>
      <ResetPasswordForm/>        

      </div>

    </div>

    </>
  )
}