import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({ hostname: 'https://magnetoterapija.lt' }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      },
    },
    // Use esbuild for minification instead since it's built-in with Vite
    minify: 'esbuild',
    // Remove terser options
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});