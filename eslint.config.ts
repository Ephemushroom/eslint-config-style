import stylistic from '@stylistic/eslint-plugin'
import type { Linter } from 'eslint'

export default {
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    '@stylistic/semi': ['error',
      'never',
      { beforeStatementContinuationChars: 'always' }
    ],
    '@stylistic/comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      functions: 'never'
    }],
    '@stylistic/comma-spacing': ['error', { before: false, after: true }],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
    '@stylistic/block-spacing': ['error', 'always'],
    '@stylistic/no-trailing-spaces': ['error', { 'ignoreComments': true }],
    '@stylistic/no-multi-spaces': ['error'],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/array-element-newline': ['error', { multiline: true, minItems: 3 }],
    '@stylistic/object-curly-newline': ['error', { multiline: true, minProperties: 4 }],
    '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
  },
} satisfies Linter.Config