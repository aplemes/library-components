<script setup lang="ts">
const props = defineProps<{
  title: string
  shadow?: boolean
  backButton?: boolean
  status?: string
  statusLabel?: string
  extraInfo?: string
}>()

const emit = defineEmits<{
  back: []
  'toggle-menu': []
}>()

const statusClasses: Record<string, string> = {
  info: 'page-header__badge--info',
  success: 'page-header__badge--success',
  warning: 'page-header__badge--warning',
  danger: 'page-header__badge--danger',
  error: 'page-header__badge--danger',
  neutral: 'page-header__badge--neutral',
}
</script>

<template>
  <div
    class="page-header"
    :class="{ 'page-header--shadow': shadow }"
  >
    <div class="page-header__top">
      <div class="page-header__top-content">
        <button
          v-if="backButton"
          class="page-header__back-btn"
          aria-label="Back button"
          @click="emit('back')"
        >
          &#8592;
        </button>

        <div class="page-header__content-wrapper">
          <span class="page-header__title">{{ title }}</span>

          <div v-if="status || extraInfo" class="page-header__info">
            <span
              v-if="statusLabel && status"
              class="page-header__badge"
              :class="statusClasses[status]"
            >
              {{ statusLabel }}
            </span>
            <span v-if="extraInfo" class="page-header__extra-info">{{ extraInfo }}</span>
          </div>

          <slot name="content" />
        </div>
      </div>

      <div class="page-header__actions">
        <button
          class="page-header__menu-btn"
          aria-label="Burger menu"
          @click="emit('toggle-menu')"
        >
          &#9776;
        </button>
        <div class="page-header__actions-content">
          <slot name="actions" />
        </div>
      </div>
    </div>

    <div v-if="$slots.tabs" class="page-header__tabs">
      <slot name="tabs" />
    </div>
  </div>
</template>

<style scoped>
@reference "@/tailwind.css";

.page-header {
  @apply bg-white border-b border-grey-200;
}

.page-header--shadow {
  @apply shadow-m;
}

.page-header__top {
  @apply flex items-center justify-between px-4 py-3 gap-4;
}

.page-header__top-content {
  @apply flex items-center gap-3 flex-1 min-w-0;
}

.page-header__back-btn {
  @apply flex-shrink-0 w-8 h-8 flex items-center justify-center bg-transparent border-0 cursor-pointer text-grey-700 hover:bg-grey-100 rounded;
}

.page-header__content-wrapper {
  @apply flex flex-col min-w-0;
}

.page-header__title {
  @apply text-lg font-semibold text-grey-900 truncate;
}

.page-header__info {
  @apply flex items-center gap-2 mt-0.5;
}

.page-header__badge {
  @apply inline-flex items-center px-2 py-0.5 rounded text-xs font-medium;
}

.page-header__badge--info {
  @apply bg-info-100 text-info-700;
}

.page-header__badge--success {
  @apply bg-success-100 text-success-700;
}

.page-header__badge--warning {
  @apply bg-warning-100 text-warning-700;
}

.page-header__badge--danger {
  @apply bg-danger-100 text-danger-700;
}

.page-header__badge--neutral {
  @apply bg-grey-100 text-grey-700;
}

.page-header__extra-info {
  @apply text-sm text-grey-600;
}

.page-header__actions {
  @apply flex items-center gap-2 flex-shrink-0;
}

.page-header__menu-btn {
  @apply w-8 h-8 flex items-center justify-center bg-transparent border-0 cursor-pointer text-grey-700 hover:bg-grey-100 rounded;
}

.page-header__actions-content {
  @apply flex items-center gap-2;
}

.page-header__tabs {
  @apply border-t border-grey-200;
}
</style>
