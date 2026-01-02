# @ephemushroom/eslint-config-style

Ephemushroom's official ESLint style configuration. This package provides a consistent set of stylistic rules for JavaScript/TypeScript projects across the organization.

## Installation

```bash
npm install --save-dev @ephemushroom/eslint-config-style @stylistic/eslint-plugin eslint
```

## Usage

### For Traditional ESLint Configuration

Create or update your `.eslintrc.js` file:

```js
module.exports = {
  extends: ['@ephemushroom/eslint-config-style']
};
```

Or if you're using a JSON configuration (`.eslintrc.json`):

```json
{
  "extends": ["@ephemushroom/eslint-config-style"]
}
```

### For ESLint Flat Configuration (ESLint 9+)

Create or update your `eslint.config.js` file:

```js
import styleConfig from '@ephemushroom/eslint-config-style/eslint.config.js';

export default [
  ...styleConfig,
  // your other configurations
];
```

Or if you prefer to use it as a plugin:

```js
import styleConfig from '@ephemushroom/eslint-config-style/eslint.config.js';

export default [
  {
    files: ['**/*.js', '**/*.mjs'],
    ...styleConfig[0], // Use the first configuration from the style config
  },
];
```

## Configuration Details

This configuration includes the following stylistic rules:

- **Semi-colons**: Disallowed (using `never`)
- **Comma dangle**: Required for multiline arrays/objects, disallowed for functions
- **Comma spacing**: Enforces space after, no space before
- **Quotes**: Single quotes enforced
- **Arrow spacing**: Enforces space before and after
- **Block spacing**: Enforces space inside blocks
- **Trailing spaces**: Disallowed (ignoring comments)
- **Multi-spaces**: Disallowed
- **Object curly spacing**: Enforces space inside object literals
- **Array element newlines**: Required for multiline arrays with 3+ items
- **Object curly newlines**: Required for multiline objects with 4+ properties
- **Chained call newlines**: Required for chains with depth > 2

## Requirements

- ESLint v8.0.0 or higher
- @stylistic/eslint-plugin

## License

MIT