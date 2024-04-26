import LogoutButton from './LogoutButton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import Link from 'next/link';
import { PersonIcon } from '@radix-ui/react-icons';

import { createClient } from '@/lib/supabase/client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default async function ProfileComponent() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userid = user?.id;
  const { data } = await supabase
    .from('profiles')
    .select('avatar_url')
    .eq('id', userid as string);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            {data?.map((profile) => (
              <div key={profile.avatar_url}>
                <AvatarImage src={`${profile.avatar_url}`} />
              </div>
            ))}
            <AvatarFallback>
              <PersonIcon />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem>
            <Link href="/profile">Visit profile</Link>
          </DropdownMenuItem>
          {/* my profile */}
          <DropdownMenuItem>
            <Link href="/createpost">Create post</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
