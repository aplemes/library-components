<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  label: string
  active?: boolean
}>()

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <li
    class="sidebar-expandable-item"
    :class="{ 'sidebar-expandable-item--active': active }"
  >
    <button
      class="sidebar-expandable-item__trigger"
      :aria-expanded="isOpen"
      :aria-label="label"
      @click="toggle"
    >
      <span v-if="$slots.icon" class="sidebar-expandable-item__icon" aria-hidden="true">
        <slot name="icon" />
      </span>
      <span class="sidebar-expandable-item__label">{{ label }}</span>
      <span
        class="sidebar-expandable-item__chevron"
        :class="{ 'sidebar-expandable-item__chevron--open': isOpen }"
        aria-hidden="true"
      >&#8964;</span>
    </button>
    <ul v-if="isOpen" class="sidebar-expandable-item__sublist">
      <slot />
    </ul>
  </li>
</template>

<style scoped>
@reference "@/tailwind.css";

.sidebar-expandable-item {
  @apply list-none;
}

.sidebar-expandable-item__trigger {
  @apply flex items-center gap-3 px-3 py-2 text-sm text-grey-300 rounded cursor-pointer bg-transparent border-0 w-full text-left transition-colors hover:bg-grey-700 hover:text-white;
}

.sidebar-expandable-item--active .sidebar-expandable-item__trigger {
  @apply text-white;
}

.sidebar-expandable-item__icon {
  @apply flex-shrink-0 w-5 h-5 flex items-center justify-center;
}

.sidebar-expandable-item__label {
  @apply flex-1 truncate;
}

.sidebar-expandable-item__chevron {
  @apply flex-shrink-0 transition-transform duration-200;
}

.sidebar-expandable-item__chevron--open {
  @apply rotate-180;
}

.sidebar-expandable-item__sublist {
  @apply list-none m-0 p-0 pl-4 flex flex-col gap-1;
}
</style>
