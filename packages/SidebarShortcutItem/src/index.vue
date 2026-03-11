<script setup lang="ts">
const props = defineProps<{
  label: string
  href: string
  active?: boolean
}>()
</script>

<template>
  <li
    class="sidebar-shortcut-item"
    :class="{ 'sidebar-shortcut-item--active': active }"
    role="menuitem"
  >
    <a
      :href="href"
      class="sidebar-shortcut-item__link"
      :class="{ 'sidebar-shortcut-item__link--active': active }"
      :aria-label="label"
    >
      <span v-if="$slots.icon" class="sidebar-shortcut-item__icon" aria-hidden="true">
        <slot name="icon" />
      </span>
      <span class="sidebar-shortcut-item__label">{{ label }}</span>
    </a>
  </li>
</template>

<style scoped>
@reference "@/tailwind.css";

.sidebar-shortcut-item {
  @apply list-none;
}

.sidebar-shortcut-item__link {
  @apply flex flex-col items-center gap-1 px-2 py-1 text-xs text-grey-400 rounded transition-colors hover:text-white hover:bg-grey-700 no-underline;
}

.sidebar-shortcut-item__link--active {
  @apply text-primary-01-400;
}

.sidebar-shortcut-item__icon {
  @apply w-5 h-5 flex items-center justify-center;
}

.sidebar-shortcut-item__label {
  @apply truncate max-w-16 text-center;
}
</style>
