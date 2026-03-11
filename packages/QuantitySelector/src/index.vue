<script setup lang="ts">
import { computed, ref, watch } from 'vue'

/**
 * A quantity selector is an input component that allows users to increment or decrement a numeric value, typically using plus (+) and minus (−) buttons.
 */
const props = withDefaults(
  defineProps<{
    /**
     * A unique identifier for the quantity selector element, used to associate the label with the form element.
     */
    id: string
    /**
     * The name attribute for the quantity selector element, typically used for form submission.
     */
    name?: string
    /**
     * The current value of the quantity selector field.
     */
    modelValue?: number
    /**
     * If `true`, applies an invalid state to the quantity selector.
     */
    isInvalid?: boolean
    /**
     * If `true`, disables the quantity selector, making it non-interactive.
     */
    disabled?: boolean
    /**
     * Determines the size of the quantity selector.
     */
    size?: 's' | 'm'
    /**
     * Minimum acceptable value for the quantity selector.
     */
    min?: number
    /**
     * Maximum acceptable value for the quantity selector.
     */
    max?: number
    /**
     * Determines how much the value will change per click.
     */
    step?: number
    /**
     * If `true`, the quantity selector is read-only (cannot be edited).
     */
    readonly?: boolean
    /**
     * The label text for the increment button.
     */
    incrementlabel?: string
    /**
     * The label text for the decrement button.
     */
    decrementLabel?: string
  }>(),
  {
    modelValue: 1,
    min: 1,
    max: 100,
    step: 1,
    size: 'm',
    name: 'quantity-selector-input',
    incrementlabel: 'Increment',
    decrementLabel: 'Decrement',
  }
)

const currentValue = ref(props.modelValue)

watch(currentValue, (newVal) => {
  if (newVal !== props.modelValue) {
    emit('update:modelValue', newVal)
  }
})

const classObject = computed(() => {
  return {
    [`qty-selector--${props.size}`]: props.size && props.size !== 'm',
    'is-invalid': props.isInvalid,
  }
})

const increment = () => {
  if (currentValue.value + props.step <= props.max) {
    currentValue.value += props.step
  } else {
    currentValue.value = props.max
  }
}

const decrement = () => {
  if (currentValue.value - props.step > props.min) {
    currentValue.value -= props.step
  } else {
    currentValue.value = props.min
  }
}

const onChange = (value: number) => {
  currentValue.value = value

  if (currentValue.value > props.max) {
    currentValue.value = props.max
  }
  if (currentValue.value <= props.min) {
    currentValue.value = props.min
  }

  emit('update:modelValue', currentValue.value)
}

const emit = defineEmits<{
  /**
   * Emits when the quantity selector value changes, updating the `modelValue` prop.
   */
  'update:modelValue': [value: number]
}>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <div class="qty-selector" :class="classObject">
    <input
      :id="id"
      v-model="currentValue"
      class="qty-selector__control"
      type="number"
      :name="name"
      :disabled="disabled"
      :min="min"
      :max="max"
      :step="step"
      :readonly="readonly"
      :aria-invalid="isInvalid"
      :aria-valuemin="min"
      :aria-valuemax="max"
      :aria-valuenow="currentValue"
      v-bind="$attrs"
      @change="onChange(Number(($event.target as HTMLInputElement).value))"
    />
    <button
      v-if="!readonly"
      type="button"
      :aria-controls="id"
      class="qty-selector__btn qty-selector__btn--inc"
      tabindex="-1"
      :disabled="disabled || currentValue === max"
      :aria-label="incrementlabel"
      @click="increment"
    >
      <span class="qty-selector__icon">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
      </span>
      <span class="qty-selector__label">{{ incrementlabel }}</span>
    </button>
    <button
      v-if="!readonly"
      type="button"
      :aria-controls="id"
      class="qty-selector__btn qty-selector__btn--dec"
      tabindex="-1"
      :disabled="disabled || currentValue === min"
      :aria-label="decrementLabel"
      @click="decrement"
    >
      <span class="qty-selector__icon">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path fill="currentColor" d="M19 13H5v-2h14v2z"/>
        </svg>
      </span>
      <span class="qty-selector__label">{{ decrementLabel }}</span>
    </button>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.qty-selector {
  @apply inline-flex items-center border border-grey-300 rounded-l overflow-hidden;
}

.qty-selector.is-invalid {
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

.qty-selector__icon {
  @apply flex items-center justify-center;
}

.qty-selector__label {
  @apply sr-only;
}
</style>
