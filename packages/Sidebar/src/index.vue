<script setup lang="ts">
import { computed, provide } from 'vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
}>()

const expanded = computed({
  get: () => props.modelValue,
  set: (v: boolean) => emit('update:modelValue', v),
})

function toggleSidebar() {
  expanded.value = !expanded.value
}

provide('sidebarExpanded', expanded)
provide('sidebarToggle', toggleSidebar)

const classes = computed(() => [
  'sidebar',
  expanded.value ? 'sidebar--expanded' : 'sidebar--collapsed',
])
</script>

<template>
  <aside :class="classes">
    <div class="sidebar__wrapper">
      <slot name="header" />
      <slot name="shortcuts" />
      <section class="sidebar__container">
        <nav class="sidebar__menu" role="navigation" aria-label="navigation items">
          <ul class="sidebar__list">
            <slot name="nav" />
          </ul>
        </nav>
      </section>
      <slot name="footer" />
    </div>
    <button
      class="sidebar__close-btn"
      aria-label="Close sidebar"
      @click="emit('close')"
    >
      ✕
    </button>
  </aside>
</template>

<style scoped>
@reference "@/tailwind.css";

.sidebar {
  @apply relative flex flex-col h-full bg-grey-900 text-white transition-all duration-300;
}

.sidebar--expanded {
  @apply w-64;
}

.sidebar--collapsed {
  @apply w-16;
}

.sidebar__wrapper {
  @apply flex flex-col flex-1 overflow-hidden;
}

.sidebar__container {
  @apply flex-1 overflow-y-auto;
}

.sidebar__menu {
  @apply p-2;
}

.sidebar__list {
  @apply list-none m-0 p-0 flex flex-col gap-1;
}

.sidebar__close-btn {
  @apply absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-transparent border-0 cursor-pointer text-grey-300 hover:text-white rounded;
}
</style>
