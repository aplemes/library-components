# ActionBottomBar

A bottom bar component that provides a fixed action area at the bottom of the screen with configurable left and right slots.

## Installation

```bash
npm install @leroy-merlin-pt/action-bottom-bar
# or
yarn add @leroy-merlin-pt/action-bottom-bar
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `shadow` | `boolean` | `false` | If `true`, applies a shadow above the bar. |

## Slots

| Name | Description |
| --- | --- |
| `left` | Content for the left side of the bar. |
| `right` | Content for the right side of the bar. |

## Basic Usage

```vue
<template>
  <ActionBottomBar>
    <template #left><span>Total: €99.00</span></template>
    <template #right><button>Checkout</button></template>
  </ActionBottomBar>
</template>
```
