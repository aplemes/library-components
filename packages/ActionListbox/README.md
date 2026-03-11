# ActionListbox

A dropdown listbox for contextual actions, shown relative to an activator element.

## Installation

```bash
npm install @leroy-merlin-pt/action-listbox
# or
yarn add @leroy-merlin-pt/action-listbox
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `ActionItem[]` | — | **Required.** List of action items. |
| `title` | `string` | — | Optional title displayed above the list. |
| `position` | `"bottom-left"` \| `"bottom-right"` \| `"top-left"` \| `"top-right"` | `"bottom-right"` | Position of the dropdown. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `action` | `string` | Emitted when an item is clicked, with the item id. |
| `close` | — | Emitted when the listbox is closed. |

## Slots

| Name | Description |
| --- | --- |
| `activator` | The element that triggers the dropdown. |

## Basic Usage

```vue
<template>
  <ActionListbox :items="[{ id: 'edit', label: 'Edit' }, { id: 'delete', label: 'Delete' }]" @action="handleAction">
    <template #activator><button>Actions</button></template>
  </ActionListbox>
</template>
```
