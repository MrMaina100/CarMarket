'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { User } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/client';
import { Icons } from '@/components/ui/icons';
import { toast } from 'sonner';
import { CustomAuthCard, CardHeader,} from '@/components/ui/custom-auth-card';
//react hook-form
import { useForm } from 'react-hook-form';

type Data = Database['public']['Tables']['cars']['Row'];

export default function EditPostForm({data}:{data:Data}) {

  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm()
  
  return (
    <div className="flex justify-center">
      <CustomAuthCard className="w-[600px] p-4">
        <CardHeader>
          
        </CardHeader>
        <form  className="flex flex-col space-y-1 ">
          <div className="grid gap-2 items-center">
            <Label htmlFor="car_name">Car Name</Label>
            <Input
              type="text"
              defaultValue={data.car_name}
              {...register('car_name', {
                required: 'please fill in the field',
              })}
            />
            {errors.car_name && (
              <p className="text-xs text-red-500">{`${errors.car_name.message}`}</p>
            )}

            <Label htmlFor="year">Year</Label>
            <Input
              type="text"
              defaultValue={data.year}
              {...register('year', { required: 'please fill in the field' })}
            />
            {errors.year && (
              <p className="text-xs text-red-500">{`${errors.year.message}`}</p>
            )}

            <Label htmlFor="engine_size">Engine Size</Label>
            <Input
              type="text"
              defaultValue={data.engine_size}
              {...register('engine_size', {
                required: 'please fill in the field',
              })}
            />
            {errors.engine_size && (
              <p className="text-xs text-red-500">{`${errors.engine_size.message}`}</p>
            )}

            <Label htmlFor="drive">Drive</Label>
            <Input
              type="text"
              defaultValue={data.drive}
              {...register('drive', { required: 'please fill in the field' })}
            />
            {errors.drive && (
              <p className="text-xs text-red-500">{`${errors.drive.message}`}</p>
            )}

            <Label htmlFor="fuel_type">Fuel type</Label>
            <Input
              type="text"
              defaultValue={data.fuel_type}
              {...register('fuel_type', {
                required: 'please fill in the field',
              })}
            />
            {errors.fuel_type && (
              <p className="text-xs text-red-500">{`${errors.fuel_type.message}`}</p>
            )}

            <Label htmlFor="transmission">Transmission</Label>
            <Input
              type="text"
              defaultValue={data.transmission}
              {...register('transmission', {
                required: 'please fill in the field',
              })}
            />
            {errors.transmission && (
              <p className="text-xs text-red-500">{`${errors.transmission.message}`}</p>
            )}

            <Label htmlFor="mileage">Mileage</Label>
            <Input
              type="text"
              defaultValue={data.mileage}
              {...register('mileage', { required: 'please fill in the field' })}
            />
            {errors.mileage && (
              <p className="text-xs text-red-500">{`${errors.mileage.message}`}</p>
            )}

            <Label htmlFor="location">Location</Label>
            <Input
              type="text"
              defaultValue={data.location}
              {...register('location', {
                required: 'please fill in the field',
              })}
            />
            {errors.location && (
              <p className="text-xs text-red-500">{`${errors.location.message}`}</p>
            )}

            <Label htmlFor="price">Price</Label>
            <Input
              type="text"
              defaultValue={data.price}
              {...register('price', { required: 'please fill in the field' })}
            />
            {errors.price && (
              <p className="text-xs text-red-500">{`${errors.price.message}`}</p>
            )}

            {/* image uploads */}
            <Label htmlFor="image_url">Upload Images</Label>
            <Input
              type="file"
              defaultValue={data.image_url}
              accept="image/*"
              {...register('image_url', { required: 'Field cannot be empty' })}
              multiple
            />
            {errors.image_url && (
              <p className="text-xs text-red-500">{`${errors.image_url.message}`}</p>
            )}
          </div>
          <Button type="submit" disabled={isSubmitting} className="mt-1">
            {isSubmitting ? (
              <div className="flex space-x-1">
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                <p>Creating post...</p>
              </div>
            ) : (
              <p> Create Post</p>
            )}
          </Button>
        </form>
      </CustomAuthCard>
    </div>
  );
}