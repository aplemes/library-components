# Select

A select component allows users to choose a single option from a predefined list within a native dropdown menu.

## Installation

```bash
npm install @leroy-merlin-pt/select
# or
yarn add @leroy-merlin-pt/select
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | — | **Required.** A unique identifier for the select. |
| `name` | `string` | — | The name attribute for the select element. |
| `options` | `SelectOption[]` | — | **Required.** Define the available choices for the select element. |
| `modelValue` | `string` \| `number` | — | The current value of the select. |
| `placeholder` | `string` | — | Text displayed when the select has no selected value. |
| `isInvalid` | `boolean` | — | If `true`, the select is marked as invalid. |
| `disabled` | `boolean` | — | If `true`, the select is disabled and non-interactive. |
| `size` | `"s"` \| `"m"` | `"m"` | Determines the size of the select. |
| `readonly` | `boolean` | — | If `true`, the select is read-only. |

### SelectOption

| Property | Type | Description |
| --- | --- | --- |
| `id` | `string` | Optional identifier. |
| `text` | `string` | Display text. |
| `value` | `string \| number` | Option value. |
| `disabled` | `boolean` | Disables this option. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `string \| number` | Emitted when the select value changes. |

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import Select from '@leroy-merlin-pt/select'

const value = ref('')
const options = [
  { text: 'Option 1', value: 'opt1' },
  { text: 'Option 2', value: 'opt2' },
]
</script>

<template>
  <Select id="sel" :options="options" placeholder="Select an option" v-model="value" />
</template>
```
