import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({command}) => ({
  plugins: [react()],
  // root: path.resolve(__dirname, 'public'),
  base: '',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
  server: {
    port: 3000,
    proxy: {
      '/content': {
        target: 'http://localhost:4503',
        changeOrigin: true
      },
      '/graphql': {
        target: 'http://localhost:4503',
        changeOrigin: true
      }
    }
  },
}))
