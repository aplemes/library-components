# ToggleGroup

A group of toggle switches allowing multiple independent on/off selections, bound via v-model.

## Installation

```bash
npm install @leroy-merlin-pt/togglegroup
# or
yarn add @leroy-merlin-pt/togglegroup
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | — | **Required.** The name attribute for the toggle elements. |
| `modelValue` | `string[]` | — | Array of currently enabled values, bound via v-model. |
| `options` | `ToggleOption[]` | — | **Required.** List of toggle option definitions. |
| `inline` | `boolean` | — | If `true`, renders the toggles inline (horizontal layout). |

### ToggleOption

| Property | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier. |
| `label` | `string` | Display label. |
| `value` | `string` | Value used in the selection array. |
| `disabled` | `boolean` | Disables this option. |
| `size` | `"s"` \| `"m"` | Size of this toggle. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `string[]` | Emitted when the selection changes. |

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import ToggleGroup from '@leroy-merlin-pt/togglegroup'

const enabled = ref([])
const options = [
  { id: 'tog1', label: 'Feature A', value: 'a' },
  { id: 'tog2', label: 'Feature B', value: 'b' },
]
</script>

<template>
  <ToggleGroup name="features" :options="options" v-model="enabled" />
</template>
```
