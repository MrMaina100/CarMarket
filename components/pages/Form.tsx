'use client'

import { createBrowserClient } from "@supabase/ssr"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useRouter } from "next/navigation"

import { ChangeEvent, FormEvent, useState } from "react"

export default function Form() {
  const route = useRouter()

  const [formData , setFormData] = useState({
    car_name:'',
    year:'',
    engine_size:'',
    drive:'',
    fuel_type:'',
    transmission:'',
    mileage:'',
    location:'',
    price:''
  })

  const {car_name, year, engine_size, drive, fuel_type, transmission, mileage, location, price} = formData

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setFormData((prevstate)=>({
      ...prevstate,
      [e.target.name] : e.target.value
    }))

  }
  const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    // need a supabase instance 
     const supabase = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
   )

   const { data : {user}} = await supabase.auth.getUser()

   if(user){
    await supabase.from('cars').insert({
      ...formData,
      user_id : user.id
    })
    route.push('/explore')
    route.refresh()

   }
  }
   
  return (
    <div>
      <form onSubmit={handleSubmit}>
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

        </div>
        <Button type="submit">
          create a post
        </Button>

       

      </form>
    </div>
  )
}