import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
  SERVER_URL: {
    description: 'Base URL of the internal Flask service, injected at runtime by the Vercel service binding',
    // Optional here because bindings only resolve at runtime, not during the build
    schema: (value) => value
  }
});
