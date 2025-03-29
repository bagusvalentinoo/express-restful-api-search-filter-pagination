import pluginJs from '@eslint/js'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginJsdoc from 'eslint-plugin-jsdoc'
import eslintPluginPreferArrowFunctions from 'eslint-plugin-prefer-arrow-functions'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      import: eslintPluginImport, // Enforce import plugin
      'prefer-arrow-functions': eslintPluginPreferArrowFunctions, // Enforce prefer-arrow-functions plugin
      jsdoc: eslintPluginJsdoc // Enforce jsdoc plugin
    },
    rules: {
      indent: [
        // Enforce consistent indentation
        'error',
        2,
        {
          SwitchCase: 1, // Enforce consistent indentation for switch cases
          FunctionExpression: { parameters: 'first' }, // Enforce consistent indentation for function expressions
          CallExpression: { arguments: 'first' }, // Enforce consistent indentation for call expressions
          ArrayExpression: 'first', // Enforce consistent indentation for array expressions
          ObjectExpression: 'first' // Enforce consistent indentation for object expressions
        }
      ],
      quotes: ['error', 'single'], // Enforce single quotes
      semi: ['error', 'never'], // Enforce no semicolons
      'comma-dangle': ['error', 'never'], // Enforce no trailing commas
      'max-len': [
        // Enforce a maximum line length
        'error',
        {
          code: 80, // Enforce a maximum line length of 80 characters
          tabWidth: 2, // Enforce a tab width of 2 spaces
          ignoreUrls: true, // Ignore URLs
          ignoreComments: true, // Ignore comments
          ignoreTrailingComments: true, // Ignore trailing comments
          ignoreStrings: true, // Ignore strings
          ignoreTemplateLiterals: true, // Ignore template literals
          ignoreRegExpLiterals: true // Ignore regular expression literals
        }
      ],
      'prefer-const': 'warn', // Enforce consistent use of const
      'no-console': 'warn', // Disallow console
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Disallow unused variables
      'no-var': 'error', // Disallow var
      'no-empty-function': 'warn', // Disallow empty functions
      'no-unreachable': 'error', // Disallow unreachable code
      'no-else-return': 'error', // Disallow else return
      'no-dupe-else-if': 'error', // Disallow duplicate else if
      'no-duplicate-case': 'error', // Disallow duplicate case
      'no-duplicate-imports': 'warn', // Disallow duplicate imports
      eqeqeq: ['error', 'always'], // Enforce consistent use of === and !==
      'max-params': ['error', 4], // Enforce a maximum number of parameters
      'arrow-parens': ['error', 'as-needed'], // Enforce consistent use of parentheses
      'arrow-spacing': 'error', // Enforce consistent spacing after the arrow in arrow functions
      'array-bracket-spacing': ['error', 'never'], // Enforce consistent spacing inside array brackets
      'prefer-destructuring': [
        // Enforce consistent use of destructuring
        'error',
        {
          array: false, // Disallow destructuring arrays
          object: true // Enforce destructuring objects
        }
      ],
      'object-curly-spacing': ['error', 'always'], // Enforce consistent spacing inside curly braces
      'template-curly-spacing': ['error', 'never'], // Enforce consistent spacing inside template literals

      // eslint-plugin-import
      'import/order': [
        // Enforce consistent import order
        'error',
        {
          groups: [
            'builtin', // Builtin imports
            'external', // External imports
            'internal', // Internal imports
            ['parent', 'sibling'], // Parent and sibling imports
            'index' // Index imports
          ],
          pathGroups: [
            {
              pattern: '@/**', // Pattern for internal imports
              group: 'internal' // Group for internal imports
            }
          ],
          pathGroupsExcludedImportTypes: ['builtin'], // Excluded import types
          alphabetize: {
            order: 'asc', // Alphabetical order
            caseInsensitive: true // Case insensitive
          },
          'newlines-between': 'always' // Newlines between
        }
      ]
    },
    ignores: [
      'node_modules',
      'dist',
      'build',
      'public',
      'coverage',
      'reports',
      'logs',
      'tmp'
    ]
  },
  pluginJs.configs.recommended
]
