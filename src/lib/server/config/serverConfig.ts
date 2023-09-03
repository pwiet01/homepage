import { NODE_ENV } from '$env/static/private';

const isDevEnv = NODE_ENV === 'development';

export const serverConfig = {
  isDevEnv: isDevEnv,
  mail: {
    templatePath: `${process.cwd()}/static/mail`,
    sender: 'no-reply@pwietmaier.de',
  },
};
