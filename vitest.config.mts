import { defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config.mts'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      coverage: {
        provider: 'istanbul',
        all: true,
        cleanOnRerun: true,
        reporter: ['text', 'html-spa', 'lcov'],
        include: ['**/*.ts', '**/*.tsx', '**/*.vue'],
        exclude: [
          '**/*.{d,spec,config}.ts',
          '**/{index.ts,App.vue}',
          '**/mocks/**/*.*',
          'packages/core/src/main/factories/**/*.*',
          '!packages/core/src/main/factories/validation/**/*.*'
        ]
      }
    }
  })
)
