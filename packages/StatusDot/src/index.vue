<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    status?: 'info' | 'success' | 'warning' | 'error' | 'neutral'
    size?: 's' | 'm' | 'l'
  }>(),
  { status: 'info' }
)

const dotClass = computed(() => [
  'status-dot',
  `status-dot--${props.status}`,
  props.size && props.size !== 'm' ? `status-dot--${props.size}` : null,
])
</script>

<template>
  <span :class="dotClass" role="status" aria-label="status"></span>
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

.status-dot--info { @apply bg-info-500; }
.status-dot--success { @apply bg-success-500; }
.status-dot--warning { @apply bg-warning-500; }
.status-dot--error { @apply bg-danger-500; }
.status-dot--neutral { @apply bg-grey-400; }
</style>
