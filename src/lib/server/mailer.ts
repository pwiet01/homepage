import nodemailer from 'nodemailer';
import { MAILER_HOST, MAILER_USER, MAILER_PASSWORD } from '$env/static/private';
import { globalConfig } from '$lib/config/globalConfig';
import { promises as fs } from 'fs';
import { serverConfig } from '$lib/server/config/serverConfig';

export interface CustomMail {
  subject: string;
  templateName: string;
  to?: string;
  data?: { [key: string]: string };
}

export async function sendMail(mail: CustomMail) {
  const basePath = serverConfig.mail.templatePath;
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
