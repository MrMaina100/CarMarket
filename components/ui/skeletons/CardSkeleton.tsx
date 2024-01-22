import { Skeleton } from "@/components/ui/skeleton";

import { cookies } from 'next/headers';
import { createClient } from '@/lib/utilities/supabaseServer';

export async function SkeletonCards(){

  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data} = await supabase.from('cars').select()
   return(
      <>
      {data && data.map((apiData)=>(
          <div key={apiData.id} className="mt-2 flex flex-col space-4 items-center md:flex-row md:space-x-8 md:space-y-0">
         <Skeleton className="w-72">
            <div className="grid gap-2 p-2 h-34">
               {/* img */}
               <Skeleton className="h-48"/>
               <Skeleton className="w-16"/>
               <Skeleton className="w-16"/>
               <Skeleton className="w-16"/>
            </div>

         </Skeleton>
      </div>

      ))}
     
      </>
   )
}