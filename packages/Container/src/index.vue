<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    fluid?: boolean
  }>(),
  {
    fluid: false,
  }
)

const classes = computed(() => ({
  'layout-container': true,
  'layout-container--fluid': props.fluid,
}))
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<style scoped>
@reference "@/tailwind.css";

.layout-container {
  @apply w-full mx-auto px-4 max-w-7xl;
}

.layout-container--fluid {
  @apply max-w-none;
}
</style>
