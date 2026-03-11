# AccordionListItem

An individual item within an AccordionList, with a toggleable content section.

## Installation

```bash
npm install @leroy-merlin-pt/accordion-list-item
# or
yarn add @leroy-merlin-pt/accordion-list-item
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | — | **Required.** Unique identifier for this item. |
| `title` | `string` | — | **Required.** Title displayed in the header. |
| `subtitle` | `string` | — | Optional subtitle displayed below the title. |
| `icon` | `string` | — | Optional icon character or text. |
| `content` | `string` | — | Content text (alternative to default slot). |

## Slots

| Name | Description |
| --- | --- |
| `default` | Content to display when the item is open. |

## Basic Usage

```vue
<template>
  <AccordionListItem id="item1" title="FAQ Question">
    The answer goes here.
  </AccordionListItem>
</template>
```
