'use server';
import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function updateProfile(id: string, formData: FormData) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const name = formData.get('name') as string;
  const file = formData.get('file') as File;

  if (user) {
    const fileName = file.name;
    const extension = fileName.split('.').pop();
    const filepath = `/${user.id}-${Math.random()}.${extension}`;

    const  {data: responseData} = await supabase.storage.from('avatars').update(filepath, file)
    const {error} = await supabase.from('profiles').update({
      name,
      avatar_url: responseData?.path as string      
    }).eq('id', user.id)
    if(error){
      console.log(error.message);
      redirect('/error')
      
    }
    revalidatePath('/')
    redirect('/profile')
  }
}
