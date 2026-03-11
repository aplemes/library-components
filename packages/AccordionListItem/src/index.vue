<script setup lang="ts">
import { computed, inject, type ComputedRef, type Ref } from 'vue'

const props = defineProps<{
  id: string
  title: string
  subtitle?: string
  icon?: string
  content?: string
}>()

const openIds = inject<Ref<string[]> | ComputedRef<string[]>>('accordionOpenIds')!
const toggleItem = inject<(id: string) => void>('accordionToggle')!

const open = computed(() => openIds?.value?.includes(props.id) ?? false)
</script>

<template>
  <div class="accordion-item">
    <div class="accordion-item__header">
      <h2 class="accordion-item__title">
        <button
          :id="`accordion-${id}`"
          class="accordion-item__trigger"
          :aria-controls="`content-${id}`"
          :aria-expanded="open"
          @click="toggleItem(id)"
        >
          <span v-if="icon" class="accordion-item__icon" aria-hidden="true">{{ icon }}</span>
          <div class="accordion-item__title-wrapper">
            <span>{{ title }}</span>
            <span v-if="subtitle" class="accordion-item__subtitle">{{ subtitle }}</span>
          </div>
          <span
            class="accordion-item__chevron"
            :class="{ 'accordion-item__chevron--open': open }"
            aria-hidden="true"
          >&#8964;</span>
        </button>
      </h2>
    </div>
    <div
      :id="`content-${id}`"
      class="accordion-item__content"
      :class="{ 'accordion-item__content--open': open }"
      :aria-hidden="!open"
      :aria-labelledby="`accordion-${id}`"
      role="region"
    >
      <div class="accordion-item__body">
        <slot>
          <p v-if="content">{{ content }}</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "@/tailwind.css";

.accordion-item {
  @apply w-full;
}

.accordion-item__title {
  @apply m-0 text-base font-medium;
}

.accordion-item__trigger {
  @apply w-full flex items-center gap-2 px-4 py-3 text-left cursor-pointer bg-transparent border-0 hover:bg-grey-100 transition-colors;
}

.accordion-item__icon {
  @apply flex-shrink-0;
}

.accordion-item__title-wrapper {
  @apply flex-1 flex flex-col;
}

.accordion-item__subtitle {
  @apply text-sm text-grey-600;
}

.accordion-item__chevron {
  @apply flex-shrink-0 text-grey-600 transition-transform duration-200;
}

.accordion-item__chevron--open {
  @apply rotate-180;
}

.accordion-item__content {
  @apply max-h-0 overflow-hidden transition-all duration-300;
}

.accordion-item__content--open {
  @apply max-h-screen;
}

.accordion-item__body {
  @apply px-4 py-3;
}
</style>
