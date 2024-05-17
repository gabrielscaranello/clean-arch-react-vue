import { defineConfig, mergeConfig } from 'vitest/config'

import sharedConfig from '../../vitest.config.mjs'

export default mergeConfig(
  sharedConfig,
  defineConfig({
    test: {
      environment: 'jsdom'
    }
  })
)
