'use client'
import {createBrowserClient} from '@supabase/ssr'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'


export default function SignOut() {

   const router = useRouter()

const handleClick = async()=>{
     const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  
  const {error} = await supabase.auth.signOut()

  if(!error){
   router.push('/')

  }

   }
  return (
    <div>
      <Button variant='destructive' onClick={handleClick}>
         log out
      </Button>
    </div>
  )
}