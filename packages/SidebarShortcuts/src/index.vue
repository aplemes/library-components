<script setup lang="ts">
</script>

<template>
  <section class="sidebar-shortcuts">
    <nav role="navigation" aria-label="shortcut items">
      <ul class="sidebar-shortcuts__list" role="menu">
        <slot />
      </ul>
    </nav>
  </section>
</template>

<style scoped>
@reference "@/tailwind.css";

.sidebar-shortcuts {
  @apply px-2 py-3 border-b border-grey-700;
}

.sidebar-shortcuts__list {
  @apply list-none m-0 p-0 flex flex-wrap gap-2;
}
</style>
