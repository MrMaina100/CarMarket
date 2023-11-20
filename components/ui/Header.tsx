import { Button } from "./button"
import Link from "next/link"

export default function Header() {
  return (
    <>
    <div className="bg-black text-white p-2 flex justify-between">
      <h1>Car Market</h1>

      <div className="flex items-center space-x-5">
         <Button asChild variant='outline'>
            <Link href='/signin'>
               Sign in
            
            </Link>

         </Button>

          <Button asChild variant='secondary' className="px-5">
            <Link href='/signup'>
               Join
            
            </Link>

         </Button>




      </div>
    </div>

    </>
  )
}