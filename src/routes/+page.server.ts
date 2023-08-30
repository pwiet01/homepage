import type { Actions } from './$types';

export const actions: Actions = {
  async message() {
    await new Promise((r) => setTimeout(r, 2000));

    return {
      messageForm: {
        data: {},
      },
    };
  },
};
