module.exports = {
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    // airbnb-typescript
    "airbnb-typescript/base",
    // airbnb-typescript + react
    "airbnb-typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  rules: {
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/naming-convention": [
      "warn",
      // camelCase 변수, PascalCase 변수, UPPER_CASE 변수 허용
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      // camelCase 함수, PascalCase 함수 허용
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      // PascalCase 클래스, interfaces, type aliases, enums 허용
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      // interface 앞에 I 사용 불가
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
      // typeAlias 앞에 T 사용 불가
      {
        selector: "typeAlias",
        format: ["PascalCase"],
        custom: {
          regex: "^T[A-Z]",
          match: false,
        },
      },
      // typeParameter 앞에 T 사용 불가
      {
        selector: "typeParameter",
        format: ["PascalCase"],
        custom: {
          regex: "^T[A-Z]",
          match: false,
        },
      },
    ],
  },
};
