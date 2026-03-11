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
  <nav class="stepper-stacked" aria-label="Stepper">
    <ol class="stepper-stacked__list">
      <li
        v-for="(step, index) in steps"
        :key="index"
        class="stepper-stacked__item"
        :class="{
          'stepper-stacked__item--completed': stepStates[index].completed,
          'stepper-stacked__item--current': stepStates[index].current,
        }"
      >
        <div class="stepper-stacked__indicator">
          <span
            v-if="stepStates[index].completed"
            class="stepper-stacked__check"
            aria-hidden="true"
          >✓</span>
          <span
            v-else
            class="stepper-stacked__circle"
            :class="{ 'stepper-stacked__circle--current': stepStates[index].current }"
          >
            {{ index + 1 }}
          </span>
        </div>
        <div class="stepper-stacked__content">
          <span
            class="stepper-stacked__label"
            :class="{ 'stepper-stacked__label--current': stepStates[index].current }"
          >
            {{ step.label }}
          </span>
          <span v-if="step.description" class="stepper-stacked__description">
            {{ step.description }}
          </span>
        </div>
      </li>
    </ol>
  </nav>
</template>

<style>
@reference "@/tailwind.css";

.stepper-stacked__list {
  @apply list-none m-0 p-0 flex flex-col gap-0;
}

.stepper-stacked__item {
  @apply flex items-start gap-3 py-3 relative;
}

.stepper-stacked__item:not(:last-child)::after {
  content: '';
  @apply absolute left-4 top-10 w-px h-full bg-grey-200;
}

.stepper-stacked__item--completed::after {
  @apply bg-primary;
}

.stepper-stacked__indicator {
  @apply flex-shrink-0 w-8 h-8 flex items-center justify-center;
}

.stepper-stacked__check {
  @apply w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stepper-stacked__circle {
  @apply w-8 h-8 rounded-full border-2 border-grey-300 text-grey-500 flex items-center justify-center text-sm font-medium;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stepper-stacked__circle--current {
  @apply border-primary text-primary;
}

.stepper-stacked__content {
  @apply flex flex-col pt-1;
}

.stepper-stacked__label {
  @apply text-sm font-medium text-grey-600;
}

.stepper-stacked__label--current {
  @apply text-primary font-semibold;
}

.stepper-stacked__description {
  @apply text-xs text-grey-500 mt-0.5;
}
</style>
