<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    value?: number
    maxSteps?: number
    label: string
    description?: string
  }>(),
  {
    value: 1,
    maxSteps: 4,
  },
)

const progressPercent = computed(() => {
  const v = props.value ?? 0
  const max = props.maxSteps ?? 1
  return Math.round((v / max) * 100)
})

const stepLabel = computed(() => `${props.value} / ${props.maxSteps}`)
</script>

<template>
  <div class="stepper-compact">
    <div class="stepper-compact__indicator" :aria-label="`Step ${value} of ${maxSteps}`">
      <svg class="stepper-compact__ring" viewBox="0 0 36 36" aria-hidden="true">
        <circle class="stepper-compact__ring-bg" cx="18" cy="18" r="15.9155" />
        <circle
          class="stepper-compact__ring-progress"
          cx="18" cy="18" r="15.9155"
          :stroke-dasharray="`${progressPercent} ${100 - progressPercent}`"
        />
      </svg>
      <span class="stepper-compact__step-label">{{ stepLabel }}</span>
    </div>

    <div class="stepper-compact__content">
      <p class="stepper-compact__label">{{ label }}</p>
      <p v-if="description" class="stepper-compact__description">{{ description }}</p>
    </div>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.stepper-compact {
  @apply flex items-center gap-4;
}

.stepper-compact__indicator {
  @apply relative flex-shrink-0 w-12 h-12;
}

.stepper-compact__ring {
  @apply w-12 h-12 -rotate-90;
}

.stepper-compact__ring-bg {
  fill: none;
  stroke: #e6e6e6;
  stroke-width: 3;
}

.stepper-compact__ring-progress {
  fill: none;
  stroke: #007a3e;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dashoffset: 0;
  transition: stroke-dasharray 0.3s ease;
}

.stepper-compact__step-label {
  @apply absolute inset-0 flex items-center justify-center text-xs font-semibold text-grey-700;
}

.stepper-compact__content {
  @apply flex flex-col;
}

.stepper-compact__label {
  @apply text-sm font-semibold text-grey-800 m-0;
}

.stepper-compact__description {
  @apply text-xs text-grey-500 m-0 mt-0.5;
}
</style>
