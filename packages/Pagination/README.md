# Pagination

A pagination component for navigating through multiple pages of content.

## Installation

```bash
npm install @leroy-merlin-pt/pagination
# or
yarn add @leroy-merlin-pt/pagination
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `modelValue` | `number` | — | The current page number, bound via v-model. |
| `total` | `number` | — | **Required.** Total number of pages. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `number` | Emitted when the page changes. |

## Basic Usage

```vue
<template>
  <Pagination v-model="currentPage" :total="10" />
</template>
```
