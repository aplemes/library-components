# Overlay

An overlay is a semi-transparent layer that appears on top of the main content, typically used to dim the background and focus user attention on a specific element.

## Installation

```bash
npm install @leroy-merlin-pt/overlay
# or
yarn add @leroy-merlin-pt/overlay
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `isVisible` | `boolean` | — | Controls the visibility of the overlay. |
| `dialogLabel` | `string` | — | Accessible label for the overlay dialog. |

## Slots

| Name | Description |
| --- | --- |
| `default` | Use this slot to insert centered content inside the overlay. |

## Basic Usage

```vue
<script setup>
import Overlay from '@leroy-merlin-pt/overlay'
</script>

<template>
  <Overlay :is-visible="true" dialog-label="myDialog">
    <div>Overlay content</div>
  </Overlay>
</template>
```
