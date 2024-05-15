import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '~core': resolve(__dirname, 'packages/core/src'),
      '~vue': resolve(__dirname, 'packages/vue/src')
    }
  },
  test: {
    globals: true,
    coverage: {
      provider: 'istanbul',
      all: true,
      cleanOnRerun: true,
      reporter: ['text', 'html-spa', 'lcov'],
      include: ['**/*.ts', '**/*.tsx', '**/*.vue'],
      exclude: ['**/*.{d,spec,config}.ts', '**/index.ts', '**/mocks/**/*.*']
    }
  }
})
