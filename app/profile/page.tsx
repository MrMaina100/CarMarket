import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

import CarCard from '@/components/ui/CarCard'



export default async function page() {
  const cookieStore = cookies()
  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )

  const {data : {user}} = await supabase.auth.getUser()
  const userid = user?.id
  console.log(user?.id);
  
    
  const {data : cars} = await supabase
  .from('cars')
  .select()
  .eq('user_id', userid as string) 
  
  
 
  return (
    <div>

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

      {cars ? (
        <>
        <h1>Your recent posts</h1>
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
  )
}