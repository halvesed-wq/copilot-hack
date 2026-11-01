import adapter from '@sveltejs/adapter-vercel';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			// Consult https://kit.svelte.dev/docs/integrations#preprocessors
			// for more information about preprocessors
			preprocess: vitePreprocess(),

			// Deployed on Vercel; adapter-auto would try to install this adapter at build time.
			// See https://kit.svelte.dev/docs/adapters for more information about adapters.
			adapter: adapter(),

			// SvelteKit 3 no longer provides `$lib` by default
			alias: { $lib: 'src/lib' }
		})
	]
});
