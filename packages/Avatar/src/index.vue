<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    size?: 's' | 'm' | 'l'
  }>(),
  { size: 's' }
)

const avatarClass = computed(() => [
  'avatar',
  props.size !== 's' ? `avatar--${props.size}` : null,
])
</script>

<template>
  <span :class="avatarClass">
    <slot />
  </span>
</template>

<style>
@reference "@/tailwind.css";

.avatar {
  @apply inline-flex items-center justify-center w-8 h-8 rounded-full bg-grey-100 text-grey-700 text-sm font-medium overflow-hidden select-none;
}

.avatar--m {
  @apply w-10 h-10 text-base;
}

.avatar--l {
  @apply w-12 h-12 text-lg;
}
</style>
