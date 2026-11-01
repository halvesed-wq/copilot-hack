import { env } from '$env/dynamic/private';

// SERVER_URL is injected by the Vercel service binding (see vercel.json); `vercel dev` sets it locally
export function serverUrl(path: string): URL {
  const base = env.SERVER_URL;
  if (!base) {
    throw new Error('SERVER_URL is not set. Run the app with `vercel dev` from the repository root.');
  }
  return new URL(path, base.endsWith('/') ? base : `${base}/`);
}
