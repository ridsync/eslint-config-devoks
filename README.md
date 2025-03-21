# eslint-config-devoks [![npm version](https://badge.fury.io/js/eslint-config-devoks.svg)](https://badge.fury.io/js/eslint-config-devoks)

DevOks's Base ESlint Shared Configuration for React & Vite Environment.

## Installation 

use this command:

```sh
yarn add --dev eslint-config-devoks
```

If you need to, you can add eslint and eslint plugins at the same time.

eslint base dependecies:
```sh
yarn add --dev eslint@8.54.0 prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-import eslint-plugin-no-relative-import-paths globals
```

eslint airbnb-base-config dependecies:
```sh
yarn add --dev eslint-config-airbnb
```

eslint typescript plugin dependecies:
```sh
yarn add --dev typescript typescript-eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript
```

eslint react plugin dependecies:
```sh
yarn add --dev eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh eslint-plugin-jsx-a11y
```


## Usage

After installing, update your project's `.eslintrc.cjs` file to extends sets :

```js
  extends: [
+   'eslint-config-devoks',
+   'eslint-config-devoks/react',
+   'eslint-config-devoks/typescript',
  ],
```

update your project's `.eslintrc.cjs` file to parser and parserOptions sets:

```js
+ parser: '@typescript-eslint/parser',
+ parserOptions: {
+   ecmaVersion: 'latest',
+   sourceType: 'module',
+   ecmaFeatures: {
+     jsx: true,
+   },
+   project: './tsconfig.json',
+ },
```

## Example

Refer to the example configuration file ('.eslintrc.cjs'):

```js
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint-config-devoks',
    'eslint-config-devoks/react',
    'eslint-config-devoks/typescript',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
      node: {
        paths: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '@src': './src',
          '@compontnts': './src/components',
        },
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  ignorePatterns: [
    'node_modules/*',
    'dist/*',
    'public/*',
    'vite.config*.ts',
    'tailwind.config.ts',
    'postcss.config.js',
  ],
  rules: {
+    // update your custom rules
  },
};
```

---

Read the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.