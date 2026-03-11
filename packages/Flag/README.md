# Flag

A flag is used to display meta-information about a product or service, acting as a visual indicator of the main category of content.

## Installation

```bash
npm install @leroy-merlin-pt/flag
# or
yarn add @leroy-merlin-pt/flag
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — | **Required.** Label text of the Flag. |
| `appearance` | `"standard"` \| `"danger"` \| `"accent"` \| `"inverse"` | — | Allows to define the Flag appearance. |

## Basic Usage

```vue
<template>
  <Flag label="New" />
  <Flag label="Sale" appearance="danger" />
</template>
```
