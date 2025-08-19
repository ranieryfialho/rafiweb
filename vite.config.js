import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Nome da pasta do seu plugin
const pluginName = 'rafiweb-plugin';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  base: process.env.NODE_ENV === 'development'
    ? '/'
    : `/wp-content/plugins/${pluginName}/dist/`,

  build: {
    outDir: 'dist', 
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {} 
  },

  server: {
    origin: 'http://localhost:5173',
  },
})