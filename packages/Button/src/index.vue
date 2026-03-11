<script setup lang="ts">
import { computed, type VNode } from 'vue'

/**
 * Buttons are key interactive elements used to perform actions.
 * Their appearance depends on the type of action required from the user.
 */
const props = withDefaults(
  defineProps<{
    /**
     * The text label for the button (slot content takes priority when provided).
     */
    label?: string
    /**
     * Visual style variant (legacy prop; prefer appearance).
     */
    variant?: 'primary' | 'secondary' | 'ghost'
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
     * If `true`, applies a ghost style to the button.
     */
    ghost?: boolean
    /**
     * If `true`, the button gets an outlined style.
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
   * The content displayed in the button (takes priority over the `label` prop).
   */
  default?: () => VNode[]
  /**
   * Use this slot to insert an icon for the Button.
   */
  icon?: () => VNode[]
}>()

defineEmits<{
  click: [event: MouseEvent]
}>()

const effectiveVariant = computed(() => {
  if (props.variant) return props.variant
  if (props.ghost || props.outlined) return 'ghost'
  return 'primary'
})

const classes = computed(() => [
  'btn',
  `btn--${effectiveVariant.value}`,
  props.size !== 'm' ? `btn--${props.size}` : null,
  props.appearance && props.appearance !== 'standard' ? `btn--${props.appearance}` : null,
  props.iconPosition === 'only' ? 'btn--icon-only' : null,
  props.isLoading ? 'btn--loading' : null,
])
</script>

<template>
  <button
    :class="classes"
    :disabled="disabled || isLoading"
    :type="type"
    @click="$emit('click', $event)"
  >
    <span v-if="$slots.icon && iconPosition === 'left' && !isLoading" class="btn__icon">
      <slot name="icon" />
    </span>

    <span v-if="isLoading" class="btn__spinner" aria-hidden="true" />

    <template v-if="iconPosition === 'only'">
      <span class="btn__icon">
        <slot name="icon" />
      </span>
    </template>
    <template v-else>
      <span class="btn__label" :class="{ 'btn__label--hidden': isLoading }">
        <slot>{{ label }}</slot>
      </span>
    </template>

    <span v-if="$slots.icon && iconPosition === 'right' && !isLoading" class="btn__icon">
      <slot name="icon" />
    </span>
  </button>
</template>

<style>
@reference "@/tailwind.css";

.btn {
  @apply relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-l text-sm font-medium cursor-pointer border border-transparent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn--s {
  @apply px-3 py-1 text-xs;
}

.btn--l {
  @apply px-6 py-3 text-base;
}

.btn--primary {
  @apply bg-primary text-white hover:bg-primary-dark;
}

.btn--secondary {
  @apply bg-transparent text-primary border-primary hover:bg-primary-light;
}

.btn--ghost {
  @apply bg-transparent text-primary border-transparent hover:bg-primary-light;
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

.btn--icon-only {
  @apply px-2;
}

.btn__icon {
  @apply flex items-center justify-center w-4 h-4;
}

.btn__spinner {
  @apply absolute w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin;
}

.btn__label--hidden {
  visibility: hidden;
}
</style>
