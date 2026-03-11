# Tooltip

A tooltip component that displays informational text when hovering over an element.

## Installation

```bash
npm install @leroy-merlin-pt/tooltip
# or
yarn add @leroy-merlin-pt/tooltip
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `content` | `string` | — | **Required.** The tooltip text to display. |
| `position` | `"top"` \| `"bottom"` \| `"left"` \| `"right"` | `"top"` | Position of the tooltip relative to the element. |

## Slots

| Name | Description |
| --- | --- |
| `default` | The element that triggers the tooltip. |

## Basic Usage

```vue
<template>
  <Tooltip content="This is helpful information">
    <button>Hover me</button>
  </Tooltip>
</template>
```
