import { KV_REST_API_URL, KV_REST_API_TOKEN } from '$env/static/private';
import { createClient } from '@vercel/kv';

export function getKvClient() {
  return createClient({
    url: KV_REST_API_URL,
    token: KV_REST_API_TOKEN,
  });
}
