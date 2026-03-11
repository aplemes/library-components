<script setup lang="ts">
import { computed, useTemplateRef, type VNode } from 'vue'

/**
 * A text input is a single-line input that allows users to enter and edit short text-based content.
 * It is commonly used for names, email addresses, search queries, and form entries.
 */
const props = withDefaults(
  defineProps<{
    /**
     * A unique identifier for the input element, used to associate the label with the form element.
     */
    id: string
    /**
     * The name attribute for the input element, typically used for form submission.
     */
    name?: string
    /**
     * The current value of the input field.
     */
    modelValue?: string | number
    /**
     * A placeholder text to show in the input when it is empty.
     */
    placeholder?: string
    /**
     * Defines the type of input.
     */
    inputType?: 'date' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text'
    /**
     * If `true`, applies an invalid state to the input.
     */
    isInvalid?: boolean
    /**
     * If `true`, disables the input, making it non-interactive.
     */
    disabled?: boolean
    /**
     * Determines the size of the input.
     */
    size?: 's' | 'm'
    /**
     * If `true`, the input is read-only (cannot be edited).
     */
    readonly?: boolean
    /**
     * If `true`, a clear button will appear when the input has a value.
     */
    isClearable?: boolean
    /**
     * The label text for the clear button.
     */
    clearLabel?: string
    /**
     * Displays additional text inside the component, before the input.
     */
    prefix?: string
    /**
     * Displays additional text inside the component, after the input.
     */
    suffix?: string
  }>(),
  {
    inputType: 'text',
    size: 'm',
    clearLabel: 'clear content',
  },
)

defineSlots<{
  /**
   * Use this slot to insert an icon in the input.
   */
  icon?: () => VNode[]
}>()

const textInput = useTemplateRef('textInput')

const classObject = computed(() => {
  return {
    [`input--${props.size}`]: props.size && props.size !== 'm',
    'is-invalid': props.isInvalid,
  }
})

const clearValue = () => {
  emit('update:modelValue', '')
}

const emit = defineEmits<{
  /**
   * Emits when the input value changes, updating the `modelValue` prop.
   */
  'update:modelValue': [value: string | number]
}>()

function focus() {
  textInput.value?.focus()
}

defineOptions({
  inheritAttrs: false,
})

defineExpose({
  focus,
})
</script>

<template>
  <div class="input" :class="classObject">
    <span v-if="$slots.icon" class="input__icon">
      <slot name="icon" />
    </span>

    <span v-if="prefix" class="input__addon">{{ prefix }}</span>

    <input
      ref="textInput"
      :id="id"
      class="input__control"
      :value="modelValue"
      :type="inputType"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :aria-invalid="isInvalid"
      :readonly="readonly"
      v-bind="$attrs"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />

    <span v-if="suffix" class="input__addon input__addon--suffix">{{ suffix }}</span>

    <div v-if="isClearable && modelValue" class="input__controls">
      <button
        type="button"
        class="input__clear-btn"
        @click="clearValue"
      >
        <svg class="input__clear-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
        </svg>
        <span class="input__clear-label">{{ clearLabel }}</span>
      </button>
    </div>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.input {
  @apply flex items-center border border-grey-300 rounded-l bg-white transition-colors duration-200;
  @apply focus-within:border-primary focus-within:ring-1 focus-within:ring-primary;
}

.input.is-invalid {
  @apply border-danger-500;
}

.input.is-invalid:focus-within {
  @apply border-danger-500 ring-danger-500;
}

.input__icon {
  @apply flex items-center justify-center w-4 h-4 text-grey-500 ml-3 flex-shrink-0;
}

.input__addon {
  @apply flex items-center px-3 py-2 bg-grey-100 border-r border-grey-300 text-grey-600 text-sm flex-shrink-0;
}

.input__addon--suffix {
  @apply border-r-0 border-l border-grey-300;
}

.input--s .input__control {
  @apply px-2 py-1 text-xs;
}

.input__control {
  @apply flex-1 px-3 py-2 text-sm bg-transparent text-grey-900 placeholder-grey-400 border-none outline-none;
  @apply disabled:text-grey-400 disabled:cursor-not-allowed;
}

.input__controls {
  @apply flex items-center pr-2 flex-shrink-0;
}

.input__clear-btn {
  @apply flex items-center gap-1 text-grey-500 hover:text-grey-800 transition-colors bg-transparent border-none cursor-pointer p-0;
}

.input__clear-icon {
  @apply w-5 h-5;
}

.input__clear-label {
  @apply sr-only text-xs;
}
</style>
