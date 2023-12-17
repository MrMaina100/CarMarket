import CarCards from '@/components/ui/CarCard'
import { cookies } from 'next/headers';
import { createClient } from '@/lib/utilities/supabaseServer';

export default async function Explorepage() {

  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data} = await supabase.from('cars').select()

  
  return (
    <div>
      <h1>View a variety of cars</h1>
      <div className="mt-2 flex flex-col space-4 items-center md:flex-row md:space-x-8 md:space-y-0">

         {/*the cards will go here  */}
        {data ? (
         data.map((apiData)=>(
          <CarCards key={apiData.id}  data={apiData}/>          
        
         ))
        ):(
         <>
         <p>No cars to display at the moment</p>
         
         </>
        )}
        
      </div>

      
    </div>
  )
}