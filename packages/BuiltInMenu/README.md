# BuiltInMenu

A horizontal navigation menu component with selectable items.

## Installation

```bash
npm install @leroy-merlin-pt/built-in-menu
# or
yarn add @leroy-merlin-pt/built-in-menu
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `MenuItem[]` | — | **Required.** List of menu item definitions. |
| `modelValue` | `string` | — | Currently active item id, bound via v-model. |
| `outlined` | `boolean` | `false` | If `true`, applies outlined style. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `string` | Emitted when the active item changes. |

## Basic Usage

```vue
<template>
  <BuiltInMenu :items="[{ id: 'home', label: 'Home' }, { id: 'about', label: 'About' }]" v-model="activeItem" />
</template>
```
