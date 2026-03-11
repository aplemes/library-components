<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    title: string
    description: string
    appearance?: 'info' | 'warning' | 'success' | 'danger' | 'neutral'
  }>(),
  {
    appearance: 'info',
  },
)

const iconDefault = computed(() => {
  switch (props.appearance) {
    case 'warning': return '⚠'
    case 'success': return '✓'
    case 'danger': return '✕'
    case 'neutral': return 'ℹ'
    case 'info':
    default: return 'ℹ'
  }
})

const classes = computed(() => [
  'callout',
  `callout--${props.appearance}`,
])
</script>

<template>
  <section :class="classes" role="status">
    <div class="callout__icon">
      <slot name="icon">
        <span class="callout__icon-default" aria-hidden="true">{{ iconDefault }}</span>
      </slot>
    </div>
    <div class="callout__content">
      <h2 class="callout__title">{{ title }}</h2>
      <p class="callout__description">{{ description }}</p>
      <div v-if="$slots.footer" class="callout__footer">
        <slot name="footer" />
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "@/tailwind.css";

.callout {
  @apply flex gap-3 p-4 rounded-l border;
}

.callout--info {
  @apply bg-info-100 border-info-500 text-info-700;
}

.callout--warning {
  @apply bg-warning-100 border-warning-500 text-warning-700;
}

.callout--success {
  @apply bg-success-100 border-success-500 text-success-700;
}

.callout--danger {
  @apply bg-danger-100 border-danger-500 text-danger-700;
}

.callout--neutral {
  @apply bg-grey-100 border-grey-300 text-grey-800;
}

.callout__icon {
  @apply flex-shrink-0 text-xl;
}

.callout__content {
  @apply flex flex-col gap-1;
}

.callout__title {
  @apply m-0 text-base font-semibold;
}

.callout__description {
  @apply m-0 text-sm;
}

.callout__footer {
  @apply mt-2 flex gap-2;
}
</style>
