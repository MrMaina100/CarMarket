'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { ChangeEvent,  FormEvent, useState } from "react"
import { Session } from "@supabase/supabase-js"
import supabaseClient from "@/lib/utilities/supabaseClient"
import { Icons } from "@/components/ui/icons"
import { toast } from "sonner"

export default function Form({session}:{session: Session | null}) {
  const route = useRouter( )

  const [isLoading, setIsLoading] = useState(false)
  const [imageUploading, setImageUploading] = useState(false)
  const [formData , setFormData] = useState({
    car_name:'',
    year:'',
    engine_size:'',
    drive:'',
    fuel_type:'',
    transmission:'',
    mileage:'',
    location:'',
    price:'',
    image_url: []
  })
   const user = session?.user  

  const {car_name, year, engine_size, drive, fuel_type, transmission, mileage, location, price, image_url} = formData

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{    
      setFormData((prevstate) => ({
        ...prevstate,
        [e.target.name]: e.target.value
      }));
   
  }

 const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files;  
  if(files){
    try {

    setImageUploading(true)  
    const imageUrls: string[] = []
    for(const file of files){
      const fileExt = file.name.split('.').pop()
     const filepath = `/${user!.id}-${Math.random()}.${fileExt}`

      const {data, error} = await supabaseClient.storage.from('car_images').upload(filepath, file)
      if(error){
        alert(error.message)
      }else{
        imageUrls.push(data.path)
      }
    }
    setFormData((prevState)=>({
      ...prevState,
      image_url: imageUrls as any
    }))
      
    } catch (error) {
      toast.error('uploading images failed')
      
    }finally{
      setImageUploading(false)
    }    
    
  }
};




  
  const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

   if(user){  
    try {
      setIsLoading(true)
      await supabaseClient.from('cars').insert({
      ...formData,
      user_id : user.id
    }) 
      
    } catch (error) {
      toast.error('something went wrong')
      console.log(error);  

      
    } finally{
    setIsLoading(false)
    route.push('/explore')
    route.refresh()

    }  
 
   }
  }
   
  return (
    <div className=" flex justify-center ">
      <form onSubmit={handleSubmit} className="w-90  md:w-1/2 md:shadow-xl p-8">
        <div className="grid gap-2 items-center">
        <Label htmlFor="car_name">Car Name</Label>
        <Input
        type="text"
        name="car_name"
        value={car_name}
        onChange={handleChange}
        />
        <Label htmlFor="year">Year</Label>
        <Input
        type="text"
        name="year"
        value={year}
        onChange={handleChange}
        />
        <Label htmlFor="engine_size">Engine Size</Label>
        <Input
        type="text"
        value={engine_size}
        name="engine_size"
        onChange={handleChange}
        />
        <Label htmlFor="drive">Drive</Label>
        <Input
        type="text"
        value={drive}
        name="drive"
        onChange={handleChange}
        />
        <Label htmlFor="fuel_type">Fuel type</Label>
        <Input
        type="text"
        value={fuel_type}
        name="fuel_type"
        onChange={handleChange}
        />
        <Label htmlFor="transmission">Transmission</Label>
        <Input
        type="text"
        value={transmission}
        name="transmission"
        onChange={handleChange}
        />
        <Label htmlFor="mileage">Mileage</Label>
        <Input
        type="text"
        value={mileage}
        name="mileage"
        onChange={handleChange}
        />
        <Label htmlFor="location">Location</Label>
        <Input
        type="text"
        value={location}
        name="location"
        onChange={handleChange}
        />
        <Label htmlFor="price">Price</Label>
        <Input
        type="text"
        value={price}
        name="price"
        onChange={handleChange}
        />

        {/* image uploads */}
        <Label htmlFor="image_urls">
          {imageUploading ? 'uploading images' : 'Upload Images'}
        </Label>
        <Input
        type="file"
        name="image_urls"
        accept="image/*"
        multiple
        onChange={handleImageChange}       
        
        />      
     

        </div>
        <Button 
            type="submit"
            disabled={imageUploading}             
            >
               {isLoading &&(
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>

               )}
               Create Post
            </Button>

       

      </form>
    </div>
  )
}