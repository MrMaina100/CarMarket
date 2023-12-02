import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import {
  Card,
  CardContent,
  
} from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

import CarCards from '@/components/ui/CarCard'

export default async function Explorepage() {
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
  const { data} = await supabase.from('cars').select()
  return (
    <div>
      <h1>View a variety of cars</h1>
      <div className="mt-2 flex flex-col space-4 items-center md:flex-row md:space-x-8 md:space-y-0">

         {/*the cards will go here  */}
        {data ? (
         data.map((apiData)=>(
          <CarCards key={apiData.id}  data = {apiData}/>     
               
        
         ))
        ):(
         <>
         <p>No cars to display at the moment</p>
         
         </>
        )}
        
      </div>

       {/* <Card key={apiData.id} className='w-[350px]'>
              <Link href={`/explore/${apiData.id}`}>
                <CardContent  className="grid gap-4">
                 
                  <Separator/>
                  <Badge className='w-16' variant='outline'>
                     {apiData.year}
                  </Badge>
                  <p>
                     {apiData.car_name}
                  </p>
                  <Badge className='w-16'>
                     {apiData.transmission}
                  </Badge>
                  <Separator/>
                  <p>
                     {apiData.price}
                  </p>
               </CardContent>
              </Link>
               
            </Card> */}

    </div>
  )
}