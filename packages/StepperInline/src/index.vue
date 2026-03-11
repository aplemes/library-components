<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    currentStep?: number
    steps?: Array<{
      label: string
      description?: string
    }>
  }>(),
  {
    currentStep: 1,
    steps: () => [],
  },
)

const activeIndex = computed(() => {
  return Math.min(Math.max((props.currentStep ?? 1) - 1, 0), props.steps.length - 1)
})

const stepStates = computed(() =>
  props.steps.map((_, i) => ({
    completed: i < activeIndex.value,
    current: i === activeIndex.value,
  })),
)
</script>

<template>
  <nav class="stepper-inline" aria-label="Stepper">
    <ol class="stepper-inline__list">
      <li
        v-for="(step, index) in steps"
        :key="index"
        class="stepper-inline__item"
        :class="{ 'stepper-inline__item--completed': stepStates[index].completed }"
      >
        <div class="stepper-inline__header">
          <span
            v-if="stepStates[index].completed"
            class="stepper-inline__check"
            aria-hidden="true"
          >✓</span>
          <span
            v-else
            class="stepper-inline__circle"
            :class="{ 'stepper-inline__circle--current': stepStates[index].current }"
          >
            {{ index + 1 }}
          </span>

          <span
            class="stepper-inline__label"
            :class="{ 'stepper-inline__label--current': stepStates[index].current }"
          >
            {{ step.label }}
          </span>
        </div>

        <span v-if="index < steps.length - 1" class="stepper-inline__separator" aria-hidden="true">›</span>
      </li>
    </ol>
  </nav>
</template>

<style>
@reference "@/tailwind.css";

.stepper-inline__list {
  @apply list-none m-0 p-0 flex items-center flex-wrap gap-2;
}

.stepper-inline__item {
  @apply flex items-center gap-2;
}

.stepper-inline__header {
  @apply flex items-center gap-2;
}

.stepper-inline__check {
  @apply w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stepper-inline__circle {
  @apply w-6 h-6 rounded-full border-2 border-grey-300 text-grey-500 flex items-center justify-center text-xs font-medium;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stepper-inline__circle--current {
  @apply border-primary text-primary;
}

.stepper-inline__label {
  @apply text-sm text-grey-600;
}

.stepper-inline__label--current {
  @apply text-primary font-semibold;
}

.stepper-inline__separator {
  @apply text-grey-300 text-lg;
}
</style>
