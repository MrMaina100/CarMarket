"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PropTypes } from "@/lib/types";
import { User, Session } from "@supabase/supabase-js";


//shadcn 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



export default function DetailsDisplay({
  data,  
  session
}: {
  data: PropTypes
 
  session: Session | null
}) {
  const userId = session?.user.id
   
  

  return (
    <>
      <div className="flex flex-col space-y-4 p-4 items-center md:flex-row  md:space-y-0">
        {/* images will go here */}
        <div className="h-80 w-96 md:w-1/2 ">
         <Carousel className="">

          <CarouselContent>
            {data.image_url?.map((images:string)=>(
              <CarouselItem key={data.id}>
                <div className="w-full h-80">
                  <Image
                    src={`https://uqvgrgiggdjwexfirrqu.supabase.co/storage/v1/object/public/car_images/${images}`}
                    alt="multiple car images"
                    width={400}
                    height={600}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>

              </CarouselItem>
            ))}
            
          </CarouselContent>
           <CarouselPrevious className="absolute left-2 bg-white"/>
          <CarouselNext className="absolute right-1 bg-white "/>
         

         </Carousel>
        </div>

        {/* car details */}

        <div className="mt-4 w-[400px] p-8 justify-center">
          <div className="flex justify-between">
            <p>Year of manufacture</p>
            <p>{data.year}</p>
          </div>
          <Separator />
          <div className="flex justify-between">
            <p>Current Location</p>
            <p>{data.location}</p>
          </div>
          <Separator />
          <div className="flex justify-between">
            <p>Drive</p>
            <p>{data.drive}</p>
          </div>
          <Separator />
          <div className="flex justify-between">
            <p>Mileage</p>
            <p>{data.mileage}</p>
          </div>
          <Separator />
          <div className="flex justify-between">
            <p>Engine Size</p>
            <p>{data.engine_size}</p>
          </div>
          <Separator />
          <div className="flex justify-between">
            <p>Fuel Type</p>
            <p>{data.fuel_type}</p>
          </div>
          <Separator />
          <div className="flex justify-between">
            <p>Transmission</p>
            <p>{data.transmission}</p>
          </div>
          <Separator />
          <div className="flex justify-between">
            <p>Year of manufacture</p>
            <p>{data.year}</p>
          </div>

          <div className="mt-2">
            {data.user_id !== userId && (
              <div>
                <Button asChild>
                  <Link href={`mailto:${data.profiles?.email}`}>
                    contact owner
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

//  {
//                data.image_url?.map((images:string)=>(
//                   <div key={data.id} className='flex-0 flex-shrink-0 flex-basis-full min-w-0'>
//                      <Image src={`https://uqvgrgiggdjwexfirrqu.supabase.co/storage/v1/object/public/car_images/${images}`} alt='multiple car images' width={700} height={100}/>

//                   </div>
//                ))
//             }
