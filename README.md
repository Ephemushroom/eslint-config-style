# @ephemushroom/eslint-config-style

Modern ESLint style configuration with TypeScript support, designed for ESLint 9+ flat config system.

## Features

- **No semicolons** - Uses `never` style
- **Single quotes** for strings
- **Trailing commas** for multiline arrays/objects (but not functions)
- **Proper spacing** around commas, arrows, and blocks
- **No trailing spaces** (except in comments)
- **Object/array formatting** with proper newlines for multiline structures
- **Chained call formatting** with newlines when appropriate
- **ASI hazard protection** for statement continuation characters

## Installation

```bash
bun add -D @ephemushroom/eslint-config-style @stylistic/eslint-plugin eslint
```

## Usage

### For ESLint Flat Configuration (ESLint 9+)

#### Option 1: Using the default export (Recommended)
```js
import config from '@ephemushroom/eslint-config-style';

export default [
  config,
];
```

#### Option 2: Using the flat export
```js
import config from '@ephemushroom/eslint-config-style/flat';

export default [
  config,
];
```

#### Option 3: Using the TypeScript config directly
```ts
import config from '@ephemushroom/eslint-config-style/eslint.config.ts';

export default [
  config,
];
```

## Modern Features

- **ESLint 9+ Ready**: Pure flat config system for modern ESLint
- **TypeScript Support**: Full TypeScript configuration with proper typing
- **Multiple Exports**: Choose the format that best fits your project

## Requirements

- ESLint v8.0.0 or higher
- @stylistic/eslint-plugin

## Auto Publish

This package uses GitHub Actions to automatically publish to npm when a new release is created.

## License

MIT