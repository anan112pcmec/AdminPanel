import type { PageLoad } from './$types';
import { supabase } from '$lib/supabase/dbConnect';

export interface LandingPageAdmin {
  nama: string | null;
  id: string | null;
  jabatan?: string | null;
}

export const load: PageLoad = async ({ params }) => {
  const { data, error } = await supabase
  .from('admintest')
  .select('*')
  .eq('nama', "Faiz Hannan Hakim")

  if (error) {
    console.error('Error fetching admintest:', error);
  } else {
    console.log('Data fetched:', data);
    console.log(await supabase
    .from('admintest').select("*").eq('nama', "not null"));
  }

  return {
    countries: data ?? [],
    nama: data && data.length > 0 ? data[0].nama : 'Faiz',
    id: data && data.length > 0 ? String(data[0].id) : null,
    jabatan: data && data.length > 0 ? data[0].jabatan : null,
  };
};
