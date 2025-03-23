module.exports = {
  // eslint:recommended - https://eslint.org/docs/latest/rules/ 
  // import - https://github.com/import-js/eslint-plugin-import
  // eslint-plugin-prettier - https://github.com/prettier/eslint-plugin-prettier
  // extends: 'prettier' - https://www.npmjs.com/package/eslint-config-prettier
  // no-relative-import-paths - https://github.com/MelvinVermeer/eslint-plugin-no-relative-import-paths
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
  rules: {
    /** base **/
    'no-console': 'warn',
    // import에 확장자 사용여부 설정
    'import/extensions': 'error',
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
