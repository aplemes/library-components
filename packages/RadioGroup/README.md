# RadioGroup

A group of radio buttons allowing single selection, bound via v-model. Only one option can be selected at a time within the same group.

## Installation

```bash
npm install @leroy-merlin-pt/radiogroup
# or
yarn add @leroy-merlin-pt/radiogroup
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | — | **Required.** The name attribute for the radio elements. |
| `modelValue` | `string` | — | The currently selected value, bound via v-model. |
| `options` | `RadioOption[]` | — | **Required.** List of radio option definitions. |
| `isInvalid` | `boolean` | — | If `true`, applies an invalid state to the radio group. |
| `inline` | `boolean` | — | If `true`, renders the radios inline (horizontal layout). |

### RadioOption

| Property | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier. |
| `label` | `string` | Display label. |
| `value` | `string` | The value emitted when selected. |
| `disabled` | `boolean` | Disables this option. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `string` | Emitted when the selection changes. |

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import RadioGroup from '@leroy-merlin-pt/radiogroup'

const selected = ref('')
const options = [
  { id: 'opt1', label: 'Option 1', value: 'opt1' },
  { id: 'opt2', label: 'Option 2', value: 'opt2' },
]
</script>

<template>
  <RadioGroup name="choice" :options="options" v-model="selected" />
</template>
```
