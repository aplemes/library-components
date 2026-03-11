<script setup lang="ts">
import { computed, inject, type ComputedRef, type Ref } from 'vue'

const expandedRef = inject<Ref<boolean> | ComputedRef<boolean>>('sidebarExpanded')
const isExpanded = computed(() => expandedRef?.value ?? false)
</script>

<template>
  <header
    class="sidebar-header"
    :class="{
      'sidebar-header--expanded': isExpanded,
      'sidebar-header--collapsed': !isExpanded,
    }"
  >
    <slot />
  </header>
</template>

<style scoped>
@reference "@/tailwind.css";

.sidebar-header {
  @apply flex items-center px-3 py-4 border-b border-grey-700;
}

.sidebar-header--expanded {
  @apply justify-start gap-3;
}

.sidebar-header--collapsed {
  @apply justify-center;
}
</style>
