import { fileURLToPath } from 'url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@mocks': fileURLToPath(new URL('./tests/__mocks__', import.meta.url))
    }
  },
  test: {
    globals: true,
    environment: 'node',
    root: fileURLToPath(new URL('./', import.meta.url)),
    coverage: {
      provider: 'istanbul',
      all: true,
      cleanOnRerun: true,
      reporter: ['text', 'html-spa', 'lcov'],
      include: ['src/**/*.ts'],
      exclude: [
        '**/*.{d,spec,config}.ts',
        '**/index.ts',
        '**/mocks/**/*.*',
        'src/main/factories/**/*.*',
        '!src/main/factories/validation/**/*.*'
      ]
    }
  }
})
