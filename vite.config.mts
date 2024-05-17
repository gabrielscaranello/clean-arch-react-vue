import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '~core': resolve(__dirname, 'packages/core/src'),
      '~vue': resolve(__dirname, 'packages/vue-app/src'),
      '~mocks': resolve(__dirname, 'tests/mocks')
    }
  }
})
