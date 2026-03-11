# StatusNotification

A Status Notification is used to draw the user's attention to important information that needs to be acknowledged. It often provides feedback on a process, highlights a status update, or alerts users about an issue.

## Installation

```bash
npm install @leroy-merlin-pt/statusnotification
# or
yarn add @leroy-merlin-pt/statusnotification
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | — | **Required.** Title of the status notification. |
| `description` | `string` | — | **Required.** Description of the status notification. |
| `status` | `"info"` \| `"success"` \| `"warning"` \| `"error"` | `"info"` | Allows to define the status notification type. |
| `closable` | `boolean` | — | If `true`, display the close button. |

## Emits

| Event | Payload | Description |
| --- | --- | --- |
| `close` | — | Emitted when closing the notification. |

## Slots

| Name | Description |
| --- | --- |
| `footer` | Use this slot to insert a button or a link in the footer. |

## Basic Usage

```vue
<script setup>
import StatusNotification from '@leroy-merlin-pt/statusnotification'
</script>

<template>
  <StatusNotification
    title="Success"
    description="Your changes have been saved."
    status="success"
    :closable="true"
    @close="() => {}"
  />
</template>
```
