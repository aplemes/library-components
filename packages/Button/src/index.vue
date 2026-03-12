<script setup lang="ts">
import { computed, type VNode } from 'vue'

/**
 * Buttons are key interactive elements used to perform actions and can be used as standalone element,
 * or as part of another component. Their appearance depends on the type of action required from the user
 * and the context in which they are used.
 */
const props = withDefaults(
  defineProps<{
    /**
     * Defines the visual style of the button.
     */
    appearance?: 'standard' | 'accent' | 'danger' | 'inverse'
    /**
     * Determines the size of the button.
     */
    size?: 's' | 'm' | 'l'
    /**
     * If `true`, disables the button, making it non-interactive.
     */
    disabled?: boolean
    /**
     * If `true`, applies a "ghost" style to the button, typically a transparent background with a border.
     */
    ghost?: boolean
    /**
     * If `true`, the button gets an outlined style, usually with just the border and no solid background.
     */
    outlined?: boolean
    /**
     * Controls the positioning of an icon in the button.
     */
    iconPosition?: 'left' | 'right' | 'only'
    /**
     * Specifies the button's HTML `type` attribute.
     */
    type?: 'button' | 'reset' | 'submit'
    /**
     * If `true`, a loading state is displayed.
     */
    isLoading?: boolean
  }>(),
  {
    appearance: 'standard',
    size: 'm',
    type: 'button',
  },
)

defineSlots<{
  /**
   * The content displayed in the button.
   */
  default: string
  /**
   * Use this slot to insert an icon for the Button.
   */
  icon?: () => VNode[]
}>()

const classObject = computed(() => {
  return {
    [`btn--${props.appearance}`]: props.appearance && props.appearance !== 'standard',
    [`btn--${props.size}`]: props.size && props.size !== 'm',
    'btn--ghost': props.ghost,
    'btn--outlined': props.outlined,
    'btn--icon-only': props.iconPosition === 'only',
  }
})
</script>

<template>
  <button
    class="btn"
    :class="classObject"
    :disabled="disabled"
    :type="type"
  >
    <span v-if="$slots.icon && iconPosition === 'left' && !isLoading" class="btn__icon">
      <slot name="icon" />
    </span>
    <span
      v-if="isLoading"
      class="btn__icon"
      :style="{ position: 'absolute' }"
    >
      <span class="btn__spinner" aria-hidden="true" />
    </span>
    <span v-if="$slots.icon && iconPosition === 'only'" class="btn__icon">
      <slot name="icon" />
    </span>
    <span
      v-else
      class="btn__label"
      :style="{ visibility: isLoading ? 'hidden' : 'visible' }"
    >
      <slot>Clica aqui v.1.2.0</slot>
    </span>
    <span v-if="$slots.icon && iconPosition === 'right' && !isLoading" class="btn__icon">
      <slot name="icon" />
    </span>
  </button>
</template>

<style>
@reference "@/tailwind.css";

.btn {
  @apply relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-l text-sm font-medium cursor-pointer border border-transparent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed;
  @apply bg-brand text-white hover:bg-brand-dark;
}

.btn--s {
  @apply px-3 py-1 text-xs;
}

.btn--l {
  @apply px-6 py-3 text-base;
}

.btn--accent {
  @apply bg-primary-01-400 text-white hover:bg-primary-01-500;
}

.btn--danger {
  @apply bg-danger-500 text-white hover:bg-danger-600;
}

.btn--inverse {
  @apply bg-white text-primary border-white hover:bg-grey-100;
}

.btn--ghost {
  @apply bg-transparent text-primary border-transparent hover:bg-primary-light;
}

.btn--outlined {
  @apply bg-transparent text-primary border-primary hover:bg-primary-light;
}

.btn--icon-only {
  @apply px-2;
}

.btn__icon {
  @apply flex items-center justify-center w-4 h-4;
}

.btn__spinner {
  @apply block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin;
}

.btn__label {
  @apply inline-block;
}
</style>
