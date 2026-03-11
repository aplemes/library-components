<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    value?: number
    size?: 's' | 'm' | 'l'
    type?: 'percentage' | 'content'
    contentValue?: string
    additionalInfo?: string
  }>(),
  { value: 0, type: 'percentage' }
)

// SVG circle math: r=46, circumference = 2*PI*46 ≈ 289
const circumference = 2 * Math.PI * 46
const strokeDashoffset = computed(() => circumference - (props.value / 100) * circumference)

const wrapperClass = computed(() => [
  'circ-progress',
  props.size && props.size !== 'l' ? `circ-progress--${props.size}` : null,
])
</script>

<template>
  <div
    :class="wrapperClass"
    role="progressbar"
    :aria-valuenow="value"
    :aria-valuemin="0"
    :aria-valuemax="100"
    :aria-label="`Progress: ${value}%`"
  >
    <svg class="circ-progress__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-hidden="true">
      <circle class="circ-progress__track" cx="50" cy="50" r="46" />
      <circle
        class="circ-progress__indicator"
        cx="50"
        cy="50"
        r="46"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="strokeDashoffset"
      />
    </svg>
    <div v-if="type === 'percentage'" class="circ-progress__label">
      <span class="circ-progress__value">{{ value }}</span>
      <span class="circ-progress__unit">%</span>
    </div>
    <div v-else-if="type === 'content'" class="circ-progress__label">
      <span class="circ-progress__value">{{ contentValue }}</span>
      <span v-if="additionalInfo" class="circ-progress__info">{{ additionalInfo }}</span>
    </div>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.circ-progress {
  @apply relative inline-flex items-center justify-center w-24 h-24;
}

.circ-progress--s {
  @apply w-16 h-16;
}

.circ-progress--m {
  @apply w-20 h-20;
}

.circ-progress__svg {
  @apply w-full h-full -rotate-90;
}

.circ-progress__track {
  fill: none;
  stroke: var(--color-grey-200);
  stroke-width: 6;
}

.circ-progress__indicator {
  fill: none;
  stroke: var(--color-primary);
  stroke-width: 6;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.3s ease;
}

.circ-progress__label {
  @apply absolute inset-0 flex flex-col items-center justify-center;
}

.circ-progress__value {
  @apply text-sm font-semibold text-grey-800 leading-none;
}

.circ-progress--s .circ-progress__value {
  @apply text-xs;
}

.circ-progress__unit, .circ-progress__info {
  @apply text-xs text-grey-500 leading-none;
}
</style>
