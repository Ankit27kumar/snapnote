import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: vite_port, // Assuming vite_port is defined elsewhere
    proxy: {
      '/api': {
        target: import.meta.env.VITE_API || 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});

