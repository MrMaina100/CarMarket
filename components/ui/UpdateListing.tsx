import Link from "next/link"
import { Button } from "./button"
import { Pencil2Icon } from "@radix-ui/react-icons"

export default function UpdateListing({id}:{id:string}) {
  return (
    <>
    <Button variant='outline' size='icon' asChild>
      <Link href={`/createpost/${id}/editpost`}>
      <Pencil2Icon className="h-4"/>

      </Link>

    </Button>
    
    </>
  )
}