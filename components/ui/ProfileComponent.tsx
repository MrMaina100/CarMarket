import LogoutButton from './LogoutButton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { PersonIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { createClient } from '@/lib/supabase/server';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Button } from './button';

export default function ProfileComponent({data}:any) {
  const supabase = createClient();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {/* <Avatar>
            {data?.map((profile) => (
              <div key={profile.avatar_url}>
                <AvatarImage src={`${profile.avatar_url}`} />
              </div>
            ))}
            <AvatarFallback>
              <PersonIcon />
            </AvatarFallback>
          </Avatar> */}
          <Button>p</Button>
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
