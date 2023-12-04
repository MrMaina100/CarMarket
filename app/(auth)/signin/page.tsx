import Link from "next/link"
import { Button } from "@/components/ui/button"
import SignInForm from "./SignInForm"

export default function SignInPage() { 

  return (
    <>
    <div className="container h-screen w-screen flex flex-col items-center justify-center">
      <Link href='/' className="absolute left-4 top-4 md:left-8 md:top-8">
         <Button>
            Back
         </Button>
      </Link>

      <div className="mx-auto space-y-4 justify-center sm:w-[360px]">
      <h1 className="text-xl font-semibold tracking-tight">
                Welcome back
              </h1>
         <SignInForm/>

      </div>

    </div>

    </>
  )
}