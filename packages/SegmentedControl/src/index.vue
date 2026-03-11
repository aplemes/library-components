<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue?: string | number
    full?: boolean
    size?: 's' | 'm'
    segments: Array<{
      id?: string | number
      label: string
      disabled?: boolean
    }>
  }>(),
  {
    modelValue: 0,
    size: 's',
    full: false,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string | number | undefined]
}>()

const currentValue = ref<string | number | undefined>(props.modelValue)

watch(() => props.modelValue, (newVal) => {
  currentValue.value = newVal
})

const classes = computed(() => ({
  'segmented-control': true,
  'segmented-control--full': props.full,
  [`segmented-control--${props.size}`]: props.size !== 's',
}))

function isSelected(index: number, id?: string | number): boolean {
  const value = typeof props.modelValue === 'number' ? index : id
  return currentValue.value === value
}

function onClickSegment(index: number, id?: string | number, disabled?: boolean) {
  if (disabled) return
  const value = typeof props.modelValue === 'number' ? index : id
  if (value !== currentValue.value) {
    currentValue.value = value
    emit('update:modelValue', value)
  }
}
</script>

<template>
  <div :class="classes" role="radiogroup">
    <button
      v-for="(segment, index) in segments"
      :key="`segment-${index}`"
      type="button"
      class="segmented-control__segment"
      :class="{
        'segmented-control__segment--selected': isSelected(index, segment.id),
        'segmented-control__segment--disabled': segment.disabled,
      }"
      :aria-checked="isSelected(index, segment.id)"
      :disabled="segment.disabled"
      role="radio"
      @click="onClickSegment(index, segment.id, segment.disabled)"
    >
      {{ segment.label }}
    </button>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.segmented-control {
  @apply inline-flex items-center rounded-lg bg-grey-100 p-1 gap-1;
}

.segmented-control--full {
  @apply flex w-full;
}

.segmented-control--full .segmented-control__segment {
  @apply flex-1;
}

.segmented-control__segment {
  @apply px-3 py-1.5 text-sm font-medium rounded-md cursor-pointer border-none bg-transparent text-grey-600 transition-colors duration-200 hover:text-grey-800;
}

.segmented-control--m .segmented-control__segment {
  @apply px-4 py-2 text-base;
}

.segmented-control__segment--selected {
  @apply bg-white text-primary shadow-sm;
}

.segmented-control__segment--disabled {
  @apply opacity-50 cursor-not-allowed hover:text-grey-600;
}
</style>
