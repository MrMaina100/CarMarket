import {
  Card,
  CardContent,
  
} from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Image from "next/image"
import Link from 'next/link'

import { cookies } from 'next/headers';
import { createClient } from '@/lib/utilities/supabaseServer';

export default async function CarCards() { 

     const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data} = await supabase.from('cars').select()
  return (
         <>
         {
            data ? (
               data.map((apiData)=>(
                   <Card key={apiData.id} className='w-72 overflow-hidden'>
              <Link href={`/explore/${apiData.id}`}>
                <CardContent  className="grid gap-2 p-2 h-34">                 
                  <div className="h-48">
                     <Image src={`https://uqvgrgiggdjwexfirrqu.supabase.co/storage/v1/object/public/car_images/${apiData.image_url![0]}`} alt="car photo" width={200} height={100} priority className="w-full h-full object-cover " />
                  </div>                
                  <Badge className='w-16' variant='outline'>
                     {apiData.year}
                  </Badge>                  
                     {apiData.car_name}                  
                  <Badge className='w-24'>
                     {apiData.transmission}
                  </Badge>
                  <Separator/>               
                     {apiData.price}                 
                  
               </CardContent>
              </Link>               
            </Card>
               ))

            ):(
               <p>No cars to display at the moment</p>

            )
         }
   
         </>

   
    
      

    
  )
}