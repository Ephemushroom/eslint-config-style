// ESLint style configuration for Ephemushroom organization
// Supports both traditional and flat config formats

// Traditional config format
const traditionalConfig = {
  // Define the parser options
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },

  // Define the plugin for stylistic rules
  plugins: ['@stylistic'],

  // Define the stylistic rules
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
};

// Export for traditional configs
module.exports = traditionalConfig;