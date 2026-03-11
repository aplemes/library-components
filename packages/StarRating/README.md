# StarRating

A Star Rating visually represents a score or evaluation and can be used to display a rating or allow users to rate an item, such as a product or service.

## Installation

```bash
npm install @leroy-merlin-pt/starrating
# or
yarn add @leroy-merlin-pt/starrating
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `modelValue` | `number` | — | **Required.** The current rating value (0–5). |
| `readonly` | `boolean` | `true` | Determines whether the rating is interactive or read-only. |
| `size` | `"s"` \| `"m"` \| `"l"` | `"s"` | Defines the visual size of the star icons. |
| `compact` | `boolean` | `false` | Enables a compact display mode showing only one star. |
| `appearance` | `"standard"` \| `"accent"` | `"accent"` | Specifies the color scheme of the stars. |
| `text` | `string` | — | Optional text displayed next to the star rating. |
| `href` | `string` | — | URL for the link (renders as anchor when provided). |
| `target` | `string` | `"_self"` | Where to open the link. |
| `router` | `boolean` | — | If `true`, renders as a `router-link` for Vue Router. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `update:modelValue` | `number` | Emitted when the rating changes (interactive mode only). |

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import StarRating from '@leroy-merlin-pt/starrating'

const rating = ref(3)
</script>

<template>
  <!-- Read-only display -->
  <StarRating :model-value="4.5" />

  <!-- Interactive -->
  <StarRating v-model="rating" :readonly="false" />
</template>
```
