import { NODE_ENV } from '$env/static/private';
import * as path from "path";

export const serverConfig = {
  isDevEnv: isDevEnv(),
  mail: {
    templatePath: getMailTemplatePath(),
    sender: 'no-reply@pwietmaier.de',
  },
};

function isDevEnv() {
  return NODE_ENV === 'development';
}

function getMailTemplatePath() {
  const paths = [process.cwd()];

  if (isDevEnv()) {
    paths.push('static');
  }

  paths.push('mail');
  return path.join(...paths);
}
