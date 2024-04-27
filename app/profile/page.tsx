import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ProfileComponent from './Profilepage';

export default async function page() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userid = user?.id;

  const { data: cars } = await supabase
    .from('cars')
    .select()
    .eq('user_id', userid as string);

  const { data: loggedInUser } = await supabase
    .from('profiles')
    .select()
    .eq('user_id', userid as string)
    .single();

  if (!user) {
    redirect('/signin');
  }

  return <ProfileComponent cars={cars} loggedInUser={loggedInUser} />;
}
