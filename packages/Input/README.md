# Input

A text input is a single-line input that allows users to enter and edit short text-based content.

## Installation

```bash
npm install @azulejo-kit/input
# or
yarn add @azulejo-kit/input
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | — | **Required.** A unique identifier for the input element. |
| `name` | `string` | — | The name attribute for the input element. |
| `modelValue` | `string` \| `number` | — | The current value of the input field. |
| `placeholder` | `string` | — | A placeholder text to show in the input when it is empty. |
| `inputType` | `"date"` \| `"email"` \| `"number"` \| `"password"` \| `"search"` \| `"tel"` \| `"text"` | `"text"` | Defines the type of input. |
| `isInvalid` | `boolean` | — | If `true`, applies an invalid state to the input. |
| `disabled` | `boolean` | — | If `true`, disables the input. |
| `size` | `"s"` \| `"m"` | `"m"` | Determines the size of the input. |
| `readonly` | `boolean` | — | If `true`, the input is read-only. |
| `isClearable` | `boolean` | — | If `true`, a clear button will appear when the input has a value. |
| `clearLabel` | `string` | `"clear content"` | The label text for the clear button. |
| `prefix` | `string` | — | Displays additional text inside the component, before the input. |
| `suffix` | `string` | — | Displays additional text inside the component, after the input. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `string \| number` | Emitted when the input value changes. |

## Slots

| Name | Description |
| --- | --- |
| `icon` | Use this slot to insert an icon in the input. |

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import Input from '@azulejo-kit/input'

const value = ref('')
</script>

<template>
  <Input id="email" input-type="email" placeholder="Enter email" v-model="value" />
</template>
```
