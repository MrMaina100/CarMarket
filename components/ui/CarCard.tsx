import {
  Card,
  CardContent,
  
} from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Image from "next/image"
import Link from 'next/link'
import { PropTypes } from "@/lib/types"
export default function CarCards({data}:{data:PropTypes}) { 
  return (
    
       <Card key={data.id} className='w-72 overflow-hidden'>
              <Link href={`/explore/${data.id}`}>
                <CardContent  className="grid gap-2 p-2 h-34">                 
                  <div className="h-48">
                     <Image src={`https://uqvgrgiggdjwexfirrqu.supabase.co/storage/v1/object/public/car_images/${data.image_url![0]}`} alt="car photo" width={200} height={100} priority className="w-full h-full object-cover " />
                  </div>                
                  <Badge className='w-16' variant='outline'>
                     {data.year}
                  </Badge>                  
                     {data.car_name}                  
                  <Badge className='w-24'>
                     {data.transmission}
                  </Badge>
                  <Separator/>               
                     {data.price}                 
                  
               </CardContent>
              </Link>               
            </Card>

    
  )
}