# Textarea

A text area is an input designed for multi-line text entry, allowing users to input longer content compared to a standard text input.

## Installation

```bash
npm install @leroy-merlin-pt/textarea
# or
yarn add @leroy-merlin-pt/textarea
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | — | **Required.** A unique identifier for the textarea. |
| `name` | `string` | — | The name attribute for the textarea element. |
| `modelValue` | `string` \| `number` | — | The current value of the textarea field. |
| `placeholder` | `string` | — | Text displayed when the textarea is empty. |
| `isInvalid` | `boolean` | — | If `true`, the textarea is marked as invalid. |
| `disabled` | `boolean` | — | If `true`, the textarea is disabled and non-interactive. |
| `rows` | `number` | `2` | The number of visible text lines in the textarea. |
| `minLength` | `number` | — | Minimum number of characters required. |
| `maxLength` | `number` | — | Maximum number of characters allowed. |
| `readonly` | `boolean` | — | If `true`, the textarea is read-only. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `string \| number` | Emitted when the textarea value changes. |

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import Textarea from '@leroy-merlin-pt/textarea'

const text = ref('')
</script>

<template>
  <Textarea id="comment" :rows="4" placeholder="Enter your comment..." v-model="text" />
</template>
```
