import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  return {
    meta: {
      title: 'Impressum',
      keywords: 'imprint, impressum',
    },
    body: {
      fixedHeight: true,
    },
  };
};
