<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    shadow?: boolean
  }>(),
  {
    shadow: false,
  }
)

const classes = computed(() => ({
  'action-bottom-bar': true,
  'action-bottom-bar--shadow': props.shadow,
}))
</script>

<template>
  <div :class="classes">
    <div class="action-bottom-bar__left">
      <slot name="left" />
    </div>
    <div class="action-bottom-bar__right">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
@reference "@/tailwind.css";

.action-bottom-bar {
  @apply fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 bg-white border-t border-neutral-200;
}

.action-bottom-bar--shadow {
  @apply shadow-[0_-4px_12px_rgba(0,0,0,0.08)];
}

.action-bottom-bar__left {
  @apply flex items-center gap-3;
}

.action-bottom-bar__right {
  @apply flex items-center gap-3;
}
</style>
