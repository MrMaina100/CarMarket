import Link from "next/link"
import { Button } from "@/components/ui/button"
import SignInForm from "./SignInForm"

export default function SignInPage() { 

  return (
    <>
    <div className="flex flex-col items-center justify-center p-8">
      <Link href='/' className="absolute left-4 top-4 md:left-8 md:top-8">
         <Button>
            Back
         </Button>
      </Link>

      <div className=" space-y-4 justify-center w-96 p-8 md:shadow-2xl">
      <h1 className="text-xl font-semibold tracking-tight">
                Welcome back
              </h1>
         <SignInForm/>

      </div>

    </div>

    </>
  )
}