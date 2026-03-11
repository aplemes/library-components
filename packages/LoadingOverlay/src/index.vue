<script setup lang="ts">
withDefaults(
  defineProps<{
    isVisible?: boolean
    text?: string
  }>(),
  {
    isVisible: false,
  },
)
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isVisible"
      class="loading-overlay"
      role="dialog"
      aria-modal="true"
      :aria-label="text || 'Loading'"
    >
      <div class="loading-overlay__content">
        <div class="loading-overlay__spinner" aria-hidden="true" />
        <p v-if="text" class="loading-overlay__text">{{ text }}</p>
      </div>
    </div>
  </Teleport>
</template>

<style>
@reference "@/tailwind.css";

.loading-overlay {
  @apply fixed inset-0 z-50 flex items-center justify-center bg-grey-900/50;
}

.loading-overlay__content {
  @apply flex flex-col items-center gap-4 p-8 bg-white rounded-xl shadow-lg;
}

.loading-overlay__spinner {
  @apply w-10 h-10 border-4 border-grey-200 border-t-primary rounded-full animate-spin;
}

.loading-overlay__text {
  @apply text-sm font-medium text-grey-700 m-0;
}
</style>
