<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    value: string | number
    trend?: 'up' | 'down' | 'neutral'
    label?: string
    status?: 'info' | 'success' | 'warning' | 'danger'
    information?: string
    size?: 's' | 'm' | 'l'
  }>(),
  {
    size: 'm',
    trend: 'neutral',
  },
)

const trendIcon = computed(() => {
  switch (props.trend) {
    case 'up': return '↑'
    case 'down': return '↓'
    case 'neutral':
    default: return '→'
  }
})

const trendClass = computed(() => {
  switch (props.trend) {
    case 'up': return 'kpi-item__trend--up'
    case 'down': return 'kpi-item__trend--down'
    case 'neutral':
    default: return 'kpi-item__trend--neutral'
  }
})

const statusClass = computed(() => {
  if (!props.status) return null
  return `kpi-item--${props.status}`
})

const classes = computed(() => [
  'kpi-item',
  `kpi-item--${props.size}`,
  statusClass.value,
])
</script>

<template>
  <div :class="classes">
    <span v-if="label && size === 'm'" class="kpi-item__label">{{ label }}</span>
    <div class="kpi-item__content">
      <div class="kpi-item__main">
        <span v-if="label && size === 'l'" class="kpi-item__label">{{ label }}</span>
        <span class="kpi-item__value">{{ value }}</span>
      </div>
      <div class="kpi-item__aside">
        <span v-if="information && size === 'l'" class="kpi-item__information">{{ information }}</span>
        <span
          v-if="trend"
          class="kpi-item__trend"
          :class="trendClass"
          aria-hidden="true"
        >{{ trendIcon }}</span>
      </div>
    </div>
    <span v-if="status" class="kpi-item__badge" :class="`kpi-item__badge--${status}`">
      {{ status }}
    </span>
    <span v-if="information && size !== 'l'" class="kpi-item__information">{{ information }}</span>
  </div>
</template>

<style scoped>
@reference "@/tailwind.css";

.kpi-item {
  @apply inline-flex flex-col gap-1 p-3;
}

.kpi-item--s {
  @apply text-sm;
}

.kpi-item--m {
  @apply text-base;
}

.kpi-item--l {
  @apply text-lg;
}

.kpi-item__label {
  @apply text-xs text-grey-600 uppercase font-medium;
}

.kpi-item__content {
  @apply flex items-end gap-2;
}

.kpi-item__main {
  @apply flex flex-col;
}

.kpi-item__value {
  @apply font-bold text-grey-900;
}

.kpi-item--s .kpi-item__value {
  @apply text-xl;
}

.kpi-item--m .kpi-item__value {
  @apply text-2xl;
}

.kpi-item--l .kpi-item__value {
  @apply text-4xl;
}

.kpi-item__aside {
  @apply flex items-center gap-1;
}

.kpi-item__trend {
  @apply font-semibold text-base;
}

.kpi-item__trend--up {
  @apply text-success-600;
}

.kpi-item__trend--down {
  @apply text-danger-500;
}

.kpi-item__trend--neutral {
  @apply text-grey-500;
}

.kpi-item__badge {
  @apply inline-flex items-center px-2 py-0.5 rounded text-xs font-medium;
}

.kpi-item__badge--info {
  @apply bg-info-100 text-info-700;
}

.kpi-item__badge--success {
  @apply bg-success-100 text-success-700;
}

.kpi-item__badge--warning {
  @apply bg-warning-100 text-warning-700;
}

.kpi-item__badge--danger {
  @apply bg-danger-100 text-danger-700;
}

.kpi-item__information {
  @apply text-xs text-grey-500;
}
</style>
