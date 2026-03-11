<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /** Specifies the visual appearance of the loader. */
    appearance?: 'standard' | 'accent' | 'inverse'
    /** Defines the size of the loader. */
    size?: 'xs' | 's' | 'm' | 'l'
    /** Text to display alongside the loader, e.g. when used inside an Overlay. */
    text?: string
  }>(),
  { appearance: 'standard', size: 'm' }
)

const sizeMap = { xs: 20, s: 24, m: 32, l: 64 }
const radiusMap = { xs: 6, s: 6, m: 9, l: 19 }

const viewBox = computed(() => {
  const s = sizeMap[props.size!]
  return `0 0 ${s} ${s}`
})
const circleRadius = computed(() => radiusMap[props.size!])

const loaderClass = computed(() => [
  'loader',
  props.size !== 'm' ? `loader--${props.size}` : null,
  props.appearance !== 'standard' ? `loader--${props.appearance}` : null,
  props.text ? 'loader--with-text' : null,
])
</script>

<template>
  <div :class="loaderClass">
    <span class="loader__spinner">
      <svg class="loader__icon" xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox" aria-hidden="true">
        <circle class="loader__path" cx="50%" cy="50%" :r="circleRadius" />
      </svg>
    </span>
    <p v-if="text" class="loader__text" role="status">{{ text }}</p>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.loader {
  @apply inline-flex flex-col items-center justify-center;
}

.loader--with-text {
  @apply gap-2;
}

.loader__spinner {
  @apply block;
}

.loader__icon {
  @apply animate-spin;
  color: var(--color-primary);
  width: 32px;
  height: 32px;
}

.loader--xs .loader__icon { width: 20px; height: 20px; }
.loader--s .loader__icon { width: 24px; height: 24px; }
.loader--l .loader__icon { width: 64px; height: 64px; }

.loader__path {
  fill: none;
  stroke: currentColor;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 80;
  stroke-dashoffset: 60;
}

.loader--accent .loader__icon { color: var(--color-primary-01-400); }
.loader--inverse .loader__icon { @apply text-white; }

.loader__text {
  @apply text-sm text-grey-700;
}
.loader--inverse .loader__text { @apply text-white; }
</style>
