# QuantitySelector

A quantity selector is an input component that allows users to increment or decrement a numeric value, typically using plus (+) and minus (−) buttons.

## Installation

```bash
npm install @leroy-merlin-pt/quantityselector
# or
yarn add @leroy-merlin-pt/quantityselector
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | — | **Required.** A unique identifier for the quantity selector. |
| `name` | `string` | `"quantity"` | The name attribute for the input element. |
| `modelValue` | `number` | `1` | The current value of the quantity selector. |
| `isInvalid` | `boolean` | — | If `true`, applies an invalid state. |
| `disabled` | `boolean` | — | If `true`, disables the quantity selector. |
| `size` | `"s"` \| `"m"` | `"m"` | Determines the size of the quantity selector. |
| `min` | `number` | `1` | Minimum acceptable value. |
| `max` | `number` | `100` | Maximum acceptable value. |
| `step` | `number` | `1` | How much the value changes per click. |
| `readonly` | `boolean` | — | If `true`, the quantity selector is read-only. |
| `incrementLabel` | `string` | `"Increment"` | The label text for the increment button. |
| `decrementLabel` | `string` | `"Decrement"` | The label text for the decrement button. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `number` | Emitted when the value changes. |

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import QuantitySelector from '@leroy-merlin-pt/quantityselector'

const qty = ref(1)
</script>

<template>
  <QuantitySelector id="qty" :min="1" :max="10" v-model="qty" />
</template>
```
