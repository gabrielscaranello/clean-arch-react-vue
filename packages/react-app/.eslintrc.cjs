module.exports = {
  root: true,
  extends: ['../../eslintrc.base.cjs', 'plugin:react-hooks/recommended'],
  env: { browser: true, es2020: true },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
}
