# Tag

A Tag is a UI element used to filter data, categorize, select or deselect an option. It can appear standalone, in a group, or embedded within other components.

## Installation

```bash
npm install @azulejo-kit/tag
# or
yarn add @azulejo-kit/tag
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — | **Required.** The text label displayed in the tag. |
| `type` | `"informative"` \| `"interactive"` \| `"contextualised"` \| `"removable"` \| `"selectable"` | `"informative"` | Defines the behavior and layout of the tag. |
| `size` | `"s"` \| `"m"` \| `"l"` | — | Determines the size of the tag. |
| `id` | `string` | — | A unique identifier. Required when type is 'selectable' or 'removable'. |
| `name` | `string` | — | The name attribute (relevant for type: 'selectable'). |
| `modelValue` | `boolean` | — | The tag's checked state (used for type: 'selectable'). |
| `disabled` | `boolean` | — | If `true`, disables the tag. |
| `contextualisedNumber` | `number` | `99` | A number displayed in the badge when the tag is contextualised. |
| `removableLabel` | `string` | `"Remove"` | Accessible label text for the remove button. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `boolean` | Emitted when the tag value changes (selectable). |
| `remove-tag` | `string` | Emitted when the remove button is clicked (removable). |

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import { AzTag } from '@azulejo-kit/tag'

const selected = ref(false)
</script>

<template>
  <AzTag label="Category" />
  <AzTag id="tag-1" label="Selectable" type="selectable" v-model="selected" />
  <AzTag id="tag-2" label="Removable" type="removable" @remove-tag="(id) => console.log(id)" />
</template>
```
