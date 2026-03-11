# SidebarShortcuts

A shortcuts panel for use within a Sidebar, providing quick access to common actions.

## Installation

```bash
npm install @leroy-merlin-pt/sidebar-shortcuts
# or
yarn add @leroy-merlin-pt/sidebar-shortcuts
```

## Slots

| Name | Description |
| --- | --- |
| `default` | SidebarShortcutItem components. |

## Basic Usage

```vue
<template>
  <SidebarShortcuts>
    <SidebarShortcutItem label="Settings" href="/settings" />
  </SidebarShortcuts>
</template>
```
