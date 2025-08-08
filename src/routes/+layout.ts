import type { Load } from '@sveltejs/kit';

export interface NamaFile {
  pathname: string | null;
}

const load: Load = ({ url }): NamaFile => {
  return {
    pathname: url.pathname || null
  };
};
