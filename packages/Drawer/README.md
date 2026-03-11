# Drawer

A drawer is a sliding panel that appears from the side of the screen, providing additional content, settings, or actions without disrupting the main view.

## Installation

```bash
npm install @leroy-merlin-pt/drawer
# or
yarn add @leroy-merlin-pt/drawer
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` | — | If `true`, display the drawer. |
| `title` | `string` | — | **Required.** Title of the drawer. |
| `position` | `"left"` \| `"right"` | `"right"` | Position of the drawer. |
| `closable` | `boolean` | `true` | When true, shows a close button and allows closing via Escape. |
| `extended` | `boolean` | — | If `true`, the drawer has a bigger width. |
| `back` | `boolean` | — | If `true`, displays a back button in the header. |
| `contentTitle` | `string` | — | Optional title displayed inside the drawer content area. |
| `scroll` | `boolean` | `true` | If `false`, locks scroll on the body when the drawer is open. |
| `closeOnOverlay` | `boolean` | — | If `true`, closes the drawer when clicking the overlay. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `update:open` | `boolean` | Emitted when the drawer open state changes. |
| `close` | — | Emitted when the drawer closes. |
| `back` | — | Emitted when the back button is clicked. |

## Slots

| Name | Description |
| --- | --- |
| `default` | Main content of the drawer body. |
| `footer` | Optional footer slot for action buttons. |

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import Drawer from '@leroy-merlin-pt/drawer'

const isOpen = ref(false)
</script>

<template>
  <button @click="isOpen = true">Open Drawer</button>
  <Drawer v-model:open="isOpen" title="Settings">
    <p>Drawer content here.</p>
    <template #footer>
      <button @click="isOpen = false">Close</button>
    </template>
  </Drawer>
</template>
```
