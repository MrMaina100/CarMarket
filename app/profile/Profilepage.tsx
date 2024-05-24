import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CustomCard } from '@/components/ui/customcard';
import { Separator } from '@/components/ui/separator';
import EditProfileButton from '@/components/ui/EditProfileButton';
import DeleteProfileButton from '@/components/ui/DeleteProfileButton';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { PersonIcon } from '@radix-ui/react-icons';
import UpdateListing from '@/components/ui/UpdateListing';
import DeleteListing from '@/components/ui/DeleteListing';


type Cars = Database['public']['Tables']['cars']['Row'];
type loggedInUser = Database['public']['Tables']['profiles']['Row'];

export default function ProfileComponent({
  cars,
  loggedInUser,
}: {
  cars: Cars[] | null;
  loggedInUser: loggedInUser | null;
}) {
  return (
    <>
      <div className="flex flex-col space-y-4 items-center mt-4">
        {/* firts div with the users information */}
        <div className="flex flex-col space-y-2 items-center">
          {/*avatar will go here */}
          <Avatar className='w-[120px] h-[120px]'>
            <AvatarImage src={`https://uqvgrgiggdjwexfirrqu.supabase.co/storage/v1/object/public/car_images/${loggedInUser?.avatar_url}`} alt='profilepic'/>
            <AvatarFallback>
              <PersonIcon/>
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p>{loggedInUser?.name}</p>
            <p className="text-sm text-muted-foreground">
              {loggedInUser?.email}
            </p>
          </div>
          {/* our buttons */}
          <div className="flex space-x-2">
            <EditProfileButton id={loggedInUser?.id}/>
            <DeleteProfileButton id={loggedInUser?.id}/>
          </div>
        </div>
        {/* second div with the user's car if any */}
        <div className="flex flex-col">
          <p>
            creations({cars?.length})
          </p>
            <Separator />

        </div>
        <div className="grid grid-cols-1 gap-2 md:max-w-[1400px] md:grid-cols-4">
          {cars ? (
            <>
              {cars.map((listedCars) => (
                <CustomCard key={listedCars.id} className="w-64">
                  <Link href={`/explore/${listedCars.id}`}>
                    <div className="relative h-[280px]">
                      <Image
                        alt="car photo"
                        src={`https://uqvgrgiggdjwexfirrqu.supabase.co/storage/v1/object/public/car_images/${
                          listedCars.image_url![0]
                        }`}
                        priority
                        fill
                        sizes="270px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col space-y-2 mt-2">
                      <p>{listedCars.car_name}</p>
                    </div>
                    <Separator />
                    <div className="flex flex-col space-y-1 items-start pt-1">
                      <p className="text-xs text-muted-foreground">
                        List price
                      </p>
                      <p className="text-sm leading-none">
                        ${listedCars.price}
                      </p>
                    </div>
                  </Link>
                  <div className='flex space-x-1 pt-2'>
                    <UpdateListing id={listedCars.id}/>
                    <DeleteListing id={listedCars.id}/>
                     
                  </div>
                </CustomCard>
              ))}
            </>
          ) : (
            <>
            <div className='flex flex-col items-center'>
              <h1 className='text-2xl font-bold'>
                No cars Listed
              </h1>
              <p className="text-sm text-muted-foreground">
                When you create a car to list they  appear on your profile where you can manage them.
              </p>

              <Button asChild variant='outline'>
                <Link href='createpost'>
                  create a post
                </Link>

              </Button>

            </div>
            
            </>
          )}
        </div>
      </div>
    </>
  );
}
