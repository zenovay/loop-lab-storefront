import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// BASE_PATH is the path GitHub Pages serves the project site under (/loop-lab-storefront/).
// RELEASE is the deployed commit SHA, so every Sentry event names the exact commit it came from.
// SENTRY_ENVIRONMENT is `production` only in the deploy workflow.
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react()],
  define: {
    __RELEASE__: JSON.stringify(process.env.RELEASE ?? 'local'),
    __SENTRY_ENVIRONMENT__: JSON.stringify(process.env.SENTRY_ENVIRONMENT ?? 'development'),
    __SENTRY_DSN__: JSON.stringify(process.env.SENTRY_DSN ?? ''),
  },
  build: {
    // Unminified, with source maps, so a stack frame names the repository file and line.
    minify: false,
    sourcemap: true,
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
})
