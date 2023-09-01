import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import type { ContactFormData } from './_ts/types';
import { parseFormDataString } from '$lib/ts/formUtils';

export const actions: Actions = {
  contact({ request }) {
    return processContactAction(request);
  },
};

async function processContactAction(request: Request) {
  const data = await request.formData();
  let parsedData: ContactFormData;

  try {
    parsedData = {
      email: parseFormDataString(data, 'email', 50, (value) => /^\S+@\S+$/.test(value)),
      fullName: parseFormDataString(data, 'fullName', 50),
      message: parseFormDataString(data, 'message', 1000),
    };
  } catch (e) {
    return fail(400);
  }

  return {
    contactForm: {
      data: parsedData,
    },
  };
}
