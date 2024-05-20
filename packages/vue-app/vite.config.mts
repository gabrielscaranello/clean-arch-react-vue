import { fileURLToPath, URL } from 'node:url'
import Vue from '@vitejs/plugin-vue'
import Fonts from 'unplugin-fonts/vite'
import UnpluginComponents from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [
    Vue({ template: { transformAssetUrls } }),
    UnpluginComponents(),
    Vuetify({ autoImport: false, styles: 'sass' }),
    Fonts({
      google: {
        families: [{ name: 'Roboto', styles: 'wght@100;300;400;500;700;900' }]
      }
    })
  ],
  resolve: {
    alias: {
      '@vue-app': fileURLToPath(new URL('./src', import.meta.url)),
      '@styles': fileURLToPath(new URL('../styles/src', import.meta.url)),
      '@core': fileURLToPath(new URL('../core/src', import.meta.url))
    }
  },
  server: {
    port: 8080
  }
})
