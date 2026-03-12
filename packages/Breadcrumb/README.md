# Breadcrumb

A breadcrumb navigation component that shows the current page location within a hierarchy.

## Installation

```bash
npm install @azulejo-kit/breadcrumb
# or
yarn add @azulejo-kit/breadcrumb
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `links` | `BreadcrumbLink[]` | — | **Required.** Array of breadcrumb link definitions. |
| `appearance` | `"light"` \| `"dark"` | `"light"` | Visual appearance of the breadcrumb. |

## Basic Usage

```vue
<template>
  <AzBreadcrumb :links="[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Item', href: '/products/item', current: true }]" />
</template>
```
