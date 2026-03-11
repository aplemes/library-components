<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
  appearance?: 'danger' | 'accent' | 'inverse' | 'standard'
}>()

const flagClass = computed(() => [
  'flag',
  props.appearance && props.appearance !== 'standard' ? `flag--${props.appearance}` : null,
])
</script>

<template>
  <div :class="flagClass">
    <span class="flag__label">{{ label }}</span>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.flag {
  @apply inline-flex items-center px-2 py-1 text-xs font-semibold uppercase tracking-wide bg-primary text-white;
  border-radius: var(--radius-s);
}

.flag--danger {
  @apply bg-danger-500 text-white;
}

.flag--accent {
  @apply bg-primary-01-400 text-white;
}

.flag--inverse {
  @apply bg-white text-primary;
}

.flag__label {
  @apply leading-none;
}
</style>
