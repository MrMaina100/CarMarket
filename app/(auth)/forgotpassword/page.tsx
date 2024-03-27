import Link from "next/link"
import { Button } from "@/components/ui/button"
import ForgotpasswordForm from "./ForgotpasswordForm"


export default function SignInPage() { 

  return (
    <>
    <div className="flex flex-col items-center justify-center p-8">
      <Link href='/signin' className="absolute left-4 top-4 md:left-8 md:top-8">
         <Button>
            Back
         </Button>
      </Link>

      <div className=" space-y-4 justify-center w-96 p-8 md:shadow-2xl">
      <h1 className="text-xl font-semibold tracking-tight">
                Reset Password
              </h1>

        <ForgotpasswordForm/>     

      </div>

    </div>

    </>
  )
}