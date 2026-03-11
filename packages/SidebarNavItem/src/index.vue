<script setup lang="ts">
const props = defineProps<{
  label: string
  href?: string
  active?: boolean
  disabled?: boolean
}>()
</script>

<template>
  <li
    class="sidebar-nav-item"
    :class="{
      'sidebar-nav-item--active': active,
      'sidebar-nav-item--disabled': disabled,
    }"
  >
    <component
      :is="href ? 'a' : 'button'"
      :href="href"
      class="sidebar-nav-item__link"
      :class="{
        'sidebar-nav-item__link--active': active,
        'sidebar-nav-item__link--disabled': disabled,
      }"
      :aria-label="label"
      :disabled="!href && disabled"
    >
      <span v-if="$slots.icon" class="sidebar-nav-item__icon" aria-hidden="true">
        <slot name="icon" />
      </span>
      <span class="sidebar-nav-item__label">{{ label }}</span>
    </component>
  </li>
</template>

<style scoped>
@reference "@/tailwind.css";

.sidebar-nav-item {
  @apply list-none;
}

.sidebar-nav-item__link {
  @apply flex items-center gap-3 px-3 py-2 text-sm text-grey-300 rounded cursor-pointer bg-transparent border-0 w-full text-left transition-colors hover:bg-grey-700 hover:text-white;
}

.sidebar-nav-item__link--active {
  @apply bg-primary text-white hover:bg-primary-dark;
}

.sidebar-nav-item__link--disabled {
  @apply opacity-50 cursor-not-allowed hover:bg-transparent hover:text-grey-300;
}

.sidebar-nav-item__icon {
  @apply flex-shrink-0 w-5 h-5 flex items-center justify-center;
}

.sidebar-nav-item__label {
  @apply flex-1 truncate;
}
</style>
