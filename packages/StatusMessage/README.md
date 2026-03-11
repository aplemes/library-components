# StatusMessage

A Status Message is a compact component that combines an icon and concise text to communicate system states or user feedback in limited interface space.

## Installation

```bash
npm install @leroy-merlin-pt/statusmessage
# or
yarn add @leroy-merlin-pt/statusmessage
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — | **Required.** Label of the status message. |
| `status` | `"info"` \| `"success"` \| `"warning"` \| `"error"` \| `"neutral"` \| `"inprogress"` | `"info"` | Allows to define the status message style. |

## Basic Usage

```vue
<script setup>
import StatusMessage from '@leroy-merlin-pt/statusmessage'
</script>

<template>
  <StatusMessage label="Saved successfully" status="success" />
  <StatusMessage label="Loading data..." status="inprogress" />
</template>
```
