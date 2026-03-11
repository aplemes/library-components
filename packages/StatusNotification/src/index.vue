<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    title: string
    description: string
    status?: 'info' | 'success' | 'warning' | 'error'
    closable?: boolean
  }>(),
  { status: 'info' }
)

const emit = defineEmits<{
  close: []
}>()

const notifClass = computed(() => [
  'status-notif',
  props.status !== 'info' ? `status-notif--${props.status}` : null,
])

const iconPath = computed(() => {
  switch (props.status) {
    case 'success':
      return 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.177 14.828L6.1 12.1l1.414-1.414 3.309 3.307 6.663-6.664 1.414 1.415-8.077 8.084z'
    case 'warning':
      return 'M13 14h-2V9h2v5zm0 4h-2v-2h2v2zM1 21L12 2l11 19H1zm2-2h18L12 5 3 19z'
    case 'error':
      return 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
    default:
      return 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v-6h2v6zm0-8h-2V5h2v2z'
  }
})
</script>

<template>
  <section :class="notifClass" role="status">
    <svg class="status-notif__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" :d="iconPath" />
    </svg>
    <div class="status-notif__content">
      <h2 class="status-notif__title">{{ title }}</h2>
      <p class="status-notif__description">{{ description }}</p>
      <div v-if="$slots.footer" class="status-notif__footer">
        <slot name="footer" />
      </div>
    </div>
    <button
      v-if="closable"
      class="status-notif__close"
      type="button"
      aria-label="Close"
      @click="emit('close')"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
    </button>
  </section>
</template>

<style>
@reference "@/tailwind.css";

.status-notif {
  @apply flex items-start gap-3 p-4 rounded-m border bg-info-100 border-info-500 text-info-700;
}

.status-notif--success { @apply bg-success-100 border-success-500 text-success-700; }
.status-notif--warning { @apply bg-warning-100 border-warning-500 text-warning-700; }
.status-notif--error { @apply bg-danger-100 border-danger-500 text-danger-700; }

.status-notif__icon {
  @apply w-8 h-8 flex-shrink-0 mt-0.5;
}

.status-notif__content {
  @apply flex-1 min-w-0;
}

.status-notif__title {
  @apply text-base font-semibold m-0 mb-1;
}

.status-notif__description {
  @apply text-sm m-0;
}

.status-notif__footer {
  @apply mt-3;
}

.status-notif__close {
  @apply flex-shrink-0 flex items-center justify-center text-current opacity-70 hover:opacity-100 transition-opacity;
}
</style>
