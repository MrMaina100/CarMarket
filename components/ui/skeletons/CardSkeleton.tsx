import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCards(){
   return(
      <>
      <div>
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
      </>
   )
}