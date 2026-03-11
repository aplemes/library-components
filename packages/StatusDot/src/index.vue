<script setup lang="ts">
import { computed } from 'vue'

/**
 * A Status dot is a small visual indicator used to represent the state or condition of an element.
 */
const props = withDefaults(
  defineProps<{
    /**
     * Allows to define the status dot type.
     */
    status?: 'info' | 'success' | 'warning' | 'error' | 'neutral'
    /**
     * Determines the size of the status dot.
     */
    size?: 's' | 'm' | 'l'
  }>(),
  { status: 'info' }
)

const classObject = computed(() => {
  return {
    [`status-dot--${props.status}`]: props.status && props.status !== 'info',
    [`status-dot--${props.size}`]: props.size && props.size !== 'm',
  }
})
</script>

<template>
  <span class="status-dot" :class="classObject" role="status" aria-label="status"></span>
</template>

<style>
@reference "@/tailwind.css";

.status-dot {
  @apply inline-block w-3 h-3 rounded-full bg-info-500;
}

.status-dot--s {
  @apply w-2 h-2;
}

.status-dot--l {
  @apply w-4 h-4;
}

.status-dot--success { @apply bg-success-500; }
.status-dot--warning { @apply bg-warning-500; }
.status-dot--error { @apply bg-danger-500; }
.status-dot--neutral { @apply bg-grey-400; }
</style>
