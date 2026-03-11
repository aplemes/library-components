<script setup lang="ts">
import { computed, type VNode } from 'vue'

/**
 * An avatar is a graphical representation of a user, entity, or group,
 * commonly displayed as an image, initials, or an icon.
 */
const props = withDefaults(
  defineProps<{
    /**
     * Allows to define the avatar size.
     */
    size?: 's' | 'm' | 'l'
  }>(),
  { size: 's' }
)

const avatarClass = computed(() => [
  'avatar',
  props.size !== 's' ? `avatar--${props.size}` : null,
])

defineSlots<{
  /**
   * Use this slot to insert the image, icon or initials of the avatar.
   */
  default: VNode
}>()
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
