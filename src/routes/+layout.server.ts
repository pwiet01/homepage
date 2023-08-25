import { NODE_ENV } from '$env/static/private';

export function load() {
  return {
    debug: NODE_ENV === 'development',
  };
}
