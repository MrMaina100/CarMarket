import { Suspense } from "react"
import CarCards from "@/components/ui/CarCard"
import { SkeletonCards } from "@/components/ui/skeletons/CardSkeleton"



export default  function Explorepage() {  
  return (
    <div>
      <h1>View a variety of cars</h1>
      <div className="mt-2  flex flex-col space-y-4 items-center md:flex-row md:space-x-4 md:space-y-0 md:px-4">

        <Suspense fallback={<SkeletonCards/>}>
          <CarCards/>
        </Suspense>        
        
      </div>

      
    </div>
  )
}