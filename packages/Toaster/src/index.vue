<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    open?: boolean
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
    description: string
    status?: 'info' | 'success' | 'warning' | 'danger'
    closable?: boolean
    progress?: boolean
    timeout?: number
  }>(),
  {
    position: 'top-right',
    status: 'info',
    closable: true,
    timeout: 5000,
  },
)

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const progressValue = ref(0)
let intervalId: ReturnType<typeof setInterval> | null = null
let timeoutId: ReturnType<typeof setTimeout> | null = null

function onClose() {
  emit('update:open', false)
}

function startTimer() {
  clearTimers()
  if (!props.open || !props.timeout) return

  progressValue.value = 0

  if (props.progress) {
    const intervalMs = 100
    const steps = props.timeout / intervalMs
    const increment = 100 / steps

    intervalId = setInterval(() => {
      progressValue.value += increment
      if (progressValue.value >= 100) {
        progressValue.value = 100
        onClose()
        clearTimers()
      }
    }, intervalMs)
  } else {
    timeoutId = setTimeout(() => {
      onClose()
    }, props.timeout)
  }
}

function clearTimers() {
  if (intervalId) { clearInterval(intervalId); intervalId = null }
  if (timeoutId) { clearTimeout(timeoutId); timeoutId = null }
}

watch(() => props.open, (val) => {
  if (val) startTimer()
  else clearTimers()
})

onMounted(() => {
  if (props.open) startTimer()
})

onBeforeUnmount(() => {
  clearTimers()
})

const statusIcon = computed(() => {
  switch (props.status) {
    case 'success': return '✓'
    case 'warning': return '⚠'
    case 'danger': return '✕'
    case 'info':
    default: return 'ℹ'
  }
})

const positionClasses: Record<string, string> = {
  'top-right': 'toaster--top-right',
  'top-left': 'toaster--top-left',
  'bottom-right': 'toaster--bottom-right',
  'bottom-left': 'toaster--bottom-left',
}

const classes = computed(() => [
  'toaster',
  positionClasses[props.position ?? 'top-right'],
  `toaster--${props.status}`,
  props.open ? 'toaster--open' : null,
])
</script>

<template>
  <Teleport to="body">
    <div v-if="open" :class="classes" role="status" aria-live="polite">
      <span class="toaster__icon" aria-hidden="true">{{ statusIcon }}</span>
      <div class="toaster__content">
        <p class="toaster__description">{{ description }}</p>
        <div v-if="$slots.action" class="toaster__action">
          <slot name="action" />
        </div>
      </div>
      <button
        v-if="closable"
        class="toaster__close"
        aria-label="Close"
        @click="onClose"
      >
        ✕
      </button>
      <div v-if="progress" class="toaster__progress">
        <div
          class="toaster__progress-bar"
          :style="{ width: `${progressValue}%` }"
        />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
@reference "@/tailwind.css";

.toaster {
  @apply fixed z-50 flex items-start gap-3 p-4 rounded-l shadow-m min-w-64 max-w-sm;
}

.toaster--top-right {
  @apply top-4 right-4;
}

.toaster--top-left {
  @apply top-4 left-4;
}

.toaster--bottom-right {
  @apply bottom-4 right-4;
}

.toaster--bottom-left {
  @apply bottom-4 left-4;
}

.toaster--info {
  @apply bg-info-100 border border-info-500 text-info-700;
}

.toaster--success {
  @apply bg-success-100 border border-success-500 text-success-700;
}

.toaster--warning {
  @apply bg-warning-100 border border-warning-500 text-warning-700;
}

.toaster--danger {
  @apply bg-danger-100 border border-danger-500 text-danger-700;
}

.toaster__icon {
  @apply flex-shrink-0 text-lg;
}

.toaster__content {
  @apply flex-1 min-w-0;
}

.toaster__description {
  @apply m-0 text-sm;
}

.toaster__action {
  @apply mt-2;
}

.toaster__close {
  @apply flex-shrink-0 w-6 h-6 flex items-center justify-center bg-transparent border-0 cursor-pointer opacity-60 hover:opacity-100 transition-opacity;
}

.toaster__progress {
  @apply absolute bottom-0 left-0 right-0 h-1 rounded-b-l overflow-hidden;
  background-color: rgba(0, 0, 0, 0.1);
}

.toaster__progress-bar {
  @apply h-full bg-current opacity-40 transition-none;
}
</style>
