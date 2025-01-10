const prettierPlugin = require('eslint-plugin-prettier');
const importPlugin = require('eslint-plugin-import');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**', // Ignore node_modules
      '**/src/services/prisma/generated/**', // Ignore Prisma's generated directory
    ],
    files: ['**/*.ts', '**/*.tsx'], // Apply to TypeScript files
    languageOptions: {
      parser: tsParser, // Use the TypeScript parser
      parserOptions: {
        ecmaVersion: 'latest', // Use the latest ECMAScript standards
        sourceType: 'module', // Enable ES modules
        ecmaFeatures: {
          jsx: false, // Disable JSX (not typically used in Express APIs)
        },
        project: './tsconfig.json', // Ensure ESLint uses your TypeScript config
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      // TypeScript-specific rules
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-inferrable-types': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',

      // Import rules
      'import/order': [
        'warn',
        {
          groups: [
            ['builtin', 'external'],
            ['internal'],
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/newline-after-import': 'warn',

      // Prettier
      'prettier/prettier': 'warn',

      // General best practices
      'no-console': 'warn',
      'no-unused-vars': 'off', // Handled by @typescript-eslint
      'no-shadow': 'off', // Handled by TypeScript
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'no-implicit-coercion': 'error',
      'no-magic-numbers': ['warn', { ignore: [0, 1] }],
    },
    settings: {
      'import/resolver': {
        typescript: {}, // Enables TypeScript path aliases
      },
    },
  },
];
