import { createClient } from '@/lib/supabase/server';
import EditPostForm from './EditPostForm';

export default async function page({ params: { id } }: { params: { id: string } }) {
  const supabase = createClient();
  const {data} = await supabase.from('cars').select().match({id}).single()
  
  if(!data) return <p>ohh noo </p>

  return  <EditPostForm  data={data}/> 
}
