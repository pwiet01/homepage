import { error } from '@sveltejs/kit';
import { NODE_ENV } from '$env/static/private';

export function load() {
  if (NODE_ENV !== 'development') {
    throw error(404, 'Not Found');
  }
}
