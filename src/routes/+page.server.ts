import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import type { ContactFormData } from './_ts/types';
import { parseFormDataString } from '$lib/ts/formUtils';
import { sendMail } from '$lib/server/mail/mailer';
import Contact from '$lib/server/mail/templates/Contact.svelte';

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
    return fail(400, {
      contactForm: {
        success: false,
      },
    });
  }

  await sendMail({
    subject: 'Homepage Kontakt',
    template: Contact,
    props: {
      email: parsedData.email,
      name: parsedData.fullName,
      message: parsedData.message.split('\n').join('<br/>'),
    },
  });

  return {
    contactForm: {
      success: true,
    },
  };
}
