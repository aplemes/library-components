# Container

A layout container component that centers and constrains content width.

## Installation

```bash
npm install @leroy-merlin-pt/container
# or
yarn add @leroy-merlin-pt/container
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fluid` | `boolean` | `false` | If `true`, the container spans the full width. |

## Slots

| Name | Description |
| --- | --- |
| `default` | Content to display inside the container. |

## Basic Usage

```vue
<template>
  <Container><p>Centered content</p></Container>
</template>
```
