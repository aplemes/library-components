# Radio

A radio button is a selection control that allows users to choose a single option from a list of mutually exclusive choices.

## Installation

```bash
npm install @leroy-merlin-pt/radio
# or
yarn add @leroy-merlin-pt/radio
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | — | **Required.** A unique identifier for the radio. |
| `name` | `string` | — | The name attribute for the radio element. |
| `label` | `string` | — | The text label displayed next to the radio. |
| `modelValue` | `boolean` | — | The radio's checked state, bound via v-model. |
| `isInvalid` | `boolean` | — | If `true`, applies an invalid state. |
| `disabled` | `boolean` | — | If `true`, disables the radio. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `boolean` | Emitted when the radio value changes. |

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import Radio from '@leroy-merlin-pt/radio'

const selected = ref(false)
</script>

<template>
  <Radio id="opt1" name="choice" label="Option 1" v-model="selected" />
</template>
```
