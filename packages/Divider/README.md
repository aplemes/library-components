# Divider

A divider is a visual element used to separate content or sections within an interface. It helps improve readability and organization by creating clear distinctions between groups of information.

## Installation

```bash
npm install @leroy-merlin-pt/divider
# or
yarn add @leroy-merlin-pt/divider
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `orientation` | `"horizontal"` \| `"vertical"` | `"horizontal"` | Determines the orientation of the divider. |
| `appearance` | `"primary"` \| `"secondary"` \| `"tertiary"` \| `"inverse"` | `"primary"` | Determines the appearance of the divider. |
| `size` | `"s"` \| `"m"` \| `"l"` | `"s"` | Determines the thickness of the divider. |

## Slots

| Name | Description |
| --- | --- |
| `default` | Use this slot to insert content that needs a divider (e.g. "OR" label). |

## Basic Usage

```vue
<script setup>
import Divider from '@leroy-merlin-pt/divider'
</script>

<template>
  <Divider />
  <Divider appearance="secondary" size="m" />
  <Divider><span>OR</span></Divider>
</template>
```
