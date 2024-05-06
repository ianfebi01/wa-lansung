module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs','index.html'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "no-mixed-spaces-and-tabs": 0, 
    // "key-spacing": ["error", { "align": "colon" }],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    // "no-tabs": ["error", { "allowIndentationTabs": true, "ignoreComments": true  }],
    'key-spacing': [
      'error',
      { align: 'colon', beforeColon: true, afterColon: true },
    ],
    'brace-style': 'error',
    indent: ['error', 'tab'],
    'comma-spacing': ['error', { before: false, after: true }],
    'space-in-parens': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'var', next: 'return' },
    ],
    'newline-before-return': 'error',
    'object-curly-spacing': ['error', 'always'],
    'no-console': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],

    // typescript-eslint
    '@typescript-eslint/type-annotation-spacing': 'error',

    // React
    'react/react-in-jsx-scope': 'off',
    'react/jsx-max-props-per-line': [1, { maximum: 2 }],
    'react/jsx-closing-bracket-location': 1,
    // "react/jsx-tag-spacing":[{ "closingSlash": "never" }]
  },
}
