module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'space-before-function-paren': ['off'],
    'no-underscore-dangle': ['off'],
    semi: ['error', 'never'],
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'comma-dangle': ['error', 'never'],
    'import/prefer-default-export': ['off'],
    'import/named': ['off'],
    'import/no-named-as-default': ['off'],
    'import/no-named-as-default-member': ['off']
  }
}
