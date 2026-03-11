<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    orientation?: 'horizontal' | 'vertical'
    appearance?: 'primary' | 'secondary' | 'tertiary' | 'inverse'
    size?: 's' | 'm' | 'l'
  }>(),
  { orientation: 'horizontal', appearance: 'primary', size: 's' }
)

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
