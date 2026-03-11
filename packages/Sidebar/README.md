# Sidebar

A sidebar navigation component for application-level navigation.

## Installation

```bash
npm install @leroy-merlin-pt/sidebar
# or
yarn add @leroy-merlin-pt/sidebar
```

## Slots

| Name | Description |
| --- | --- |
| `header` | Header area of the sidebar. |
| `default` | Navigation items. |
| `footer` | Footer area of the sidebar. |

## Basic Usage

```vue
<template>
  <Sidebar>
    <template #header><SidebarHeader /></template>
    <SidebarNavItem href="/home" label="Home" />
    <template #footer><SidebarFooter /></template>
  </Sidebar>
</template>
```
