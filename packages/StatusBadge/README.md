# StatusBadge

A Status Badge is used to indicate the current status of an element, providing a clear and concise visual cue. Status Badges help users quickly identify the state of an item.

## Installation

```bash
npm install @leroy-merlin-pt/statusbadge
# or
yarn add @leroy-merlin-pt/statusbadge
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — | **Required.** Content of the status badge. |
| `status` | `"info"` \| `"success"` \| `"warning"` \| `"error"` \| `"neutral"` | `"info"` | Allows to define the status badge type. |

## Basic Usage

```vue
<script setup>
import StatusBadge from '@leroy-merlin-pt/statusbadge'
</script>

<template>
  <StatusBadge label="Active" status="success" />
  <StatusBadge label="Pending" status="warning" />
  <StatusBadge label="Error" status="error" />
</template>
```
