# LinearProgressBarPercentage

A linear progress bar (Percentage) visually represents the completion of a task along a horizontal track, displaying the exact progress in percentage within the bar.

## Installation

```bash
npm install @leroy-merlin-pt/linearprogressbarpercentage
# or
yarn add @leroy-merlin-pt/linearprogressbarpercentage
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number` | `0` | The current value of the progress bar (0–100). |

## Basic Usage

```vue
<script setup>
import LinearProgressBarPercentage from '@leroy-merlin-pt/linearprogressbarpercentage'
</script>

<template>
  <LinearProgressBarPercentage :value="75" />
</template>
```
