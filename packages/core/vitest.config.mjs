import { fileURLToPath } from 'url'
import { defineConfig, mergeConfig } from 'vitest/config'

import base from '../../vitest.base.mjs'

export default mergeConfig(
  base,
  defineConfig({
    resolve: {
      alias: {
        '@core': fileURLToPath(new URL('./src', import.meta.url)),
        '@mocks': fileURLToPath(new URL('./tests/__mocks__', import.meta.url))
      }
    },
    test: {
      environment: 'node',
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
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
)
