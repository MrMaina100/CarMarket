import { createClient } from '@/lib/utilities/supabaseServer'
import { cookies } from 'next/headers'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

import CarCard from '@/components/ui/CarCard'



export default async function page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {data : {user}} = await supabase.auth.getUser()
  const userid = user?.id
  
  
    
  const {data : cars} = await supabase
  .from('cars')
  .select()
  .eq('user_id', userid as string) 
  
  
 
  return (
    <div className='space-y-4 p-4'>

      <div className='flex justify-between p-2'>
       <p>
        hey there {user?.email}
       </p>

       {/*our sign out btn  */} 

      </div>
      <Button asChild>
        <Link href='/createpost'>
          Post your Car
        </Link>

      </Button>
      <h1>Your recent posts</h1>

     <div className='flex flex-col space-y-4 items-center md:flex-row md:space-y-0 md:space-x-4'>      
      {cars ? (
        <>
        
        {cars?.map((apiData)=>(
        <div key={apiData.id}>
        <CarCard  data={apiData} />
        </div>
      ))}
        </>

      ) :(
        <>
        No recent Listings created
        </>

      )}  

     </div>
      

    </div>
  )
}