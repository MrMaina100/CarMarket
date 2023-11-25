import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { Separator } from '@/components/ui/separator'


export default async function CarListing({params : {id}}: {params:{id:string}}) {

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

  const {data} = await supabase.from('cars').select().match({id}).single() 

  if(!data){
    return <p>something went wrong, it not you its us</p>
  }
  return (
    <>
    <div className='flex flex-col space-y-4 items-center md:flex-row  md:space-y-0'>
      {/* images will go here */}

      {/* car details */}
      <p>{data.price}</p>

      <div className='mt-4 w-[300px]'>
        <div className='flex justify-between'>
          <p>Year of manufacture</p>
          <p>{data.year}</p>
        </div>
        <Separator/>
        <div className='flex justify-between'>
          <p>Current Location</p>
          <p>{data.location}</p>
        </div>
        <Separator/>       
        <div className='flex justify-between'>
          <p>Drive</p>
          <p>{data.drive}</p>
        </div>
        <Separator/>
        <div className='flex justify-between'>
          <p>Mileage</p>
          <p>{data.mileage}</p>
        </div>
        <Separator/>
        <div className='flex justify-between'>
          <p>Engine Size</p>
          <p>{data.engine_size}</p>
        </div>
        <Separator/>
        <div className='flex justify-between'>
          <p>Fuel Type</p>
          <p>{data.fuel_type}</p>
        </div>
        <Separator/>
        <div className='flex justify-between'>
          <p>Transmission</p>
          <p>{data.transmission}</p>
        </div>
        <Separator/>
        <div className='flex justify-between'>
          <p>Year of manufacture</p>
          <p>{data.year}</p>
        </div>


      </div>

    </div>

      
    </>
  )
}