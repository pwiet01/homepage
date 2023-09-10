import { getCurrentMatchDay } from '$lib/ts/tippspiel/openLigaApi';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ fetch, data }) => {
  return {
    meta: {
      title: 'Tippspiel',
      description: 'Bundesliga Vorhersagen',
      keywords: 'tippspiel, bundesliga, kicktipp',
    },
    body: {
      fixedHeight: true,
    },
    matchDay: getCurrentMatchDay(fetch),
    ...data,
  };
};
