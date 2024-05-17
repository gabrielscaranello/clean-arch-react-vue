import { defineConfig, mergeConfig } from 'vitest/config'

import sharedConfig from '../../vitest.config.mjs'
import viteConfig from './vite.config.mts'

const localConfig = mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom'
    }
  })
)

export default mergeConfig(sharedConfig, localConfig)
