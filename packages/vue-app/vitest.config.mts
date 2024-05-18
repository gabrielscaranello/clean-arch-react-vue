import { fileURLToPath } from 'node:url'
import { defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config.mjs'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
        provider: 'istanbul',
        all: true,
        cleanOnRerun: true,
        reporter: ['text', 'html-spa', 'lcov'],
        include: ['src/**/*.{ts,vue}'],
        exclude: ['**/*.{d,spec,config}.ts', '**/{index.ts,App.vue}', '**/__mocks__/**/*.*']
      }
    }
  })
)
