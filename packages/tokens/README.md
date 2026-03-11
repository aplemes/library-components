# tokens

Design tokens package providing CSS custom properties for colors, typography, spacing, and more.

## Installation

```bash
npm install @leroy-merlin-pt/tokens
# or
yarn add @leroy-merlin-pt/tokens
```

## Usage

Import the tokens stylesheet in your application entry point:

```js
import '@leroy-merlin-pt/tokens/dist/index.css'
```

The tokens are exposed as CSS custom properties:

- `--color-primary` — Primary brand color
- `--color-primary-dark` — Darker shade of primary
- `--color-primary-light` — Lighter shade of primary
- `--color-grey-*` — Neutral grey scale (100–900)
- `--color-danger-*` — Danger/error color scale
- `--color-success-*` — Success color scale
- `--color-warning-*` — Warning color scale
- `--color-info-*` — Info color scale
