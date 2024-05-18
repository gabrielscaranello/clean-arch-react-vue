import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    coverage: {
      provider: 'istanbul',
      all: true,
      cleanOnRerun: true,
      reporter: ['text', 'html-spa', 'lcov'],
      include: ['packages/**/src/**/*.{ts,vue}'],
      exclude: [
        '**/*.{d,spec,config}.ts',
        '**/{index.ts,App.vue}',
        '**/__mocks__/**/*.*',
        '**/factories/**/*.*',
        '!**/factories/validation/**/*.*'
      ]
    }
  }
})
