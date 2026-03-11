<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    label: string
    status?: 'info' | 'success' | 'warning' | 'error' | 'neutral' | 'inprogress'
  }>(),
  { status: 'info' }
)

const messageClass = computed(() => [
  'status-message',
  props.status !== 'info' ? `status-message--${props.status}` : null,
])

// SVG icon paths for each status
const iconPath = computed(() => {
  switch (props.status) {
    case 'success':
      return 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.177 14.828L6.1 12.1l1.414-1.414 3.309 3.307 6.663-6.664 1.414 1.415-8.077 8.084z'
    case 'warning':
      return 'M13 14h-2V9h2v5zm0 4h-2v-2h2v2zM1 21L12 2l11 19H1zm2-2h18L12 5 3 19z'
    case 'error':
      return 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
    case 'neutral':
      return 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v-2h2v2zm0-4h-2V7h2v4z'
    default: // info
      return 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v-6h2v6zm0-8h-2V5h2v2z'
  }
})
</script>

<template>
  <div :class="messageClass">
    <!-- spinner for inprogress -->
    <svg v-if="status === 'inprogress'" class="status-message__icon status-message__icon--spinning" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="30" stroke-dashoffset="20" stroke-linecap="round"/>
    </svg>
    <svg v-else class="status-message__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" :d="iconPath" />
    </svg>
    <p class="status-message__label">{{ label }}</p>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.status-message {
  @apply inline-flex items-center gap-2 text-sm text-info-600;
}

.status-message__icon {
  @apply w-5 h-5 flex-shrink-0;
}

.status-message__icon--spinning {
  @apply animate-spin;
}

.status-message--success { @apply text-success-600; }
.status-message--warning { @apply text-warning-600; }
.status-message--error { @apply text-danger-600; }
.status-message--neutral { @apply text-grey-600; }
.status-message--inprogress { @apply text-grey-600; }

.status-message__label { @apply m-0; }
</style>
