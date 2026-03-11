<script setup lang="ts">
import { computed, type VNode } from 'vue'

/**
 * A divider is a visual element used to separate content or sections within an interface.
 */
const props = withDefaults(
  defineProps<{
    /**
     * Determines the orientation of the divider.
     */
    orientation?: 'horizontal' | 'vertical'
    /**
     * Determines the appearance of the divider.
     */
    appearance?: 'primary' | 'secondary' | 'tertiary' | 'inverse'
    /**
     * Determines the size (thickness) of the divider.
     */
    size?: 's' | 'm' | 'l'
  }>(),
  { orientation: 'horizontal', appearance: 'primary', size: 's' }
)

defineSlots<{
  /**
   * Use this slot to insert content that needs a divider (e.g. "OR" label).
   */
  default?: () => VNode[]
}>()

const dividerLineClass = computed(() => [
  'divider__line',
  `divider__line--${props.orientation}`,
  props.appearance !== 'primary' ? `divider__line--${props.appearance}` : null,
  props.size !== 's' ? `divider__line--${props.size}` : null,
])
</script>

<template>
  <div class="divider">
    <div :class="dividerLineClass"></div>
    <slot />
  </div>
</template>

<style>
@reference "@/tailwind.css";

.divider {
  @apply flex items-center;
}

.divider__line--horizontal {
  @apply w-full border-t;
}

.divider__line--vertical {
  @apply h-full border-l self-stretch;
}

.divider__line {
  border-color: var(--color-grey-200);
}

.divider__line--secondary {
  border-color: var(--color-grey-100);
}

.divider__line--tertiary {
  border-color: var(--color-grey-300);
}

.divider__line--inverse {
  border-color: rgba(255,255,255,0.3);
}

.divider__line--m {
  border-width: 2px;
}

.divider__line--l {
  border-width: 3px;
}
</style>
