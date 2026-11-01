import { SERVER_URL } from '$app/env/private';

// SERVER_URL is injected by the Vercel service binding (see vercel.json); `vercel dev` sets it locally
export function serverUrl(path: string): URL {
  if (!SERVER_URL) {
    throw new Error('SERVER_URL is not set. Run the app with `vercel dev` from the repository root.');
  }
  return new URL(path, SERVER_URL.endsWith('/') ? SERVER_URL : `${SERVER_URL}/`);
}
