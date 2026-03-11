# Tabs

A tabs component for switching between related sections of content.

## Installation

```bash
npm install @leroy-merlin-pt/tabs
# or
yarn add @leroy-merlin-pt/tabs
```

## Basic Usage

```vue
<template>
  <Tabs :tabs="[{ id: 'tab1', label: 'Overview' }, { id: 'tab2', label: 'Details' }]" v-model="activeTab">
    <div v-if="activeTab === 'tab1'">Overview content</div>
    <div v-if="activeTab === 'tab2'">Details content</div>
  </Tabs>
</template>
```
