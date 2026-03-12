# Modal

A modal is a dialog window that appears on top of the main content, requiring user interaction before returning to the main interface. It is used to focus attention on a specific task, provide important information, or request confirmation for an action.

## Installation

```bash
npm install @azulejo-kit/modal
# or
yarn add @azulejo-kit/modal
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` | — | If `true`, display the modal. |
| `title` | `string` | — | **Required.** Title of the modal. |
| `description` | `string` | — | Description of the modal. |
| `closable` | `boolean` | `true` | If `true`, display the close button. |
| `size` | `"s"` \| `"m"` \| `"l"` | `"m"` | Size of the modal dialog. |
| `scroll` | `boolean` | `false` | If `true`, the modal body becomes scrollable. |
| `closeOnOverlay` | `boolean` | `false` | If `true`, close the modal when clicking the overlay. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `update:open` | `boolean` | Emitted when the modal display changes. |
| `close` | — | Emitted when the modal closes. |

## Slots

| Name | Description |
| --- | --- |
| `icon` | Use this slot to insert an icon next to the title. |
| `default` | Use this slot to insert the content of the modal. |
| `link` | Use this slot to insert a link in the footer. |
| `footer` | Use this slot to insert buttons in the footer. |

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import Modal from '@azulejo-kit/modal'

const isOpen = ref(false)
</script>

<template>
  <button @click="isOpen = true">Open Modal</button>
  <Modal v-model:open="isOpen" title="Confirm action" description="Are you sure?">
    <template #footer>
      <button @click="isOpen = false">Cancel</button>
      <button @click="isOpen = false">Confirm</button>
    </template>
  </Modal>
</template>
```
