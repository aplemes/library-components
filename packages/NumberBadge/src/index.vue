<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /** Numeric content of the badge. */
    label: number
    /** Defines the badge appearance. */
    appearance?: 'danger' | 'accent' | 'inverse' | 'standard'
    /** Defines the badge size. */
    size?: 's' | 'm'
  }>(),
  { appearance: 'standard', size: 's' }
)

const badgeClass = computed(() => [
  'number-badge',
  props.appearance !== 'standard' ? `number-badge--${props.appearance}` : null,
  props.size !== 's' ? `number-badge--${props.size}` : null,
])
</script>

<template>
  <span :class="badgeClass">{{ label }}</span>
</template>

<style>
@reference "@/tailwind.css";

.number-badge {
  @apply inline-flex items-center justify-center min-w-5 h-5 px-1 rounded-full text-xs font-semibold bg-primary-02-700 text-white leading-none;
}

.number-badge--m {
  @apply min-w-6 h-6 px-1.5 text-sm;
}

.number-badge--danger {
  @apply bg-danger-500 text-white;
}

.number-badge--accent {
  @apply bg-primary-01-400 text-white;
}

.number-badge--inverse {
  @apply bg-white text-primary-02-700;
}
</style>
