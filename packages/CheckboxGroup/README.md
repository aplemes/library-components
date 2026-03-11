# CheckboxGroup

A group of checkboxes allowing multiple selections, bound via v-model.

## Installation

```bash
npm install @leroy-merlin-pt/checkboxgroup
# or
yarn add @leroy-merlin-pt/checkboxgroup
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | — | **Required.** The name attribute for all checkbox inputs in the group. |
| `modelValue` | `string[]` | — | Array of currently selected values, bound via v-model. |
| `options` | `CheckboxOption[]` | — | **Required.** List of checkbox option definitions. |
| `inline` | `boolean` | — | If `true`, renders the checkboxes inline (horizontal layout). |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `string[]` | Emitted when the selection changes. |

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import CheckboxGroup from '@leroy-merlin-pt/checkboxgroup'

const selected = ref([])
const options = [
  { id: 'opt1', label: 'Option 1', value: 'opt1' },
  { id: 'opt2', label: 'Option 2', value: 'opt2' },
]
</script>

<template>
  <CheckboxGroup name="choices" :options="options" v-model="selected" />
</template>
```
