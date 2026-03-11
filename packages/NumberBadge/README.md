# NumberBadge

A Number Badge represents a numeric count, often used to indicate notifications, updates, or items requiring attention.

## Installation

```bash
npm install @leroy-merlin-pt/numberbadge
# or
yarn add @leroy-merlin-pt/numberbadge
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `number` | — | **Required.** Content of the badge. |
| `appearance` | `"standard"` \| `"danger"` \| `"accent"` \| `"inverse"` | `"standard"` | Allows to define the badge appearance. |
| `size` | `"s"` \| `"m"` | `"s"` | Allows to define the badge size. |

## Basic Usage

```vue
<script setup>
import NumberBadge from '@leroy-merlin-pt/numberbadge'
</script>

<template>
  <NumberBadge :label="5" />
  <NumberBadge :label="99" appearance="danger" size="m" />
</template>
```
