#!/usr/bin/env bash
set -euo pipefail

# ---------------------------------------------------------------------------
# create-component.sh — scaffold a new component package in the monorepo
# Usage: ./scripts/create-component.sh MyComponent
# ---------------------------------------------------------------------------

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# ---------------------------------------------------------------------------
# Argument validation
# ---------------------------------------------------------------------------
if [[ $# -lt 1 ]]; then
  echo "Error: component name is required." >&2
  echo "Usage: $0 <ComponentName>  (PascalCase, e.g. MyComponent)" >&2
  exit 1
fi

COMPONENT_NAME="$1"

# Ensure the name starts with an uppercase letter (PascalCase)
if [[ ! "$COMPONENT_NAME" =~ ^[A-Z][A-Za-z0-9]*$ ]]; then
  echo "Error: component name must be PascalCase (e.g. MyComponent). Got: '${COMPONENT_NAME}'" >&2
  exit 1
fi

# ---------------------------------------------------------------------------
# Derive naming variants
# ---------------------------------------------------------------------------
# PascalCase → kebab-case  (e.g. MyComponent → my-component)
KEBAB_NAME="$(echo "$COMPONENT_NAME" | sed 's/\([A-Z]\)/-\1/g' | sed 's/^-//' | tr '[:upper:]' '[:lower:]')"

# kebab-case → lowercase (same as kebab but used as vite lib.name)
LIB_NAME="$KEBAB_NAME"

PACKAGE_DIR="${REPO_ROOT}/packages/${COMPONENT_NAME}"

# ---------------------------------------------------------------------------
# Guard: abort if directory already exists
# ---------------------------------------------------------------------------
if [[ -d "$PACKAGE_DIR" ]]; then
  echo "Error: directory '${PACKAGE_DIR}' already exists. Aborting." >&2
  exit 1
fi

echo "Creating component '${COMPONENT_NAME}' (npm: @leroy-merlin-pt/${KEBAB_NAME}) ..."

# ---------------------------------------------------------------------------
# Create directory structure
# ---------------------------------------------------------------------------
mkdir -p "${PACKAGE_DIR}/src"
mkdir -p "${PACKAGE_DIR}/.storybook"

# ---------------------------------------------------------------------------
# package.json
# ---------------------------------------------------------------------------
cat > "${PACKAGE_DIR}/package.json" << EOF
{
  "name": "@leroy-merlin-pt/${KEBAB_NAME}",
  "version": "1.0.0",
  "type": "module",
  "main": "./dist/index.umd.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.umd.cjs"
    },
    "./style.css": "./dist/style.css"
  },
  "scripts": {
    "build": "vite build",
    "test": "vitest --run --passWithNoTests",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  },
  "publishConfig": {
    "access": "public"
  },
  "files": ["dist/*"],
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "@storybook/addon-essentials": "^7.0.0",
    "@storybook/addon-interactions": "^7.0.0",
    "@storybook/vue3": "^7.0.0",
    "@storybook/vue3-vite": "^7.0.0",
    "storybook": "^7.0.0",
    "tailwindcss": "^4.0.0",
    "vue": "^3.3.4"
  },
  "peerDependencies": {
    "vue": ">=3.0.0"
  }
}
EOF

# ---------------------------------------------------------------------------
# tsconfig.json
# ---------------------------------------------------------------------------
cat > "${PACKAGE_DIR}/tsconfig.json" << 'EOF'
{
  "extends": "../../tsconfig.json",
  "include": ["index.ts", "src/**/*"]
}
EOF

# ---------------------------------------------------------------------------
# vite.config.ts
# ---------------------------------------------------------------------------
cat > "${PACKAGE_DIR}/vite.config.ts" << EOF
import { defineConfig, mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import baseConfig from '../../vite.config'

export default mergeConfig(
  baseConfig,
  defineConfig({
    plugins: [
      vue(),
      dts({
        outDir: 'dist',
        exclude: ['src/*.spec.ts'],
        tsconfigPath: './tsconfig.json'
      })
    ],
    build: {
      outDir: 'dist',
      lib: {
        name: '${LIB_NAME}',
        fileName: 'index',
        entry: 'index.ts'
      }
    }
  })
)
EOF

# ---------------------------------------------------------------------------
# index.ts  (package entry point)
# ---------------------------------------------------------------------------
cat > "${PACKAGE_DIR}/index.ts" << EOF
export { default as ${COMPONENT_NAME} } from './src/index.vue'
EOF

# ---------------------------------------------------------------------------
# .storybook/main.ts
# ---------------------------------------------------------------------------
cat > "${PACKAGE_DIR}/.storybook/main.ts" << 'EOF'
import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)', '../src/**/*.mdx'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: { docs: false },
    },
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
}

export default config
EOF

# ---------------------------------------------------------------------------
# .storybook/preview.ts
# ---------------------------------------------------------------------------
cat > "${PACKAGE_DIR}/.storybook/preview.ts" << 'EOF'
import type { Preview } from '@storybook/vue3'
import '../../../tailwind.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
EOF

# ---------------------------------------------------------------------------
# src/index.vue  (minimal SFC scaffold)
# ---------------------------------------------------------------------------
cat > "${PACKAGE_DIR}/src/index.vue" << EOF
<script setup lang="ts">
withDefaults(
  defineProps<{
    // Add your props here
  }>(),
  {}
)
</script>

<template>
  <div class="${KEBAB_NAME}">
    <slot />
  </div>
</template>

<style scoped>
@reference "@/tailwind.css";
</style>
EOF

# ---------------------------------------------------------------------------
# src/index.spec.ts  (minimal Vitest test)
# ---------------------------------------------------------------------------
cat > "${PACKAGE_DIR}/src/index.spec.ts" << EOF
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ${COMPONENT_NAME} from './index.vue'

describe('${COMPONENT_NAME}', () => {
  it('renders', () => {
    const wrapper = mount(${COMPONENT_NAME})
    expect(wrapper.exists()).toBe(true)
  })
})
EOF

# ---------------------------------------------------------------------------
# src/index.stories.ts  (minimal Storybook story)
# ---------------------------------------------------------------------------
cat > "${PACKAGE_DIR}/src/index.stories.ts" << EOF
import type { Meta, StoryObj } from '@storybook/vue3'
import ${COMPONENT_NAME} from './index.vue'

const meta: Meta<typeof ${COMPONENT_NAME}> = {
  title: 'Components/${COMPONENT_NAME}',
  component: ${COMPONENT_NAME},
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
EOF

# ---------------------------------------------------------------------------
# Done
# ---------------------------------------------------------------------------
echo ""
echo "Component ${COMPONENT_NAME} created!"
echo "Run: cd packages/${COMPONENT_NAME} && yarn install"
