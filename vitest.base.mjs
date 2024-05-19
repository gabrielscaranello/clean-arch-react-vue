import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      provider: 'istanbul',
      all: true,
      cleanOnRerun: true,
      reporter: ['text', 'html-spa', 'lcov']
    }
  }
})
