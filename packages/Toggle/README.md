# Toggle

A toggle is a switch component that allows users to enable or disable a setting, representing a binary state such as on/off or active/inactive.

## Installation

```bash
npm install @leroy-merlin-pt/toggle
# or
yarn add @leroy-merlin-pt/toggle
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | — | **Required.** A unique identifier for the toggle. |
| `name` | `string` | — | The name attribute for the toggle element. |
| `label` | `string` | — | The text label displayed next to the toggle. |
| `modelValue` | `boolean` | — | The toggle's checked state, bound via v-model. |
| `size` | `"s"` \| `"m"` | `"s"` | Determines the size of the toggle. |
| `disabled` | `boolean` | — | If `true`, disables the toggle. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `boolean` | Emitted when the toggle value changes. |

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import Toggle from '@leroy-merlin-pt/toggle'

const enabled = ref(false)
</script>

<template>
  <Toggle id="notifications" label="Enable notifications" v-model="enabled" />
</template>
```
