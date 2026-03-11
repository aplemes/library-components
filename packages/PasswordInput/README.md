# PasswordInput

A password input is a specialized input field used to securely enter and manage passwords. It includes a toggle button to show or hide the password, improving usability while maintaining security.

## Installation

```bash
npm install @leroy-merlin-pt/passwordinput
# or
yarn add @leroy-merlin-pt/passwordinput
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | — | **Required.** A unique identifier for the password input element. |
| `name` | `string` | — | The name attribute for the password input element. |
| `modelValue` | `string` \| `number` | — | The current value of the password input field. |
| `placeholder` | `string` | — | A placeholder text to show when the input is empty. |
| `isInvalid` | `boolean` | — | If `true`, applies an invalid state to the password input. |
| `disabled` | `boolean` | — | If `true`, disables the password input. |
| `readonly` | `boolean` | — | If `true`, the password input is read-only. |
| `isClearable` | `boolean` | — | If `true`, a clear button will appear when the input has a value. |
| `clearLabel` | `string` | `"Clear content"` | The label text for the clear button. |
| `buttonLabel` | `{ show: string; hide: string }` | `{ show: 'Show', hide: 'Hide' }` | Labels of the button for showing/hiding the password. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `string \| number` | Emitted when the input value changes. |

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import PasswordInput from '@leroy-merlin-pt/passwordinput'

const password = ref('')
</script>

<template>
  <PasswordInput id="pwd" v-model="password" placeholder="Enter password" />
</template>
```
