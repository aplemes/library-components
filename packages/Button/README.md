# Button

Buttons are key interactive elements used to perform actions and can be used as standalone element, or as part of another component. Their appearance depends on the type of action required from the user and the context in which they are used.

## Installation

```bash
npm install @leroy-merlin-pt/button
# or
yarn add @leroy-merlin-pt/button
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `appearance` | `"standard"` \| `"danger"` \| `"inverse"` \| `"accent"` | `"standard"` | Defines the visual style of the button. |
| `size` | `"s"` \| `"m"` \| `"l"` | `"m"` | Determines the size of the button. |
| `disabled` | `boolean` | — | If `true`, disables the button, making it non-interactive. |
| `ghost` | `boolean` | — | If `true`, applies a "ghost" style to the button. |
| `outlined` | `boolean` | — | If `true`, the button gets an outlined style. |
| `iconPosition` | `"left"` \| `"right"` \| `"only"` | — | Controls the positioning of an icon in the button. |
| `type` | `"button"` \| `"reset"` \| `"submit"` | `"button"` | Specifies the button's HTML `type` attribute. |
| `isLoading` | `boolean` | — | If `true`, a loading state is displayed. |

## Slots

| Name | Description |
| --- | --- |
| `default` | The content displayed in the button. |
| `icon` | Use this slot to insert an icon for the Button. |

## Basic Usage

```vue
<script setup>
import Button from '@leroy-merlin-pt/button'
</script>

<template>
  <Button appearance="standard" size="m">Click me</Button>
  <Button appearance="danger" ghost>Delete</Button>
</template>
```
