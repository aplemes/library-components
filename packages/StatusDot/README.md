# StatusDot

A Status Dot is a small visual indicator used to represent the state or condition of an element. It is often color-coded to convey different statuses at a glance.

## Installation

```bash
npm install @leroy-merlin-pt/statusdot
# or
yarn add @leroy-merlin-pt/statusdot
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `status` | `"info"` \| `"success"` \| `"warning"` \| `"error"` \| `"neutral"` | `"info"` | Allows to define the status dot type. |
| `size` | `"s"` \| `"m"` \| `"l"` | — | Determines the size of the status dot. |

## Basic Usage

```vue
<script setup>
import StatusDot from '@leroy-merlin-pt/statusdot'
</script>

<template>
  <StatusDot status="success" />
  <StatusDot status="error" size="l" />
</template>
```
