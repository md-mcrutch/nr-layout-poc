module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // eslint-plugin-react
    'plugin:react-hooks/recommended', // eslint-plugin-react-hooks
    'plugin:jest/recommended', // eslint-plugin-jest
    'plugin:prettier/recommended', // eslint-plugin-prettier
    'prettier/react', // support eslint-plugin-react
  ],
  plugins: ['prettier', 'jest', 'react'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows modern ECMAScript features
    sourceType: 'module', // Allows use of imports
    ecmaFeatures: {
      jsx: true, // Allows parsing of JSX
    },
  },
  rules: {
    // Place to specify ESLint rules.
    // Can be used to overwrite rules specified from the extended configs
    'react/boolean-prop-naming': ['warn'],
    'react/no-access-state-in-setstate': 'error',
    'react/no-deprecated': 'warn',
    'react/no-array-index-key': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/no-unused-state': 'warn',
    'react/sort-comp': 'warn',
    'react/sort-prop-types': 'warn',
    'prettier/prettier': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.jsx', '**/*.spec.js', '**/*.spec.jsx'],
      env: {
        jest: true,
      },
    },
  ],
  settings: {
    react: {
      // Automatically detect React version in eslint-plugin-react
      version: 'detect',
    },
  },
};
