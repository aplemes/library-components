# LinearProgressBarBuffer

A linear progress bar (Buffer) visually represents the progress of a task along a horizontal track, often indicating both current progress and a secondary buffered state.

## Installation

```bash
npm install @leroy-merlin-pt/linearprogressbarbuffer
# or
yarn add @leroy-merlin-pt/linearprogressbarbuffer
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number` | `0` | The current value of the progress bar (0–100). |
| `size` | `"s"` \| `"m"` \| `"l"` | — | Allows to define the progress bar size. |

## Basic Usage

```vue
<script setup>
import LinearProgressBarBuffer from '@leroy-merlin-pt/linearprogressbarbuffer'
</script>

<template>
  <LinearProgressBarBuffer :value="60" />
</template>
```
