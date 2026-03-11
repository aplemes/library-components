<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    steps: number
    modelValue: number
    action?: boolean
    label?: string
    player?: boolean
  }>(),
  {
    action: false,
    player: false,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: number]
  action: [direction: 'previous' | 'next']
}>()

const active = computed({
  get() {
    return props.modelValue
  },
  set(value: number) {
    emit('update:modelValue', value)
  },
})

function setActiveStep(index: number) {
  active.value = index
}

function previous() {
  emit('action', 'previous')
  if (active.value > 0) {
    active.value = active.value - 1
  }
}

function next() {
  emit('action', 'next')
  if (active.value < props.steps - 1) {
    active.value = active.value + 1
  }
}
</script>

<template>
  <div class="navigation-indicator" role="navigation" :aria-label="label || 'Navigation steps'">
    <button
      v-if="action"
      type="button"
      class="navigation-indicator__arrow navigation-indicator__arrow--prev"
      aria-label="Previous"
      :disabled="modelValue <= 0"
      @click="previous"
    >
      ‹
    </button>

    <ul class="navigation-indicator__list">
      <li
        v-for="(_s, index) in steps"
        :key="index"
        class="navigation-indicator__item"
      >
        <button
          type="button"
          class="navigation-indicator__dot"
          :class="{ 'navigation-indicator__dot--active': active === index }"
          :aria-current="active === index ? 'step' : undefined"
          aria-label="Navigation step"
          @click="setActiveStep(index)"
        />
      </li>
    </ul>

    <button
      v-if="action"
      type="button"
      class="navigation-indicator__arrow navigation-indicator__arrow--next"
      aria-label="Next"
      :disabled="modelValue >= steps - 1"
      @click="next"
    >
      ›
    </button>

    <div v-if="player" class="navigation-indicator__player">
      <button type="button" class="navigation-indicator__play" aria-label="Play/Pause">
        ▶
      </button>
      <span v-if="label" class="navigation-indicator__label">{{ label }}</span>
    </div>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.navigation-indicator {
  @apply flex items-center gap-2;
}

.navigation-indicator__list {
  @apply flex items-center gap-2 list-none m-0 p-0;
}

.navigation-indicator__item {
  @apply flex;
}

.navigation-indicator__dot {
  @apply w-2 h-2 rounded-full bg-grey-300 cursor-pointer border-none transition-colors duration-200 hover:bg-grey-500 p-0;
}

.navigation-indicator__dot--active {
  @apply bg-primary w-4;
}

.navigation-indicator__arrow {
  @apply flex items-center justify-center w-8 h-8 rounded-full border border-grey-300 bg-white cursor-pointer text-grey-600 hover:bg-grey-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg;
}

.navigation-indicator__player {
  @apply flex items-center gap-2 ml-2;
}

.navigation-indicator__play {
  @apply flex items-center justify-center w-6 h-6 text-primary cursor-pointer border-none bg-transparent;
}

.navigation-indicator__label {
  @apply text-sm text-grey-600;
}
</style>
