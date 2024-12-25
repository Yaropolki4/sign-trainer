import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import typescript from '@typescript-eslint/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  eslintConfigPrettier,
  {
    ignores: [
      '**/configs/*',
      '**/build/*',
      '**/test-coverage-report/*',
      'tsconfig.json',
    ],
  },
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['@app', './src/app'],
            ['@pages', './src/pages'],
            ['@widgets', './src/widgets'],
            ['@features', './src/features'],
            ['@entities', './src/entities'],
            ['@shared', './src/shared'],
          ],
          extensions: ['.ts', '.tsx'],
        },
        node: {
          extensions: ['.ts', '.tsx'],
        },
      },
      react: {
        version: 'detect',
      },
    },
  },
  {
    plugins: {
      import: importPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@typescript-eslint': typescript,
    },
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'prefer-const': 'error',
      'array-callback-return': 'warn',
      'constructor-super': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'warn',
      'no-empty-pattern': 'error',
      'no-func-assign': 'error',
      'no-import-assign': 'error',
      'no-irregular-whitespace': 'warn',
      'no-loss-of-precision': 'warn',
      'no-new-native-nonconstructor': 'error',
      'no-promise-executor-return': 'warn',
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'warn',
      'no-this-before-super': 'error',
      'no-unreachable': 'error',
      'no-unsafe-optional-chaining': 'warn',
      'no-unused-private-class-members': 'error',
      'no-use-before-define': 'error',
      'no-useless-assignment': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error',
      'block-scoped-var': 'error',
      camelcase: 'warn',
      'default-param-last': 'error',
      'dot-notation': 'warn',
      eqeqeq: 'warn',
      'max-classes-per-file': ['error', 1],
      'max-depth': 'error',
      'max-lines': 'error',
      'max-params': 'error',
      'no-alert': 'warn',
      'no-console': 'error',
      'no-delete-var': 'error',
      'no-else-return': 'error',
      'no-eval': 'error',
      'no-extra-bind': 'warn',
      'no-extra-boolean-cast': 'error',
      'no-global-assign': 'warn',
      'no-implicit-coercion': 'error',
      'no-invalid-this': 'error',
      'no-labels': 'warn',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'warn',
      'no-magic-numbers': 'warn',
      'no-nested-ternary': 'warn',
      'no-new-wrappers': 'error',
      'no-octal': 'warn',
      'no-redeclare': 'error',
      'no-shadow': 'warn',
      'no-shadow-restricted-names': 'error',
      'no-unused-labels': 'error',
      'no-useless-constructor': 'error',
      'no-var': 'error',
      'object-shorthand': 'warn',
      'prefer-destructuring': ['error', { object: true, array: false }],
      'require-yield': 'error',
      'sort-imports': 'warn',
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: './src/pages',
              from: ['./src/app'],
              message: 'FSD violation',
            },
            {
              target: './src/widgets',
              from: ['./src/app', './src/pages'],
              message: 'FSD violation',
            },
            {
              target: './src/features',
              from: ['./src/app', './src/pages', './src/widgets'],
              message: 'FSD violation',
            },
            {
              target: './src/entities',
              from: [
                './src/app',
                './src/pages',
                './src/widgets',
                './src/features',
              ],
              message: 'FSD violation',
            },
            {
              target: './src/shared',
              from: [
                './src/app',
                './src/pages',
                './src/widgets',
                './src/features',
                './src/entities',
              ],
              message: 'FSD violation',
            },
          ],
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
];
