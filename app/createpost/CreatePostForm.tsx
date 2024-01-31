'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { Session } from "@supabase/supabase-js"
import supabaseClient from "@/lib/utilities/supabaseClient"
import { Icons } from "@/components/ui/icons"
import { toast } from "sonner"
//react hook-form
import {useForm, type FieldValues} from 'react-hook-form'

export default function CreatePostForm({session}:{session: Session | null}) {
  const route = useRouter( )
  const { register, reset, handleSubmit, formState:{isSubmitting, errors} } = useForm()
   const user = session?.user  

  const onSubmit = async(data:FieldValues)=>{   

   if(user){      
    try {

      //file upload  
      const imageUrls: string[] = [];

        for (const file of data.image_url) {
          const fileExt = file.name.split('.').pop();
          const filepath = `/${user!.id}-${Math.random()}.${fileExt}`;

          const { data: responseData, error } = await supabaseClient
            .storage
            .from('car_images')
            .upload(filepath, file);

          if (error) {
            toast.error('Image uploads failed');
          } else {
            imageUrls.push(responseData.path);
          }
        }

        await supabaseClient.from('cars').insert({
          ...data,
          user_id: user.id,
          image_url: imageUrls,
        });
     
    
      
    } catch (error) {
      toast.error('something went wrong')
      console.log(error);  

      
    }finally{
      toast.success('Post created successfully')
      reset()
      route.push('/explore');
      route.refresh();
    }  
 
   }
  }
   
  return (
    <div className=" flex justify-center ">
      <form onSubmit={handleSubmit(onSubmit)} className="w-90  md:w-1/2 md:shadow-xl p-8">
        <div className="grid gap-2 items-center">
        <Label htmlFor="car_name">Car Name</Label>
        <Input
        type="text"
        {...register('car_name',{required:'please fill in the field'})}
        />
        {errors.car_name&&(
         <p className="text-xs text-red-500">{`${errors.car_name.message}`}</p>
        )}

        <Label htmlFor="year">Year</Label>
        <Input
        type="text"
        {...register('year', {required:'please fill in the field'})}
        />
         {errors.year&&(
         <p className="text-xs text-red-500">{`${errors.year.message}`}</p>
        )}

        <Label htmlFor="engine_size">Engine Size</Label>
        <Input
        type="text"
        {...register('engine_size', {required:'please fill in the field'})}
        />
         {errors.engine_size&&(
         <p className="text-xs text-red-500">{`${errors.engine_size.message}`}</p>
        )}
        
        <Label htmlFor="drive">Drive</Label>
        <Input
        type="text"
        {...register('drive',{required:'please fill in the field'})}
        />
        {errors.drive&&(
         <p className="text-xs text-red-500">{`${errors.drive.message}`}</p>
        )}

        <Label htmlFor="fuel_type">Fuel type</Label>
        <Input
        type="text"
        {...register('fuel_type', {required:'please fill in the field'})}
        />
        {errors.fuel_type&&(
         <p className="text-xs text-red-500">{`${errors.fuel_type.message}`}</p>
        )}

        <Label htmlFor="transmission">Transmission</Label>
        <Input
        type="text"
        {...register('transmission', {required:'please fill in the field'})}
        />
        {errors.transmission&&(
         <p className="text-xs text-red-500">{`${errors.transmission.message}`}</p>
        )}

        
        <Label htmlFor="mileage">Mileage</Label>
        <Input
        type="text"
        {...register('mileage', {required:'please fill in the field'})}
        />
         {errors.mileage&&(
         <p className="text-xs text-red-500">{`${errors.mileage.message}`}</p>
        )}

        <Label htmlFor="location">Location</Label>
        <Input
        type="text"
        {...register('location',{required:'please fill in the field'})}
        />
        {errors.location&&(
         <p className="text-xs text-red-500">{`${errors.location.message}`}</p>
        )}


        <Label htmlFor="price">Price</Label>
        <Input
        type="text"
        {...register('price', {required:'please fill in the field'})}
        />
        {errors.price&&(
         <p className="text-xs text-red-500">{`${errors.price.message}`}</p>
        )}

        {/* image uploads */}
        <Label htmlFor="image_url">
          Upload Images          
        </Label>
        <Input
        type="file"        
        accept="image/*"
        {...register('image_url',)}
        multiple        
       
        />
         {errors.image_url&&(
         <p className="text-xs text-red-500">{`${errors.image_url.message}`}</p>
        )}    
     

        </div>
        <Button 
            type="submit"
            disabled={isSubmitting} 
            className="mt-1"            
            >
             {
                  isSubmitting ? (
                     <div className="flex space-x-1">
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>                     
                     <p>Creating post...</p>
                     </div>
                  ):(
                     <p> Create Post</p>
                  )
               }
              
            </Button>      

      </form>
    </div>
  )
}