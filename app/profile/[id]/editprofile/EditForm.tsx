import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  CustomAuthCard,
  CardContent,
  
  CardHeader,
  
} from '@/components/ui/custom-auth-card';
import { updateProfile } from '@/app/actions/profile';
import Image from 'next/image';

type User = Database['public']['Tables']['profiles']['Row'];

export default function EditForm({ user }: { user: User }) {
  const updateProfileWithId = updateProfile.bind(null, user.id);
  return (
    <div className="flex justify-center">
      <CustomAuthCard className="w-[380px]">
        <CardHeader></CardHeader>
        <CardContent className="grid gap-2">
         

          <form
            className="flex flex-col space-y-2 items-center"
            action={updateProfileWithId}
          >
            <div className="w-[200px] h-[200px] relative border">
              <Image
                alt="profile picture"
                src={user.avatar_url ?  `https://uqvgrgiggdjwexfirrqu.supabase.co/storage/v1/object/public/car_images/${user.avatar_url}` : ``}
                fill
                priority
                sizes="200px"
                className="object-cover"
              />
            </div>
            <label htmlFor="file"></label>
            <Input type="file" name="file" id="file" />
            <label htmlFor="username"></label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="username"
              defaultValue={user?.name}
            />
            <label htmlFor="email"></label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              defaultValue={user?.email}
              disabled
            />

            <Button type="submit" className="w-full">
              Update profile
            </Button>
          </form>
        </CardContent>
      </CustomAuthCard>
    </div>
  );
}
