<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    id: string
    name?: string
    modelValue?: number
    isInvalid?: boolean
    disabled?: boolean
    size?: 's' | 'm'
    min?: number
    max?: number
    step?: number
    readonly?: boolean
    incrementLabel?: string
    decrementLabel?: string
  }>(),
  { modelValue: 1, min: 1, max: 100, step: 1, size: 'm', name: 'quantity', incrementLabel: 'Increment', decrementLabel: 'Decrement' }
)

const emit = defineEmits<{ 'update:modelValue': [value: number] }>()
defineOptions({ inheritAttrs: false })

const current = ref(props.modelValue)
watch(() => props.modelValue, (v) => { current.value = v })

const increment = () => {
  if (current.value + props.step <= props.max) current.value += props.step
  else current.value = props.max
  emit('update:modelValue', current.value)
}

const decrement = () => {
  if (current.value - props.step >= props.min) current.value -= props.step
  else current.value = props.min
  emit('update:modelValue', current.value)
}

const onChange = (e: Event) => {
  let val = Number((e.target as HTMLInputElement).value)
  if (val > props.max) val = props.max
  if (val < props.min) val = props.min
  current.value = val
  emit('update:modelValue', val)
}

const wrapperClass = computed(() => ['qty-selector', props.size !== 'm' ? `qty-selector--${props.size}` : null, props.isInvalid ? 'qty-selector--invalid' : null])
</script>

<template>
  <div :class="wrapperClass">
    <button
      v-if="!readonly"
      type="button"
      class="qty-selector__btn qty-selector__btn--dec"
      :aria-controls="id"
      :disabled="disabled || current <= min"
      tabindex="-1"
      :aria-label="decrementLabel"
      @click="decrement"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M19 13H5v-2h14v2z"/></svg>
    </button>
    <input
      :id="id"
      class="qty-selector__control"
      type="number"
      :name="name"
      :value="current"
      :disabled="disabled"
      :min="min"
      :max="max"
      :step="step"
      :readonly="readonly"
      :aria-invalid="isInvalid"
      :aria-valuemin="min"
      :aria-valuemax="max"
      :aria-valuenow="current"
      v-bind="$attrs"
      @change="onChange"
    />
    <button
      v-if="!readonly"
      type="button"
      class="qty-selector__btn qty-selector__btn--inc"
      :aria-controls="id"
      :disabled="disabled || current >= max"
      tabindex="-1"
      :aria-label="incrementLabel"
      @click="increment"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
    </button>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.qty-selector {
  @apply inline-flex items-center border border-grey-300 rounded-l overflow-hidden;
}

.qty-selector--invalid {
  @apply border-danger-500;
}

.qty-selector__control {
  @apply w-16 text-center py-2 text-sm border-none bg-white text-grey-900 focus:outline-none focus:ring-1 focus:ring-primary;
  -moz-appearance: textfield;
}
.qty-selector__control::-webkit-inner-spin-button,
.qty-selector__control::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }

.qty-selector--s .qty-selector__control {
  @apply w-12 py-1 text-xs;
}

.qty-selector__btn {
  @apply flex items-center justify-center w-10 h-10 bg-white text-grey-700 hover:bg-grey-100 transition-colors border-none cursor-pointer;
  @apply disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white;
}

.qty-selector--s .qty-selector__btn {
  @apply w-8 h-8;
}
</style>
