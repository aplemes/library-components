<script setup lang="ts">
import { computed, inject, type ComputedRef, type Ref } from 'vue'

const expandedRef = inject<Ref<boolean> | ComputedRef<boolean>>('sidebarExpanded')
const isExpanded = computed(() => expandedRef?.value ?? false)
</script>

<template>
  <footer
    class="sidebar-footer"
    :class="{
      'sidebar-footer--expanded': isExpanded,
      'sidebar-footer--collapsed': !isExpanded,
    }"
  >
    <div class="sidebar-footer__divider" />
    <div class="sidebar-footer__content">
      <slot />
    </div>
  </footer>
</template>

<style scoped>
@reference "@/tailwind.css";

.sidebar-footer {
  @apply border-t border-grey-700 mt-auto;
}

.sidebar-footer__divider {
  @apply hidden;
}

.sidebar-footer__content {
  @apply p-3;
}
</style>
