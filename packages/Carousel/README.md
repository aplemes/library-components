# Carousel

A carousel component for displaying a series of slides with navigation controls.

## Installation

```bash
npm install @leroy-merlin-pt/carousel
# or
yarn add @leroy-merlin-pt/carousel
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `previousButtonAriaLabel` | `string` | `"Previous"` | Accessible label for the previous button. |
| `nextButtonAriaLabel` | `string` | `"Next"` | Accessible label for the next button. |

## Slots

| Name | Description |
| --- | --- |
| `header` | Optional header content for the carousel. |
| `default` | Slide content. |

## Basic Usage

```vue
<template>
  <Carousel>
    <div>Slide 1</div>
    <div>Slide 2</div>
    <div>Slide 3</div>
  </Carousel>
</template>
```
