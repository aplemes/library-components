# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
yarn install

# Build all packages
yarn build

# Run all tests
yarn test

# Run tests for a single package (from root)
cd packages/Button && yarn test

# Run Storybook for a specific package
cd packages/Button && yarn storybook

# Run root-level Storybook (all components)
yarn storybook

# Publish packages to GitHub Packages (requires NODE_AUTH_TOKEN env var)
yarn publish
```

## Architecture

This is a **Lerna monorepo** publishing Vue 3 component packages to GitHub Packages under the `@leroy-merlin-pt` npm scope.

**Build system:**
- Each package has its own `vite.config.ts` that extends the root `vite.config.ts` via `mergeConfig`
- Root config sets up Tailwind CSS v4, test environment (happy-dom), and shared Rollup externals (`vue` and all `@leroy-merlin-pt/*` packages are excluded from bundles)
- Package-level config adds `@vitejs/plugin-vue` and `vite-plugin-dts` for `.d.ts` generation
- Each package builds to `dist/` with ESM (`index.js`) + CJS (`index.umd.cjs`) + types (`index.d.ts`)

**Styling:**
- Tailwind CSS v4 with brand tokens defined in the root `tailwind.css`
- Component styles reference `tailwind.css` via `@reference "@/tailwind.css"` (the `@` alias resolves to the repo root)
- Custom theme variables include brand colors (`--color-primary`, `--color-primary-dark`, `--color-primary-light`), neutral scale, typography, and spacing tokens

**`packages/tokens`:** A special non-component package that exports TypeScript design token constants (colors, typography, spacing, borders, shadows) derived from the Mozaic Design System. It has no `.storybook/` directory and no `.vue` files — just `src/tokens.ts` + `src/index.ts`. Use it as a reference for all token values rather than hardcoding values in components.

**Package anatomy** (use `packages/Button` as the template for new Vue components):
```
packages/ComponentName/
  index.ts              # Re-exports the component (entry point for Vite build)
  vite.config.ts        # Extends root config; sets lib.entry and lib.name
  tsconfig.json         # Extends root tsconfig
  package.json          # name: @leroy-merlin-pt/name, exports ESM/CJS/types/style.css
  src/
    index.vue           # Single File Component (<script setup lang="ts">)
    index.spec.ts       # Vitest tests using @vue/test-utils
    index.stories.ts    # Storybook stories (CSF3 format)
  .storybook/
    main.ts
    preview.ts
```

**Publishing:** Uses `lerna version --independent` (each package versioned separately). The `.npmrc` configures `@leroy-merlin-pt:registry=https://npm.pkg.github.com`. To publish, uncomment the auth token line in `.npmrc` and set `NODE_AUTH_TOKEN`.
