module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'standard-with-typescript',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.eslint.json'],
  },
  plugins: ['@typescript-eslint', 'react'],
  root: true,
  rules: {
    'react/prop-types': 'off', /**  jsでreactを使用する際にpropsの型定義機能を提供するライブラリ */
    'react/react-in-jsx-scope': 'off', /** Reactをimportが必須 */
    '@typescript-eslint/explicit-function-return-type': 'off', /** 関数の戻り値の型定義が必須 */
    'react/display-name': 'off', /** 関数名が必須(アロー関数無効) */
    '@typescript-eslint/triple-slash-reference': 'off', /** ///が禁止 */
    '@typescript-eslint/no-floating-promises': 'off', /** promiseに続くエラーハンドリングが必須 */
    '@typescript-eslint/consistent-type-definitions': 'off', /** typeかinterfaceのどちらかにする */
    '@typescript-eslint/array-type': 'off', /** 配列の型定義をT[]かArray<>のどちらかにする */
  },
  settings: {
    react: {
      version: 'detect',
    },
  }
};
