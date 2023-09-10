import type { PageLoad } from './$types';
import { getAvailableTeams } from '$lib/ts/tippspiel/openLigaApi';

export const load: PageLoad = ({ fetch }) => {
  return {
    meta: {
      title: 'Debug',
    },
    openLigaTeams: getAvailableTeams(fetch, '2023'),
  };
};
