# Field

A form field wrapper that provides a label, requirement indicator, help text, and validation messages for form controls.

## Installation

```bash
npm install @leroy-merlin-pt/field
# or
yarn add @leroy-merlin-pt/field
```

## Basic Usage

```vue
<template>
  <Field label="Email" required help-text="We'll never share your email.">
    <Input id="email" v-model="email" />
  </Field>
</template>
```
