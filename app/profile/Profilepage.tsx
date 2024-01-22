import { Button } from '@/components/ui/button'
import Link from 'next/link'

import CarCard from '@/components/ui/CarCard'
import { User } from '@supabase/supabase-js'
import { PropTypes } from "@/lib/types";
import CarCards from '@/components/ui/CarCard';
import {
  Card,
  CardContent,
  
} from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Image from "next/image"

type Cars = Database['public']['Tables']['cars']['Row']



export default function ProfileComponent({user, cars}:{
  user: User | null,
  cars: Cars[] | null 
}) {
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
        
        {cars?.map((apiData:PropTypes)=>(
        <div key={apiData.id}>
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