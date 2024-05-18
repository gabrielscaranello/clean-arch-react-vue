/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
const globalConfig = require('../../.eslintrc.cjs')

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'love',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    ...globalConfig.rules
  }
}
