import { Button } from '@/components/ui/button';
import Link from 'next/link';

import CarCard from '@/components/ui/CarCard';
import { User } from '@supabase/supabase-js';
import { PropTypes } from '@/lib/types';
import CarCards from '@/components/ui/CarCard';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

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
          <div>Avatar pic</div>
          <div className="flex flex-col">
            <p>{loggedInUser?.name}</p>
            <p>{loggedInUser?.email}</p>
          </div>
          {/* our buttons */}
          <div className="flex space-x-2">
            <Button>Edit Profile</Button>
            <Button>Delete account</Button>
          </div>
        </div>
        {/* second div with the user's car if any */}
        <div className='grid grid-cols-1 gap-2 md:max-w-[1400px] md:grid-cols-4'>
          {
            cars ? (
              <>
              {cars.map((listedCars)=>(
                

              ))}

              </>

            ):(
              <>

              </>

            )
          }



        </div>

        
      </div>
    </>
  );
}
