# Breadcrumb

A breadcrumb navigation component that shows the current page location within a hierarchy.

## Installation

```bash
npm install @leroy-merlin-pt/breadcrumb
# or
yarn add @leroy-merlin-pt/breadcrumb
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `links` | `BreadcrumbLink[]` | — | **Required.** Array of breadcrumb link definitions. |
| `appearance` | `"light"` \| `"dark"` | `"light"` | Visual appearance of the breadcrumb. |

## Basic Usage

```vue
<template>
  <Breadcrumb :links="[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Item', href: '/products/item', current: true }]" />
</template>
```
