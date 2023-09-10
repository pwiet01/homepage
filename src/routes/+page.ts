import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  return {
    meta: {
      description:
        'Hey! Ich bin Patrice, Full Stack Web Developer aus Osnabrück. Hier möchte ich mich und einige meiner Projekte vorstellen.',
    },
  };
};
