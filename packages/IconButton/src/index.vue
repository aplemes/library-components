<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    appearance?: 'standard' | 'accent' | 'danger' | 'inverse'
    size?: 's' | 'm' | 'l'
    disabled?: boolean
    ghost?: boolean
    outlined?: boolean
    type?: 'button' | 'reset' | 'submit'
    isLoading?: boolean
    ariaLabel?: string
  }>(),
  { appearance: 'standard', size: 'm', type: 'button' }
)

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const btnClass = computed(() => [
  'icon-btn',
  props.size !== 'm' ? `icon-btn--${props.size}` : null,
  props.appearance !== 'standard' ? `icon-btn--${props.appearance}` : null,
  props.ghost ? 'icon-btn--ghost' : null,
  props.outlined ? 'icon-btn--outlined' : null,
  props.isLoading ? 'icon-btn--loading' : null,
])
</script>

<template>
  <button
    :class="btnClass"
    :disabled="disabled || isLoading"
    :type="type"
    :aria-label="ariaLabel"
    @click="emit('click', $event)"
  >
    <span v-if="isLoading" class="icon-btn__spinner" aria-hidden="true"></span>
    <span v-else class="icon-btn__icon">
      <slot name="icon" />
    </span>
  </button>
</template>

<style>
@reference "@/tailwind.css";

.icon-btn {
  @apply relative inline-flex items-center justify-center w-10 h-10 rounded-m border border-transparent cursor-pointer transition-colors duration-200;
  @apply disabled:opacity-50 disabled:cursor-not-allowed;
  @apply bg-primary text-white hover:bg-primary-dark;
}

.icon-btn--s {
  @apply w-8 h-8;
}

.icon-btn--l {
  @apply w-12 h-12;
}

.icon-btn--accent {
  @apply bg-primary-01-400 text-white hover:bg-primary-01-500;
}

.icon-btn--danger {
  @apply bg-danger-500 text-white hover:bg-danger-600;
}

.icon-btn--inverse {
  @apply bg-white text-primary hover:bg-grey-100;
}

.icon-btn--ghost {
  @apply bg-transparent text-primary border-transparent hover:bg-primary-light;
}

.icon-btn--outlined {
  @apply bg-transparent text-primary border-primary hover:bg-primary-light;
}

.icon-btn--ghost.icon-btn--accent,
.icon-btn--outlined.icon-btn--accent {
  @apply text-primary-01-600 border-primary-01-600 hover:bg-primary-01-100;
}

.icon-btn--ghost.icon-btn--danger,
.icon-btn--outlined.icon-btn--danger {
  @apply text-danger-600 border-danger-600 hover:bg-danger-100;
}

.icon-btn__icon {
  @apply flex items-center justify-center w-5 h-5;
}

.icon-btn--s .icon-btn__icon {
  @apply w-4 h-4;
}

.icon-btn--l .icon-btn__icon {
  @apply w-6 h-6;
}

.icon-btn__spinner {
  @apply absolute w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin;
}
</style>
