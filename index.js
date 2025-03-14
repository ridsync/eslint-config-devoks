module.exports = {
  // TODO
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  plugins: ["import", "prettier", "no-relative-import-paths"],
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:prettier/recommended",
    "airbnb",
  ],
  // TODO
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
      node: {
        paths: ["."],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
          "@src": "./src",
          "@compontnts": "./src/components",
        },
      },
    },
  },
  // TODO
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    /** base **/
    "no-console": "warn",
    // import에 확장자 사용여부 (Drop)
    // 'import/extensions': 'off',
    // 같은 폴더인 경우를 제외하고 import 경로는 항상 절대 경로를 사용 <- 'autofix 문제 해결필요'
    "no-relative-import-paths/no-relative-import-paths": [
      "warn",
      { allowSameFolder: true, rootDir: "src", prefix: "@" },
    ],
    // import 구문 순서를 조정
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
      },
    ],
  },
};
