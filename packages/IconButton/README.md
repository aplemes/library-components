# IconButton

An icon-only button used to perform actions. Their appearance depends on the type of action required from the user and the context in which they are used.

## Installation

```bash
npm install @leroy-merlin-pt/iconbutton
# or
yarn add @leroy-merlin-pt/iconbutton
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `appearance` | `"standard"` \| `"accent"` \| `"danger"` \| `"inverse"` | `"standard"` | Defines the visual style of the icon button. |
| `size` | `"s"` \| `"m"` \| `"l"` | `"m"` | Determines the size of the icon button. |
| `disabled` | `boolean` | — | If `true`, disables the icon button. |
| `ghost` | `boolean` | — | If `true`, applies a "ghost" style to the icon button. |
| `outlined` | `boolean` | — | If `true`, the icon button gets an outlined style. |
| `type` | `"button"` \| `"reset"` \| `"submit"` | `"button"` | Specifies the button's HTML `type` attribute. |
| `isLoading` | `boolean` | — | If `true`, a loading state is displayed. |
| `ariaLabel` | `string` | — | Accessible label for the icon button. |

## Slots

| Name | Description |
| --- | --- |
| `icon` | Use this slot to insert an icon for the Button. |

## Basic Usage

```vue
<template>
  <IconButton aria-label="Close" ghost>
    <template #icon><svg>...</svg></template>
  </IconButton>
</template>
```
