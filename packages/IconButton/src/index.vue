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
     * Defines the visual style of the icon button.
     */
    appearance?: 'standard' | 'accent' | 'danger' | 'inverse'
    /**
     * Determines the size of the icon button.
     */
    size?: 's' | 'm' | 'l'
    /**
     * If `true`, disables the icon button, making it non-interactive.
     */
    disabled?: boolean
    /**
     * If `true`, applies a "ghost" style to the icon button.
     */
    ghost?: boolean
    /**
     * If `true`, the icon button gets an outlined style.
     */
    outlined?: boolean
    /**
     * Specifies the button's HTML `type` attribute.
     */
    type?: 'button' | 'reset' | 'submit'
    /**
     * If `true`, a loading state is displayed.
     */
    isLoading?: boolean
  }>(),
  { appearance: 'standard', size: 'm', type: 'button' }
)

defineSlots<{
  /**
   * Use this slot to insert an icon for the Button.
   */
  icon: () => VNode[]
}>()

const classObject = computed(() => {
  return {
    [`icon-btn--${props.appearance}`]: props.appearance && props.appearance !== 'standard',
    [`icon-btn--${props.size}`]: props.size && props.size !== 'm',
    'icon-btn--ghost': props.ghost,
    'icon-btn--outlined': props.outlined,
  }
})
</script>

<template>
  <button
    class="icon-btn"
    :class="classObject"
    :disabled="disabled"
    :type="type"
  >
    <span
      v-if="isLoading"
      class="icon-btn__icon"
      :style="{ position: 'absolute' }"
    >
      <span class="icon-btn__spinner" aria-hidden="true" />
    </span>
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
