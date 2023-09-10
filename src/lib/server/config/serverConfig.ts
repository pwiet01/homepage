import { NODE_ENV } from '$env/static/private';

export const serverConfig = {
  isDevEnv: isDevEnv(),
  mail: {
    sender: 'no-reply@pwietmaier.de',
  },
  tippspiel: {
    oddsRedisKey: 'bl-odds',
  },
};

function isDevEnv() {
  return NODE_ENV === 'development';
}
