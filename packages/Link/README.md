# Link

A link is an interactive text element used to navigate between pages, sections, or external resources. It is typically underlined and styled to indicate its clickable nature.

## Installation

```bash
npm install @leroy-merlin-pt/link
# or
yarn add @leroy-merlin-pt/link
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `href` | `string` | — | URL for the link. |
| `iconPosition` | `"left"` \| `"right"` | `"left"` | Position of the icon relative to the text. |
| `appearance` | `"standard"` \| `"secondary"` \| `"accent"` \| `"inverse"` | `"standard"` | Allows to define the link appearance. |
| `size` | `"s"` \| `"m"` | `"s"` | Allows to define the link size. |
| `target` | `"_self"` \| `"_blank"` \| `"_parent"` \| `"_top"` | — | Where to open the link. |
| `inline` | `boolean` | — | Specify whether the link is inline. |
| `router` | `boolean` | — | If `true`, renders as a `router-link` for Vue Router. |

## Slots

| Name | Description |
| --- | --- |
| `default` | Use this slot to insert the textual content of the Link. |
| `icon` | Use this slot to insert an icon for the Link. |

## Basic Usage

```vue
<script setup>
import Link from '@leroy-merlin-pt/link'
</script>

<template>
  <Link href="https://example.com" target="_blank">Visit site</Link>
  <Link href="/about" appearance="accent" inline>Learn more</Link>
</template>
```
