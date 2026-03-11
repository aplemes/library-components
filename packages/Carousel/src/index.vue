<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    previousButtonAriaLabel?: string
    nextButtonAriaLabel?: string
  }>(),
  {
    previousButtonAriaLabel: 'Previous',
    nextButtonAriaLabel: 'Next',
  },
)

const slots = defineSlots<{
  header?: () => unknown
  default?: () => unknown[]
}>()

const currentSlide = ref(0)

const slideCount = computed(() => {
  const defaultSlots = slots.default?.()
  return defaultSlots?.length ?? 0
})

function goPrevious() {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

function goNext() {
  if (currentSlide.value < slideCount.value - 1) {
    currentSlide.value++
  }
}

const isFirst = computed(() => currentSlide.value === 0)
const isLast = computed(() => currentSlide.value >= slideCount.value - 1)
</script>

<template>
  <div class="carousel" role="group" aria-roledescription="carousel">
    <div class="carousel__header">
      <div v-if="$slots.header" class="carousel__headings">
        <slot name="header" />
      </div>
      <div class="carousel__controls">
        <button
          class="carousel__btn carousel__btn--prev"
          :aria-label="previousButtonAriaLabel"
          :disabled="isFirst"
          @click="goPrevious"
        >
          &#8249;
        </button>
        <span class="carousel__indicator" aria-live="polite">
          {{ currentSlide + 1 }} / {{ slideCount }}
        </span>
        <button
          class="carousel__btn carousel__btn--next"
          :aria-label="nextButtonAriaLabel"
          :disabled="isLast"
          @click="goNext"
        >
          &#8250;
        </button>
      </div>
    </div>
    <div class="carousel__content">
      <template v-for="(child, index) in $slots.default?.()" :key="`slide-${index}`">
        <div
          class="carousel__slide"
          :class="{ 'carousel__slide--active': index === currentSlide }"
          :aria-hidden="index !== currentSlide"
        >
          <component :is="child" />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
@reference "@/tailwind.css";

.carousel {
  @apply w-full overflow-hidden;
}

.carousel__header {
  @apply flex items-center justify-between gap-4 mb-4;
}

.carousel__headings {
  @apply flex-1;
}

.carousel__controls {
  @apply flex items-center gap-2;
}

.carousel__btn {
  @apply w-8 h-8 flex items-center justify-center text-xl border border-grey-300 rounded cursor-pointer bg-white hover:bg-grey-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors;
}

.carousel__indicator {
  @apply text-sm text-grey-600 min-w-12 text-center;
}

.carousel__content {
  @apply relative;
}

.carousel__slide {
  @apply hidden;
}

.carousel__slide--active {
  @apply block;
}
</style>
