import { error } from '@sveltejs/kit';
import { serverConfig } from '$lib/server/config/serverConfig';

export function load() {
  if (!serverConfig.isDevEnv) {
    throw error(404, 'Not Found');
  }
}
