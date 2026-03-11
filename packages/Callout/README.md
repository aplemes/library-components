# Callout

A callout component used to highlight important information with an icon and styled message.

## Installation

```bash
npm install @leroy-merlin-pt/callout
# or
yarn add @leroy-merlin-pt/callout
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | — | **Required.** Title of the callout. |
| `description` | `string` | — | **Required.** Description text. |
| `appearance` | `"info"` \| `"warning"` \| `"success"` \| `"danger"` \| `"neutral"` | `"info"` | Visual appearance of the callout. |

## Basic Usage

```vue
<template>
  <Callout title="Note" description="Please review the terms before proceeding." appearance="info" />
</template>
```
