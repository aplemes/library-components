<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    id: string
    text: string
    position?: 'top' | 'bottom' | 'left' | 'right'
    pointer?: boolean
    standalone?: boolean
  }>(),
  {
    position: 'top',
    pointer: true,
    standalone: false,
  },
)

defineSlots<{
  default?: () => any
}>()

const classes = computed(() => ({
  'tooltip': true,
  [`tooltip--${props.position}`]: true,
  'tooltip--no-pointer': !props.pointer,
  'tooltip--standalone': props.standalone,
}))
</script>

<template>
  <div :class="classes" :aria-describedby="id">
    <slot />
    <span
      :id="id"
      class="tooltip__content"
      role="tooltip"
    >
      {{ text }}
    </span>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.tooltip {
  @apply relative inline-block;
}

.tooltip__content {
  @apply absolute z-50 px-2 py-1 text-xs text-white bg-grey-800 rounded whitespace-nowrap opacity-0 pointer-events-none transition-opacity duration-200;
}

/* Show on hover/focus */
.tooltip:hover .tooltip__content,
.tooltip:focus-within .tooltip__content {
  @apply opacity-100;
}

/* Standalone: always visible */
.tooltip--standalone .tooltip__content {
  @apply opacity-100;
}

/* Positioning */
.tooltip--top .tooltip__content {
  @apply bottom-full left-1/2 -translate-x-1/2 mb-1;
}

.tooltip--bottom .tooltip__content {
  @apply top-full left-1/2 -translate-x-1/2 mt-1;
}

.tooltip--left .tooltip__content {
  @apply right-full top-1/2 -translate-y-1/2 mr-1;
}

.tooltip--right .tooltip__content {
  @apply left-full top-1/2 -translate-y-1/2 ml-1;
}

/* Pointer/arrow */
.tooltip--top:not(.tooltip--no-pointer) .tooltip__content::after {
  content: '';
  @apply absolute top-full left-1/2 -translate-x-1/2 w-0 h-0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #333333;
}

.tooltip--bottom:not(.tooltip--no-pointer) .tooltip__content::after {
  content: '';
  @apply absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #333333;
}
</style>
