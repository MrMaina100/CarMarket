import { Button } from "./button"
import Link from "next/link"
export default function EditProfileButton({id}:{id:string | undefined}) {
  return <Button variant='secondary' asChild>
    <Link href={`/profile/${id}/editprofile`}>
    Edit Profile
    
    </Link>
    
  </Button>
}