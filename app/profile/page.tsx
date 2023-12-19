import { createClient } from '@/lib/utilities/supabaseServer'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import ProfileComponent from './Profilepage'

export default async function page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {data : {user}} = await supabase.auth.getUser()
  const userid = user?.id
  
  
    
  const {data : cars} = await supabase
  .from('cars')
  .select()
  .eq('user_id', userid as string) 

  const {data : {session}} = await supabase.auth.getSession()
  
  if(!session) {
    redirect('/signin')


  }
 
  return <ProfileComponent user={user} cars={cars}/>
}