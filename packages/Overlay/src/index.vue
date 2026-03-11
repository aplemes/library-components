<script setup lang="ts">
defineProps<{
  isVisible?: boolean
  dialogLabel?: string
}>()

const emit = defineEmits<{ click: [event: MouseEvent] }>()
</script>

<template>
  <Teleport to="body">
    <div
      class="overlay"
      :class="{ 'overlay--visible': isVisible }"
      @click="emit('click', $event)"
    >
      <div
        role="dialog"
        tabindex="-1"
        :aria-labelledby="dialogLabel"
        class="overlay__content"
        @click.stop
      >
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style>
@reference "@/tailwind.css";

.overlay {
  @apply fixed inset-0 z-50 flex items-center justify-center bg-black/50 opacity-0 pointer-events-none transition-opacity duration-200;
}

.overlay--visible {
  @apply opacity-100 pointer-events-auto;
}

.overlay__content {
  @apply relative z-10;
}
</style>
