<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue?: number
    readonly?: boolean
    size?: 's' | 'm' | 'l'
    compact?: boolean
    appearance?: 'standard' | 'accent'
    text?: string
    maxValue?: number
    href?: string
    target?: string
    router?: boolean
  }>(),
  { modelValue: 0, readonly: true, size: 's', compact: false, appearance: 'accent', maxValue: 5, target: '_self' }
)

const emit = defineEmits<{ 'update:modelValue': [value: number] }>()

const hover = ref<number | null>(null)
const displayValue = computed(() => hover.value ?? props.modelValue)
const isReadonly = computed(() => props.readonly || props.compact || !!props.text || !!props.href)
const stars = computed(() => props.compact ? 1 : props.maxValue)

const rootTag = computed(() => {
  if (props.href) return props.router ? 'router-link' : 'a'
  return 'div'
})

const rootProps = computed(() => {
  if (!props.href) return {}
  if (props.router) return { to: props.href }
  return { href: props.href, target: props.target }
})

const getStarType = (index: number): 'full' | 'half' | 'empty' => {
  const val = displayValue.value
  if (props.compact || val >= index + 1) return 'full'
  if (isReadonly.value && val >= index + 0.5) return 'half'
  return 'empty'
}

const onClick = (index: number) => { if (!isReadonly.value) emit('update:modelValue', index + 1) }
const onHover = (index: number) => { if (!isReadonly.value) hover.value = index + 1 }
const clearHover = () => { hover.value = null }

const wrapperClass = computed(() => [
  'star-rating',
  `star-rating--${props.size}`,
  `star-rating--${props.appearance}`,
  !isReadonly.value ? 'star-rating--interactive' : null,
  props.href ? 'star-rating--link' : null,
])
</script>

<template>
  <component :is="rootTag" :class="wrapperClass" v-bind="rootProps">
    <div
      class="star-rating__wrapper"
      :tabindex="isReadonly ? -1 : 0"
      :role="isReadonly ? 'img' : 'slider'"
      :aria-label="`Rating ${displayValue} out of ${stars}`"
      :aria-valuenow="!isReadonly ? modelValue : undefined"
      :aria-valuemin="!isReadonly ? 0 : undefined"
      :aria-valuemax="!isReadonly ? stars : undefined"
      @mouseleave="clearHover"
      @blur="clearHover"
    >
      <button
        v-for="(_, index) in stars"
        :key="index"
        type="button"
        class="star-rating__star"
        :class="[`star-rating__star--${getStarType(index)}`]"
        :tabindex="-1"
        :disabled="isReadonly || undefined"
        @mousemove="onHover(index)"
        @click="onClick(index)"
        :aria-label="`${index + 1} star`"
      >
        <!-- Full star -->
        <svg v-if="getStarType(index) === 'full'" viewBox="0 0 24 24" class="star-rating__icon" aria-hidden="true">
          <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
        <!-- Half star -->
        <svg v-else-if="getStarType(index) === 'half'" viewBox="0 0 24 24" class="star-rating__icon" aria-hidden="true">
          <path fill="currentColor" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
        </svg>
        <!-- Empty star -->
        <svg v-else viewBox="0 0 24 24" class="star-rating__icon" aria-hidden="true">
          <path fill="currentColor" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
        </svg>
      </button>
    </div>
    <span v-if="text || href" class="star-rating__info">{{ text || href }}</span>
  </component>
</template>

<style>
@reference "@/tailwind.css";

.star-rating {
  @apply inline-flex items-center gap-1;
}

.star-rating__wrapper {
  @apply flex gap-0.5;
}

.star-rating__star {
  @apply border-none bg-transparent p-0 cursor-default;
}

.star-rating--interactive .star-rating__star {
  @apply cursor-pointer;
}

.star-rating__icon {
  @apply text-grey-300;
}

.star-rating--s .star-rating__icon { @apply w-4 h-4; }
.star-rating--m .star-rating__icon { @apply w-5 h-5; }
.star-rating--l .star-rating__icon { @apply w-6 h-6; }

.star-rating--accent .star-rating__star--full .star-rating__icon,
.star-rating--accent .star-rating__star--half .star-rating__icon {
  color: var(--color-primary-01-400);
}

.star-rating--standard .star-rating__star--full .star-rating__icon,
.star-rating--standard .star-rating__star--half .star-rating__icon {
  color: var(--color-primary-02-700);
}

.star-rating__text {
  @apply text-sm text-grey-700 ml-1;
}

.star-rating__info {
  @apply text-sm text-grey-700 ml-1;
}

.star-rating--link {
  @apply no-underline text-inherit;
}
</style>
