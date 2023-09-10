import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  return {
    meta: {
      title: 'CubeTimer',
      description: 'Speedcube Timer mit Synchronisation',
      keywords: 'rubiks cube, speedcube, timer',
    },
    body: {
      fixedHeight: true,
      overflowHidden: true,
    },
  };
};
