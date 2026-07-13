import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  root: __dirname,
  plugins: [react()],
  cacheDir: '../../node_modules/.vite/apps/web',
  server: { port: 4200 },
  build: {
    outDir: '../../dist/apps/web',
    emptyOutDir: true,
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
