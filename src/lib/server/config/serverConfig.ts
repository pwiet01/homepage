import { NODE_ENV } from '$env/static/private';

export const serverConfig = {
  isDevEnv: isDevEnv(),
  mail: {
    sender: 'no-reply@pwietmaier.de',
  },
};

function isDevEnv() {
  return NODE_ENV === 'development';
}
