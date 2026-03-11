# DatePicker

A date picker input component allowing users to select a date value.

## Installation

```bash
npm install @leroy-merlin-pt/date-picker
# or
yarn add @leroy-merlin-pt/date-picker
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | — | **Required.** A unique identifier for the date picker. |
| `name` | `string` | — | The name attribute for form submission. |
| `modelValue` | `string` | — | The current date value (ISO format), bound via v-model. |
| `isInvalid` | `boolean` | — | If `true`, applies an invalid state. |
| `disabled` | `boolean` | — | If `true`, disables the date picker. |
| `size` | `"s"` \| `"m"` | `"m"` | Determines the size of the date picker. |
| `readonly` | `boolean` | — | If `true`, the date picker is read-only. |
| `isClearable` | `boolean` | — | If `true`, shows a clear button. |
| `clearLabel` | `string` | `"Clear"` | Label for the clear button. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `string` | Emitted when the date value changes. |

## Basic Usage

```vue
<template>
  <DatePicker id="dob" v-model="date" />
</template>
```
