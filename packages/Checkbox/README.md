# Checkbox

A checkbox is an interactive component used to select or deselect an option, typically within a list of choices. It allows users to make multiple selections independently.

## Installation

```bash
npm install @leroy-merlin-pt/checkbox
# or
yarn add @leroy-merlin-pt/checkbox
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | — | **Required.** A unique identifier for the checkbox. |
| `name` | `string` | — | The name attribute for the checkbox element. |
| `label` | `string` | — | The text label displayed next to the checkbox. |
| `modelValue` | `boolean` | — | The checkbox's checked state, bound via v-model. |
| `indeterminate` | `boolean` | — | Sets the checkbox to an indeterminate state. |
| `isInvalid` | `boolean` | — | If `true`, applies an invalid state to the checkbox. |
| `disabled` | `boolean` | — | If `true`, disables the checkbox. |
| `indented` | `boolean` | — | If `true`, indent the checkbox. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `boolean` | Emitted when the checkbox value changes. |

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import Checkbox from '@leroy-merlin-pt/checkbox'

const checked = ref(false)
</script>

<template>
  <Checkbox id="accept" label="Accept terms" v-model="checked" />
</template>
```
