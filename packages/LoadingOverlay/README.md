# LoadingOverlay

A loading overlay component that displays a loader on top of content while data is being fetched.

## Installation

```bash
npm install @leroy-merlin-pt/loading-overlay
# or
yarn add @leroy-merlin-pt/loading-overlay
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `isVisible` | `boolean` | — | If `true`, shows the loading overlay. |
| `text` | `string` | — | Optional text to display below the loader. |

## Basic Usage

```vue
<template>
  <LoadingOverlay :is-visible="loading" text="Loading..." />
</template>
```
