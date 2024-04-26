import { Button } from './button';
import Link from 'next/link';
import ProfileComponent from './ProfileComponent';
import { createClient } from '@/lib/supabase/server';

export default async function Header() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <div className=" p-2 flex justify-between relative z-20 ">
        <h1 className="font-bold ">Turbo Trader</h1>

        {user ? (
          <ProfileComponent />
        ) : (
          <div className="flex items-center space-x-5">
            <Button asChild variant="outline">
              <Link href="/signin">Sign in</Link>
            </Button>

            <Button asChild className="px-5">
              <Link href="/signup">Join</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
