import { fileURLToPath, URL } from 'node:url'
import Vue from '@vitejs/plugin-vue'
import Fonts from 'unplugin-fonts/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Vue(),
    Fonts({
      google: {
        families: [
          { name: 'Poppins', styles: 'wght@100;300;400;500;700;900' },
          { name: 'Material Symbols Outlined', styles: 'wght@100;300;400;500;700;900' }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@vue-app': fileURLToPath(new URL('./src', import.meta.url)),
      '@core': fileURLToPath(new URL('../core/src', import.meta.url))
    }
  },
  server: {
    port: 8080
  }
})
