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

import { Avatar, AvatarFallback, AvatarImage } from './avatar';

export default function ProfileComponent({ data }: any) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage
              src={`https://uqvgrgiggdjwexfirrqu.supabase.co/storage/v1/object/public/car_images/${data.avatar_url}`}
            />
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
