import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'common-ui',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
    },
  },
})
