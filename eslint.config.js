import js from '@eslint/js';
import vue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
  js.configs.recommended,
  ...vue.configs['flat/essential'],
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ga: 'readonly',
        process: 'readonly',
        chrome: 'readonly',
      },
    },
    rules: {
      // allow async-await
      'generator-star-spacing': 'off',
      // allow paren-less arrow functions
      'arrow-parens': 'off',
      'one-var': 'off',

      // allow debugger during development only
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

      // custom
      'semi': [2, 'always'],
      'space-before-function-paren': [2, 'always'],
      'keyword-spacing': [2, { before: true, after: true }],
      'space-before-blocks': [2, 'always'],
      'comma-dangle': [2, 'always-multiline'],
      'no-console': 'off',
      'no-multi-str': 'off',
      'curly': 1,
      'no-undef': 'off',
      'no-unused-vars': 'warn',

      // vue rules
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    ignores: [
      'node_modules/',
      '.nuxt/',
      '.output/',
      'dist/',
      '*.min.js',
      'scripts/',
      'pnpm-lock.yaml',
      'package-lock.json',
    ],
  },
];