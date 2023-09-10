import type { PageServerLoad } from './$types';
import { getSoccerPredictions } from '$lib/ts/tippspiel/predictions';

export const load: PageServerLoad = () => {
  return {
    predictions: getSoccerPredictions(),
  };
};
