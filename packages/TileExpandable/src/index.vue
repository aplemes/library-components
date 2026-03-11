<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    appearance?: 'primary' | 'secondary'
    bordered?: boolean
    trigger?: string
    label?: string
  }>(),
  {
    appearance: 'primary',
    bordered: false,
    label: 'See more',
  },
)

defineSlots<{
  default?: () => any
  details?: () => any
}>()

const open = ref(false)

function toggle() {
  open.value = !open.value
}
</script>

<template>
  <div
    :class="{
      'tile-expandable': true,
      [`tile-expandable--${appearance}`]: appearance !== 'primary',
      'tile-expandable--bordered': bordered,
    }"
  >
    <div class="tile-expandable__header">
      <div class="tile-expandable__body">
        <slot />
      </div>

      <div class="tile-expandable__action">
        <button
          type="button"
          class="tile-expandable__trigger"
          :aria-expanded="open"
          @click="toggle"
        >
          {{ trigger || label }}
          <span class="tile-expandable__chevron" :class="{ 'tile-expandable__chevron--open': open }">▼</span>
        </button>
      </div>
    </div>

    <div
      v-show="open"
      class="tile-expandable__content"
    >
      <slot name="details" />
    </div>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.tile-expandable {
  @apply bg-white rounded-lg p-4;
}

.tile-expandable--bordered {
  @apply border border-grey-300;
}

.tile-expandable--secondary {
  @apply bg-grey-100;
}

.tile-expandable__header {
  @apply flex items-center justify-between gap-4;
}

.tile-expandable__body {
  @apply flex-1;
}

.tile-expandable__action {
  @apply flex-shrink-0;
}

.tile-expandable__trigger {
  @apply flex items-center gap-1 text-sm text-primary font-medium cursor-pointer bg-transparent border-none;
}

.tile-expandable__chevron {
  @apply text-xs transition-transform duration-200;
}

.tile-expandable__chevron--open {
  @apply rotate-180;
}

.tile-expandable__content {
  @apply mt-3 pt-3 border-t border-grey-200;
}
</style>
