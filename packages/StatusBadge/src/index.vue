<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    label: string
    status?: 'info' | 'success' | 'warning' | 'error' | 'neutral'
  }>(),
  { status: 'info' }
)

const badgeClass = computed(() => [
  'status-badge',
  props.status !== 'info' ? `status-badge--${props.status}` : null,
])

const dotClass = computed(() => [
  'status-badge__dot',
  `status-badge__dot--${props.status}`,
])
</script>

<template>
  <div :class="badgeClass">
    <span :class="dotClass" aria-hidden="true"></span>
    <span class="status-badge__label">{{ label }}</span>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.status-badge {
  @apply inline-flex items-center gap-1.5 px-2 py-1 rounded-m text-sm font-medium bg-info-100 text-info-700;
}

.status-badge__dot {
  @apply inline-block w-2 h-2 rounded-full flex-shrink-0;
}

.status-badge__dot--info { @apply bg-info-500; }
.status-badge__dot--success { @apply bg-success-500; }
.status-badge__dot--warning { @apply bg-warning-500; }
.status-badge__dot--error { @apply bg-danger-500; }
.status-badge__dot--neutral { @apply bg-grey-400; }

.status-badge--success { @apply bg-success-100 text-success-700; }
.status-badge--warning { @apply bg-warning-100 text-warning-700; }
.status-badge--error { @apply bg-danger-100 text-danger-700; }
.status-badge--neutral { @apply bg-grey-100 text-grey-700; }

.status-badge__label { @apply leading-none; }
</style>
