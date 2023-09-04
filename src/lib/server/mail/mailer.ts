import nodemailer from 'nodemailer';
import { MAILER_HOST, MAILER_USER, MAILER_PASSWORD } from '$env/static/private';
import { globalConfig } from '$lib/config/globalConfig';
import { serverConfig } from '$lib/server/config/serverConfig';
import type { ComponentProps, ComponentType, SvelteComponent } from 'svelte';
import Base from '$lib/server/mail/templates/Base.svelte';

export interface CustomMail<Component extends SvelteComponent> {
  to?: string;
  subject: string;
  template: ComponentType<Component>;
  props?: ComponentProps<Component>;
}

export async function sendMail<Component extends SvelteComponent>(mail: CustomMail<Component>) {
  // @ts-ignore
  const content = mail.template.render(mail.props).html;

  // @ts-ignore
  const { html } = Base.render({
    title: mail.subject,
    content: content,
  });

  return getMailTransport().sendMail({
    subject: mail.subject,
    to: mail.to ?? globalConfig.mail.contact,
    html: html,
  });
}

function getMailTransport() {
  const transport = {
    host: serverConfig.isDevEnv ? 'localhost' : MAILER_HOST,
    port: serverConfig.isDevEnv ? 1025 : 465,
    secure: !serverConfig.isDevEnv,
    auth: {
      user: MAILER_USER,
      pass: MAILER_PASSWORD,
    },
  };

  const defaults = {
    from: serverConfig.mail.sender,
  };

  return nodemailer.createTransport(transport, defaults);
}
