# CheckListMenu

A list menu with checkboxes for multi-selection of items.

## Installation

```bash
npm install @leroy-merlin-pt/check-list-menu
# or
yarn add @leroy-merlin-pt/check-list-menu
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `CheckListMenuItem[]` | — | **Required.** List of menu item definitions. |
| `modelValue` | `string[]` | `[]` | Array of selected item ids, bound via v-model. |
| `outlined` | `boolean` | `false` | If `true`, applies outlined style. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `string[]` | Emitted when the selection changes. |

## Basic Usage

```vue
<template>
  <CheckListMenu :items="[{ id: 'a', label: 'Item A' }]" v-model="selected" />
</template>
```
