'use server';
import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function handleSignUp(formData: FormData) {
  const supabase = createClient();

  const email = formData.get('email') as string;
  const password = formData.get('email') as string;
  const user_name = formData.get('user_name') as string;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        user_name,
      },
    },
  });

  if (error) {
    redirect('/error');
  }

  revalidatePath('/');
  redirect('/confirmation');
}

export async function handleSignIn(formData: FormData) {
  const supabase = createClient();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect('/error');
  }

  revalidatePath('/');
  redirect('/');
}

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
