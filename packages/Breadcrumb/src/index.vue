<script setup lang="ts">
import { computed } from 'vue'

type BreadcrumbLink = {
  label: string
  href: string
  current?: boolean
}

const props = withDefaults(
  defineProps<{
    appearance?: 'light' | 'dark'
    links: BreadcrumbLink[]
  }>(),
  {
    appearance: 'light',
  }
)

const navClasses = computed(() => ({
  'breadcrumb--dark': props.appearance === 'dark',
}))

function isLast(index: number): boolean {
  return index === props.links.length - 1
}
</script>

<template>
  <nav class="breadcrumb" :class="navClasses" aria-label="Breadcrumb">
    <ol class="breadcrumb__list">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="breadcrumb__item"
      >
        <a
          class="breadcrumb__link"
          :class="{ 'breadcrumb__link--current': isLast(index) }"
          :href="link.href"
          :aria-current="isLast(index) ? 'page' : undefined"
        >
          {{ link.label }}
        </a>
        <span
          v-if="!isLast(index)"
          class="breadcrumb__separator"
          aria-hidden="true"
        >/</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
@reference "@/tailwind.css";

.breadcrumb {
  @apply w-full;
}

.breadcrumb__list {
  @apply flex flex-wrap items-center gap-1 list-none p-0 m-0;
}

.breadcrumb__item {
  @apply flex items-center gap-1;
}

.breadcrumb__link {
  @apply text-sm text-primary hover:underline;
}

.breadcrumb__link--current {
  @apply text-neutral-600 font-medium pointer-events-none no-underline;
}

.breadcrumb--dark .breadcrumb__link {
  @apply text-white;
}

.breadcrumb--dark .breadcrumb__link--current {
  @apply text-neutral-200;
}

.breadcrumb__separator {
  @apply text-neutral-400 text-sm select-none;
}

.breadcrumb--dark .breadcrumb__separator {
  @apply text-neutral-300;
}
</style>
