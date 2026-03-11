<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    appearance?: 'primary' | 'secondary' | 'bordered'
    bordered?: boolean
  }>(),
  {
    appearance: 'primary',
    bordered: false,
  },
)

const slots = defineSlots<{
  default?: () => any
  action?: () => any
  details?: () => any
}>()
</script>

<template>
  <div
    :class="{
      'tile': true,
      [`tile--${appearance}`]: appearance !== 'primary',
      'tile--bordered': bordered,
    }"
  >
    <div class="tile__header">
      <div class="tile__body">
        <slot />
      </div>

      <div v-if="slots.action" class="tile__action">
        <slot name="action" />
      </div>
    </div>

    <div v-if="slots.details" class="tile__content">
      <slot name="details" />
    </div>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.tile {
  @apply bg-white rounded-lg p-4;
}

.tile--bordered {
  @apply border border-grey-300;
}

.tile--secondary {
  @apply bg-grey-100;
}

.tile__header {
  @apply flex items-start justify-between gap-4;
}

.tile__body {
  @apply flex-1;
}

.tile__action {
  @apply flex-shrink-0;
}

.tile__content {
  @apply mt-3 pt-3 border-t border-grey-200;
}
</style>
