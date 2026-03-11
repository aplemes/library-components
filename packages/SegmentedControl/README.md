# SegmentedControl

A segmented control component for switching between a set of mutually exclusive options.

## Installation

```bash
npm install @leroy-merlin-pt/segmented-control
# or
yarn add @leroy-merlin-pt/segmented-control
```

## Basic Usage

```vue
<template>
  <SegmentedControl :options="[{ value: 'day', label: 'Day' }, { value: 'week', label: 'Week' }]" v-model="view" />
</template>
```
