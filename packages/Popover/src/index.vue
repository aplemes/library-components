<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    appearance?: 'light' | 'dark'
    position?: 'top' | 'bottom' | 'left' | 'right'
    pointer?: boolean
    size?: 's' | 'm' | 'l'
    closable?: boolean
    title?: string
    description?: string
  }>(),
  {
    appearance: 'light',
    position: 'bottom',
    pointer: false,
    size: 's',
    closable: false,
  },
)

defineSlots<{
  default?: () => any
  activator?: () => any
  footer?: () => any
}>()

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}

function close() {
  isOpen.value = false
}
</script>

<template>
  <div class="popover-wrapper">
    <div class="popover__activator" @click="toggle">
      <slot name="activator" />
    </div>

    <div
      v-if="isOpen"
      class="popover"
      :class="{
        [`popover--${appearance}`]: true,
        [`popover--${position}`]: true,
        [`popover--${size}`]: true,
        'popover--pointer': pointer,
      }"
      role="tooltip"
    >
      <div class="popover__content">
        <div v-if="title || description" class="popover__headings">
          <p v-if="title" class="popover__title">{{ title }}</p>
          <p v-if="description" class="popover__description">{{ description }}</p>
        </div>

        <div v-if="$slots.default">
          <slot />
        </div>

        <button
          v-if="closable"
          type="button"
          class="popover__close"
          aria-label="Close"
          @click="close"
        >
          ✕
        </button>

        <footer v-if="$slots.footer" class="popover__footer">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.popover-wrapper {
  @apply relative inline-block;
}

.popover__activator {
  @apply cursor-pointer;
}

.popover {
  @apply absolute z-50 rounded-lg shadow-lg border;
}

.popover--light {
  @apply bg-white border-grey-200 text-grey-800;
}

.popover--dark {
  @apply bg-grey-900 border-grey-700 text-white;
}

.popover--s {
  @apply min-w-40 max-w-60;
}

.popover--m {
  @apply min-w-60 max-w-80;
}

.popover--l {
  @apply min-w-80 max-w-96;
}

.popover--bottom {
  @apply top-full left-1/2 -translate-x-1/2 mt-2;
}

.popover--top {
  @apply bottom-full left-1/2 -translate-x-1/2 mb-2;
}

.popover--left {
  @apply right-full top-1/2 -translate-y-1/2 mr-2;
}

.popover--right {
  @apply left-full top-1/2 -translate-y-1/2 ml-2;
}

.popover--pointer.popover--bottom::before {
  content: '';
  @apply absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid white;
}

.popover--pointer.popover--top::before {
  content: '';
  @apply absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid white;
}

.popover__content {
  @apply p-4 relative;
}

.popover__headings {
  @apply mb-2;
}

.popover__title {
  @apply text-sm font-semibold m-0 mb-1;
}

.popover__description {
  @apply text-sm m-0;
}

.popover__close {
  @apply absolute top-2 right-2 text-grey-400 hover:text-grey-600 cursor-pointer border-none bg-transparent text-sm;
}

.popover__footer {
  @apply mt-3 pt-3 border-t border-grey-200 flex gap-2;
}
</style>
