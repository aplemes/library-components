<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    id?: string
    modelValue: number
    compact?: boolean
    totalPages: number
    selectLabel?: string
  }>(),
  {
    compact: false,
    selectLabel: 'Page',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const currentPage = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
  currentPage.value = newVal
})

const pages = computed(() => {
  return Array.from({ length: props.totalPages }, (_, i) => i + 1)
})

const isFirstPage = computed(() => currentPage.value <= 1)
const isLastPage = computed(() => currentPage.value >= props.totalPages)

function goToPage(page: number) {
  if (page < 1 || page > props.totalPages) return
  currentPage.value = page
  emit('update:modelValue', page)
}

function previous() {
  goToPage(currentPage.value - 1)
}

function next() {
  goToPage(currentPage.value + 1)
}

function onSelectChange(event: Event) {
  const value = Number((event.target as HTMLSelectElement).value)
  goToPage(value)
}
</script>

<template>
  <nav class="pagination" role="navigation" aria-label="Pagination">
    <button
      type="button"
      class="pagination__button pagination__button--prev"
      :disabled="isFirstPage"
      aria-label="Previous page"
      @click="previous"
    >
      ‹
    </button>

    <template v-if="!compact">
      <button
        v-for="page in pages"
        :key="page"
        type="button"
        class="pagination__button"
        :class="{ 'pagination__button--active': currentPage === page }"
        :aria-current="currentPage === page ? 'page' : undefined"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>
    </template>

    <template v-else>
      <select
        :id="id"
        class="pagination__select"
        :aria-label="selectLabel"
        :value="currentPage"
        @change="onSelectChange"
      >
        <option v-for="page in pages" :key="page" :value="page">
          Page {{ page }} of {{ totalPages }}
        </option>
      </select>
    </template>

    <button
      type="button"
      class="pagination__button pagination__button--next"
      :disabled="isLastPage"
      aria-label="Next page"
      @click="next"
    >
      ›
    </button>
  </nav>
</template>

<style>
@reference "@/tailwind.css";

.pagination {
  @apply flex items-center gap-1;
}

.pagination__button {
  @apply flex items-center justify-center min-w-8 h-8 px-2 text-sm font-medium rounded-md cursor-pointer border border-grey-200 bg-white text-grey-700 transition-colors duration-200 hover:bg-grey-100 disabled:opacity-50 disabled:cursor-not-allowed;
}

.pagination__button--active {
  @apply bg-primary text-white border-primary hover:bg-primary-dark;
}

.pagination__select {
  @apply px-2 py-1 text-sm border border-grey-200 rounded-md cursor-pointer bg-white text-grey-700;
}
</style>
