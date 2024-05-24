'use client'
import {
  AlertDialog,  
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"

export default function DeleteProfileButton({id}:{id:string | any}) {
   const supabase = createClient()

   const deleteAccount = async ()=>{
   const {  error } = await supabase.auth.admin.deleteUser(id)
   }

  return (
  <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='destructive'>Delete profile</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button variant='destructive'
          onClick={deleteAccount}
          
          >Continue</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}