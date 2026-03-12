# Flag

A flag is used to display meta-information about a product or service, acting as a visual indicator of the main category of content.

## Installation

```bash
npm install @azulejo-kit/flag
# or
yarn add @azulejo-kit/flag
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — | **Required.** Label text of the Flag. |
| `appearance` | `"standard"` \| `"danger"` \| `"accent"` \| `"inverse"` | — | Allows to define the Flag appearance. |

## Basic Usage

```vue
<template>
  <AzFlag label="New" />
  <AzFlag label="Sale" appearance="danger" />
</template>
```
