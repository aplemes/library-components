# Avatar

An avatar is a graphical representation of a user, entity, or group, commonly displayed as an image, initials, or an icon. It helps identify individuals or accounts in profiles, comments, chat interfaces, and user lists.

## Installation

```bash
npm install @azulejo-kit/avatar
# or
yarn add @azulejo-kit/avatar
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"s"` \| `"m"` \| `"l"` | `"s"` | Allows to define the avatar size. |

## Slots

| Name | Description |
| --- | --- |
| `default` | Use this slot to insert the image, icon or initials of the avatar. |

## Basic Usage

```vue
<script setup>
import Avatar from '@azulejo-kit/avatar'
</script>

<template>
  <Avatar size="m">
    <img src="/user.jpg" alt="User avatar" />
  </Avatar>
</template>
```
