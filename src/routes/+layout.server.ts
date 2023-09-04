import { serverConfig } from '$lib/server/config/serverConfig';

export function load() {
  return {
    debug: serverConfig.isDevEnv,
  };
}
