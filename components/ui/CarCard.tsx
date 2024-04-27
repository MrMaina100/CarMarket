import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { CustomCard } from './customcard';

export default async function CarCards() {
  const supabase = createClient();

  const { data } = await supabase
    .from('cars')
    .select('*, profiles(*)')
    .order('created_at', { ascending: false });
  return (
    <>
      {data ? (
        data.map((apiData) => (
          <CustomCard key={apiData.id} className="w-72 overflow-hidden">
            <Link href={`/explore/${apiData.id}`}>
              <div className="relative h-[280px]">
                <Image
                  alt="car photo"
                  src={`https://uqvgrgiggdjwexfirrqu.supabase.co/storage/v1/object/public/car_images/${
                    apiData.image_url![0]
                  }`}
                  priority
                  fill
                  sizes="270px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col space-y-2 mt-2">
                <p>{apiData.car_name}</p>
                <div className="flex space-x-1 items-center pb-2">
                  {/* avatar */}
                  <h4 className=" text-sm text-muted-foreground">
                    {apiData.profiles?.name}
                  </h4>
                </div>
              </div>
              <Separator />
              <div className="flex flex-col space-y-1 items-start pt-1">
                <p className="text-xs text-muted-foreground">List price</p>
                <p className="text-sm leading-none">${apiData.price}</p>
              </div>
            </Link>
          </CustomCard>
        ))
      ) : (
        <p>No cars to display at the moment</p>
      )}
    </>
  );
}
