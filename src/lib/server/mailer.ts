import nodemailer from 'nodemailer';
import { MAILER_HOST, MAILER_USER, MAILER_PASSWORD, NODE_ENV } from '$env/static/private';
import { globalConfig } from '$lib/config/config';
import { promises as fs } from 'fs';
import * as path from 'path';

export interface CustomMail {
  subject: string;
  templateName: string;
  to?: string;
  data?: { [key: string]: string };
}

export async function sendMail(mail: CustomMail) {
  const basePath = `${path.resolve()}/static/mail`;
  const baseTemplate = await fs.readFile(`${basePath}/base.html`, 'utf-8');
  const template = await fs.readFile(`${basePath}/${mail.templateName}.html`, 'utf-8');

  let html = baseTemplate.replace('%title%', mail.subject).replace('%content%', template);

  if (mail.data) {
    for (const [key, value] of Object.entries(mail.data)) {
      html = html.replace(`%${key}%`, value);
    }
  }

  return getMailTransport().sendMail({
    subject: mail.subject,
    to: mail.to ?? globalConfig.mail.contact,
    html: html,
  });
}

function getMailTransport() {
  const isDevEnv = NODE_ENV === 'development';

  const transport = {
    host: isDevEnv ? 'localhost' : MAILER_HOST,
    port: isDevEnv ? 1025 : 465,
    secure: !isDevEnv,
    auth: {
      user: MAILER_USER,
      pass: MAILER_PASSWORD,
    },
  };

  const defaults = {
    from: globalConfig.mail.sender,
  };

  return nodemailer.createTransport(transport, defaults);
}
