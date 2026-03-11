# FieldGroup

A form field group wrapper that provides a legend, requirement indicator, and validation messages for groups of form controls.

## Installation

```bash
npm install @leroy-merlin-pt/field-group
# or
yarn add @leroy-merlin-pt/field-group
```

## Basic Usage

```vue
<template>
  <FieldGroup legend="Preferences">
    <CheckboxGroup name="prefs" :options="options" v-model="selected" />
  </FieldGroup>
</template>
```
