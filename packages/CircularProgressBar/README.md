# CircularProgressBar

A circular progress bar visually represents progress toward a goal or completion of a process using a circular shape. It is commonly used to indicate task completion or performance metrics.

## Installation

```bash
npm install @leroy-merlin-pt/circularprogressbar
# or
yarn add @leroy-merlin-pt/circularprogressbar
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number` | `0` | The current value of the progress bar (0–100). |
| `size` | `"s"` \| `"m"` \| `"l"` | — | Sets the size of the progress bar. |
| `type` | `"percentage"` \| `"content"` | `"percentage"` | Shows either a percentage or custom content. |
| `contentValue` | `string` | — | Main content shown when `type` is `'content'`. |
| `additionalInfo` | `string` | — | Additional text shown to define the `contentValue`. |

## Basic Usage

```vue
<script setup>
import CircularProgressBar from '@leroy-merlin-pt/circularprogressbar'
</script>

<template>
  <CircularProgressBar :value="75" type="percentage" />
  <CircularProgressBar :value="42" type="content" content-value="42" additional-info="items" />
</template>
```
