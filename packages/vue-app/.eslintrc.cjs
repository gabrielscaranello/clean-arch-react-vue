/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
const globalConfig = require('../../eslintrc.base.cjs')

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
    ecmaVersion: 'latest',
    extraFileExtensions: ['.vue']
  },
  rules: {
    ...globalConfig.rules,

    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    'vue/no-deprecated-slot-attribute': 'off'
  }
}
