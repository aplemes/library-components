# Flag

A flag is used to display meta-information about a product or service, acting as a visual indicator of the main category of content. It is typically placed at the top of an element to ensure immediate visibility.

## Installation

```bash
npm install @leroy-merlin-pt/flag
# or
yarn add @leroy-merlin-pt/flag
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — | **Required.** Label text of the Flag. |
| `appearance` | `"standard"` \| `"danger"` \| `"accent"` \| `"inverse"` | — | Allows to define the Flag appearance. |

## Basic Usage

```vue
<script setup>
import Flag from '@leroy-merlin-pt/flag'
</script>

<template>
  <Flag label="New" />
  <Flag label="Sale" appearance="danger" />
  <Flag label="Featured" appearance="accent" />
</template>
```
