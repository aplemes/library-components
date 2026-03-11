<script setup lang="ts">
import type { VNode } from 'vue'

/**
 * An overlay is a semi-transparent layer that appears on top of the main content, typically used to dim the background and focus user attention on a specific element.
 */
defineProps<{
  /**
   * Controls the visibility of the overlay.
   */
  isVisible?: boolean
  /**
   * Accessible label for the overlay dialog.
   */
  dialogLabel?: string
}>()

defineSlots<{
  /**
   * Use this slot to insert a centered content inside the overlay.
   */
  default?: () => VNode[]
}>()
</script>

<template>
  <div class="overlay" :class="{ 'is-visible': isVisible }">
    <div
      role="dialog"
      tabindex="-1"
      :aria-labelledby="dialogLabel"
    >
      <slot />
    </div>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.overlay {
  @apply fixed inset-0 z-50 flex items-center justify-center bg-black/50 opacity-0 pointer-events-none transition-opacity duration-200;
}

.overlay.is-visible {
  @apply opacity-100 pointer-events-auto;
}
</style>
