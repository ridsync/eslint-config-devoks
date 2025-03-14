module.exports = {
  plugins: ["react"],
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "react-refresh",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/no-unused-prop-types": "warn",
    "react/no-unused-state": "warn",
    "react/jsx-key": "error", // Prevents missing key on items in list rendering.
    "react/no-array-index-key": "warn", // Warns when using an item's index in the array as its key.
    // 'react/react-in-jsx-scope': 'off', //import React from 'react' 없이 사용 가능한 설정 (Drop)
    // 'react/jsx-filename-extension': ['off', { extensions: ['.ts', '.tsx'] }], // (Drop)
    "react/function-component-definition": [
      "error",
      { namedComponents: ["arrow-function", "function-declaration"] }, // arrow-fucnion 검토 필요
    ],
    // Ref https://ko.legacy.reactjs.org/docs/hooks-rules.html
    "react-hooks/rules-of-hooks": "error", // React Hooks 사용에 관련된 규칙 적용
    "react-hooks/exhaustive-deps": "error", // React Hooks의 useEffect 함수에서 의존성 배열을 검사
    "react-refresh/only-export-components": "off", // React Fast Refresh 규칙 플러그인
  },
};
