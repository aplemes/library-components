# Loader

A loader is a visual indicator used to inform users that a process is in progress, typically during data fetching, page loading, or background operations.

## Installation

```bash
npm install @leroy-merlin-pt/loader
# or
yarn add @leroy-merlin-pt/loader
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `appearance` | `"standard"` \| `"accent"` \| `"inverse"` | `"standard"` | Specifies the visual appearance of the loader. |
| `size` | `"xs"` \| `"s"` \| `"m"` \| `"l"` | `"m"` | Defines the size of the loader. |
| `text` | `string` | — | Text to display alongside the loader. |

## Basic Usage

```vue
<script setup>
import Loader from '@leroy-merlin-pt/loader'
</script>

<template>
  <Loader />
  <Loader size="l" text="Loading..." />
  <Loader appearance="accent" size="s" />
</template>
```
