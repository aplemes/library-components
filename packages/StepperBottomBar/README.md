# StepperBottomBar

A bottom bar component for multi-step wizard flows, providing navigation between steps.

## Installation

```bash
npm install @leroy-merlin-pt/stepper-bottom-bar
# or
yarn add @leroy-merlin-pt/stepper-bottom-bar
```

## Basic Usage

```vue
<template>
  <StepperBottomBar :current="2" :total="4" @next="goNext" @previous="goPrevious" />
</template>
```
