'use server';
import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


export async function passwordReset(formData: FormData) {
  const supabase = createClient();

  const email = formData.get('email') as string;

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/updatepassword`,
  });
  if (error) {
    redirect('/error');
  }
}

export async function updatePassword(formData: FormData) {
  const supabase = createClient();

  const password = formData.get('password') as string;

  const { error } = await supabase.auth.updateUser({
    password,
  });
  if (error) {
    redirect('/error');
  }
}
