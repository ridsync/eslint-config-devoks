module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  plugins: ['import', 'prettier', 'no-relative-import-paths'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'prettier',
  ],
  // TODO
  // settings: {
  //   react: {
  //     version: 'detect',
  //   },
  //   'import/resolver': {
  //     typescript: {
  //       alwaysTryTypes: true,
  //       project: './tsconfig.json',
  //     },
  //     node: {
  //       paths: ['.'],
  //       extensions: ['.js', '.jsx', '.ts', '.tsx'],
  //       alias: {
  //         '@src': './src',
  //         '@compontnts': './src/components',
  //       },
  //     },
  //   },
  // },
  // ignorePatterns: [
  //   'node_modules/*',
  //   'dist/*',
  //   'public/*',
  //   'vite.config.ts',
  //   'tailwind.config.ts',
  //   'postcss.config.js',
  // ],
  rules: {
    /** base **/
    'no-console': 'warn',
    // import에 확장자 사용여부 설정
    'import/extensions': 'error',
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     js: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never',
    //   },
    // ],
    // 같은 폴더인 경우를 제외하고 import 경로는 항상 절대 경로를 사용 <- 'autofix 문제 해결필요'
    'no-relative-import-paths/no-relative-import-paths': [
      'warn',
      { allowSameFolder: true, rootDir: 'src', prefix: '@' },
    ],
    // import 구문 순서를 조정
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
      },
    ],
  },
};
