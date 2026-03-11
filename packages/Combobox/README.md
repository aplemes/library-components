# Combobox

A combobox component combining a text input with a dropdown list for searchable selection.

## Installation

```bash
npm install @leroy-merlin-pt/combobox
# or
yarn add @leroy-merlin-pt/combobox
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `ComboboxOption[]` | — | **Required.** List of available options. |
| `modelValue` | `string` \| `string[]` | — | Currently selected value(s), bound via v-model. |
| `multiple` | `boolean` | — | If `true`, allows multiple selections. |
| `size` | `"s"` \| `"m"` | `"m"` | Size of the combobox. |
| `disabled` | `boolean` | — | If `true`, disables the combobox. |
| `readonly` | `boolean` | — | If `true`, the combobox is read-only. |
| `invalid` | `boolean` | — | If `true`, marks the combobox as invalid. |
| `clearable` | `boolean` | — | If `true`, allows clearing the selection. |
| `search` | `boolean` | — | If `true`, enables searching. |
| `placeholder` | `string` | `"Select an option"` | Placeholder text. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `string \| string[]` | Emitted when the selection changes. |

## Basic Usage

```vue
<template>
  <Combobox :options="[{ value: 'a', label: 'Option A' }]" v-model="val" :search="true" />
</template>
```
