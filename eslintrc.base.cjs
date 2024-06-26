/* eslint-env node */

module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/strict-type-checked', 'love'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  root: true,
  rules: {
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',

    'consistent-return': 'error'
  }
}
