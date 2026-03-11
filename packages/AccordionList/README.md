# AccordionList

An accordion list component that allows toggling sections of content open and closed.

## Installation

```bash
npm install @leroy-merlin-pt/accordion-list
# or
yarn add @leroy-merlin-pt/accordion-list
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `appearance` | `"primary"` \| `"bordered"` | — | Visual style of the accordion. |
| `behavior` | `"single"` \| `"multiple"` | `"single"` | Whether one or multiple items can be open at once. |
| `modelValue` | `string` \| `string[]` | — | Currently open item id(s), bound via v-model. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `string \| string[]` | Emitted when the open state changes. |

## Slots

| Name | Description |
| --- | --- |
| `default` | AccordionListItem components. |

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import AccordionList from '@leroy-merlin-pt/accordion-list'
import AccordionListItem from '@leroy-merlin-pt/accordion-list-item'

const open = ref('')
</script>

<template>
  <AccordionList v-model="open">
    <AccordionListItem id="item1" title="Section 1">Content here.</AccordionListItem>
  </AccordionList>
</template>
```
