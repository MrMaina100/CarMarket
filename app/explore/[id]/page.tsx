import { createClient } from '@/lib/supabase/server';

import DetailsDisplay from './DetailsDisplay';

export default async function CarListing({
  params: { id },
}: {
  params: { id: string };
}) {
  const supabase = createClient();
  const { data } = await supabase
    .from('cars')
    .select('*, profiles(*)')
    .match({ id })
    .single();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!data) {
    return <p>something went wrong, it not you its us</p>;
  }

  return <DetailsDisplay data={data} session={session} />;
}
