module.exports = {
  // react - https://github.com/jsx-eslint/eslint-plugin-react
  // react-hooks - https://www.npmjs.com/package/eslint-plugin-react-hooks
  // react-refresh - 
  // airbnb - https://www.npmjs.com/package/eslint-config-airbnb
  plugins: ['react', 'react-hooks', 'react-refresh'],
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/no-unused-prop-types': 'warn',
    'react/no-unused-state': 'warn',
    'react/jsx-key': 'error', // Prevents missing key on items in list rendering.
    'react/no-array-index-key': 'warn', // Warns when using an item's index in the array as its key.
    'react/react-in-jsx-scope': 'off', //import React from 'react' 없이 사용을 허용 React17부턴 불필요
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }], // JSX를 사용할 수있는 확장자를 jsx, tsx 제한
    'react/function-component-definition': [
      'error',
      { namedComponents: ['arrow-function', 'function-declaration'] }, // arrow-fucnion 검토 필요
    ],
    'react-hooks/rules-of-hooks': 'error', // React Hooks 사용에 관련된 규칙 적용
    'react-hooks/exhaustive-deps': 'error', // React Hooks의 useEffect 함수에서 의존성 배열을 검사
    'react-refresh/only-export-components': 'off', // React Fast Refresh 규칙 플러그인
  },
};
